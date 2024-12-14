<script>
import PlateShow from "../PlateShow.vue";
import { store } from "../../js/store.js";
import { RouterLink } from "vue-router";

export default {
  name: "PlatesListCard",
  data() {
    return {
      modal: false,
      store,
      showClearCartModal: false,
      newPlateObjToPush: null, // if guest push a plate already into the cart push in store.platesincart newPlateObjToPush(the spreaf of plateobj with quantities and total price)
    };
  },
  props: {
    plateObj: {
      type: Object,
      required: true,
    },
    singleRestaurant: {
      type: Object,
      required: true,
    }
  },
  components: {
    PlateShow,
  },
  methods: {
    toggleModal() {
      return (this.modal = !this.modal);
    },
    addToCart(plateObj) {
      console.log(
        "item to push in store.platesInCart",
        plateObj.id,
        plateObj.name
      );

      if (store.platesInCart.length > 0) {
        const isDifferentRestaurant = this.controlRestaurantId(plateObj);
        // if guest adds a plate of a different restaurant
        if (isDifferentRestaurant) {
          console.log("show modal");
          // open the modal
          this.showClearCartModal = true;
          return;
        }
      }
      // check if plateObj is already contained in store.platesInCart
      const plateInArray = store.platesInCart.find(
        (item) => item.id === plateObj.id
      );
      if (plateInArray) {
        // icrease quantity
        plateInArray.quantity += 1;
        // icrease price plate in totalPrice with the value of quantity
        plateInArray.totalPrice =
          parseFloat(plateInArray.price) * plateInArray.quantity;
        console.log(plateInArray);
      } else {
        // if the plate is not cpntained in store.platesInCart push the plate as a new plate
        this.newPlateObjToPush = {
          ...plateObj,
          quantity: 1,
          totalPrice: parseFloat(plateObj.price),
          restaurant: this.singleRestaurant,
        };
        store.platesInCart.push(
          // newPlateObjToPush =
          // spred oprator of plateObj(parameter)
          // with quantity and totalPrice
          this.newPlateObjToPush
        );
        console.log(
          "==========newPlateObjToPush to push in cart",
          this.newPlateObjToPush
        );
      }
      // icrement of store.totalQuantities after a plate was added in cart
      store.totalQuantities += 1;

      let total = 0;
      for (let i = 0; i < store.platesInCart.length; i++) {
        total += store.platesInCart[i].totalPrice;
      }
      store.totalPrice = total;
      // console.log("updated store.platesInCart", store.platesInCart)
    },
    controlRestaurantId(plateObj) {
      // restaurant_id of the new plate added in cart
      const plateId = plateObj.restaurant_id;
      // check if the restaurant_id of the new plate is different
      const findDifferentRestaurantId = store.platesInCart.some(
        (plate) => plateId != plate.restaurant_id
      );
      if (findDifferentRestaurantId) {
        // console.log("trovato piatto di un altro rist")
        return true;
      }
      return false;
    },
    clearCart(plate) {
      // for modal button
      store.platesInCart = [];
      localStorage.removeItem("platesInCart");
      store.totalQuantities = 0;
      localStorage.removeItem("totalQuantities");
      store.totalPrice = 0;
      localStorage.removeItem("totalPrice");
      this.showClearCartModal = false;
      this.addToCart(this.plateObj);
    },
    cancelClearCart() {
      // for modal button
      this.showClearCartModal = false;
      setTimeout(() => {
        this.$router.go(0);
      }, 0);
    },
  },
  computed: {
    isVisible() {
      return this.plateObj.visible === true;
    },
    showModal() {
      return this.modal;
    },
    plateObjToPushInShow() {
      const plateInArray = store.platesInCart.find(
        (item) => item.id === this.plateObj.id
      );
      // if guest add to cart from first and others time from addtocart of show the datas for props refresh
      // because the props plateObj from plateList.vue that we sent by props to ShowModal is not a reactive plate but static
      if (plateInArray) {
        return plateInArray
      } else {
        return {
          ...this.plateObj,
          quantity: 1,
          totalPrice: parseFloat(this.plateObj.price),
          restaurant: this.singleRestaurant,
        }
      }
    }
  },
};
</script>

<template>
  <li class="col-12 col-lg-6 p-1 p-lg-2">
    <div id="plate-card">
      <div class="wrapper" @click="toggleModal()">
        <div class="info-plate-card">
          <h4>{{ plateObj.name }}</h4>
          <!-- <p>{{ plateObj.description }}</p> -->
          <div class="price">{{ plateObj.price }}<span>&euro;</span></div>
        </div>
        <div class="box-img">
          <img v-if="plateObj.image" :src="plateObj.image" :alt="`Image of ${plateObj.name}`" />
          <img v-else :src="plateObj.image_placeholder" :alt="`Image of ${plateObj.name}`" />
        </div>
      </div>
      <button class="btn-add-item" @click="addToCart(plateObj)">
        <span>+</span>
      </button>
      <!-- props for PlateShow.vue if send newPlateObjToPush if is not null else send plateObjToPushInShow(computed) -->
      <PlateShow v-if="showModal" :plate="newPlateObjToPush || plateObjToPushInShow" @closeModal="toggleModal()" />
    </div>
  </li>

  <!-- Modal to clear cart -->
  <div v-if="showClearCartModal" class="modal-clear-cart">
    <div class="modal-content">
      <button class="btn-x" @click="cancelClearCart">
        <i class="fas fa-times fa-3x"></i>
      </button>
      <p>The cart contains a plate of other restaurant. You want to clear or do you want to go back to the old
        restaurant?</p>
      <div class="modal-buttons-row">
        <button @click="clearCart(plateObj)" class="btn-confirm">
          Clear current cart
        </button>
        <RouterLink :to="{ name: 'restaurants.show', params: { slug: store.platesInCart[0].restaurant.slug } }"
          @click="cancelClearCart" class="btn-cancel text-decoration-none">
          Back to {{ store.platesInCart[0].restaurant.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-x {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
}

#plate-card {
  border: 1px solid rgb(230, 217, 217);
  padding: 15px 12px;
  border-radius: 7px;
  display: flex;
  height: 125px;

  &>* {
    flex-basis: 50%;
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .wrapper {
    display: flex;
    flex-grow: 1;
    cursor: pointer;

    &>* {
      flex-basis: 50%;
    }
  }

  .info-plate-card {
    cursor: pointer;

    h4 {
      font-size: 15px;
      font-weight: 700;
    }

    p,
    h4 {
      margin-bottom: 8px;
      margin-right: 7px;
    }

    p,
    .price {
      font-size: 14px;
    }
  }

  .box-img {
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 1px 1px 5px gray;

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }

  .box-img,
  .btn-add-item {
    height: 100%;
    border: 1px solid rgb(230, 217, 217);
  }

  .btn-add-item {
    flex-basis: 40px;
    background-color: #fff;
    margin: 0px 0px 0px 10px;

    span {
      color: #70c8bf;
      font-size: 20px;
    }

    &:hover {
      border: 1px solid #ccc;

      span {
        color: #68a19c;
        font-size: 25px;
      }
    }
  }
}

.modal-clear-cart {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .modal-content {
    background: #ffffff;
    padding: 30px 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    width: 70%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    * {
      font-size: 15px;
    }

    p {
      color: #555555;
      margin-bottom: 20px;
      padding: 0 25px;
    }

    .modal-buttons-row {
      display: flex;
      justify-content: space-between;
      gap: 10px;

      .btn-cancel,
      .btn-confirm {
        flex: 1;
        color: #ffffff;
        border: none;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s;
      }

      .btn-confirm {
        background: #e74c3c;

        &:hover {
          background: #c0392b;
        }
      }

      .btn-cancel {
        background: #45ccbc;

        &:hover {
          background: #39a89d;
        }
      }
    }
  }
}
</style>

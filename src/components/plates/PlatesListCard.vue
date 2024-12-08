<script>
import PlateShow from '../PlateShow.vue';
import { store } from '../../js/store.js';

export default {
  name: "PlatesListCard",
  data() {
    return {
      modal: false,
      store,
    };
  },
  props: {
    plateObj: {
      type: Object,
      required: true,
    },
  },
  components: {
    PlateShow
  },
  methods: {
    toggleModal() {
      return this.modal = !this.modal
    },
    addToCart(plateObj) {
      console.log("item to push in store.platesInCart", plateObj.id, plateObj.name)
      // check if plateObj is already contained in store.platesInCart
      const plateInArray = store.platesInCart.find(
        (item) => item.id === plateObj.id
      );
      if (plateInArray) {
        // icrease quantity
        plateInArray.quantity += 1;
        // icrease price plate in totalPrice with the value of quantity
        plateInArray.totalPrice = parseFloat(plateInArray.price) * plateInArray.quantity;
      } else {
        // if the plate is not cpntained in store.platesInCart push the plate as a new plate
        store.platesInCart.push({
          // push the plate as a object with:
          // spred oprator of plateObj(parameter)
          // with quantity and totalPrice

          ...plateObj,
          quantity: 1,
          totalPrice: parseFloat(plateObj.price),
        });
      }
      console.log("updated store.platesInCart", store.platesInCart)
    },
  },
  computed: {
    isVisible() {
      return this.plateObj.visible === true;
    },
    showModal() {
      return this.modal
    }
  }
}
</script>

<template>
  <li class="col-12 col-lg-6 p-1 p-lg-2">
    <div id="plate-card">
      <div class="wrapper">
        <div class="info-plate-card" @click="toggleModal()">
          <h4>{{ plateObj.name }}</h4>
          <!-- <p>{{ plateObj.description }}</p> -->
          <div class="price">{{ plateObj.price }}<span>&euro;</span></div>
        </div>
        <div class="box-img">
          <img v-if="plateObj.image" :src="plateObj.image" :alt="`Image of ${plateObj.name}`">
          <img v-else :src="plateObj.image_placeholder" :alt="`Image of ${plateObj.name}`">
        </div>
      </div>
      <button class="btn-add-item" @click="addToCart(plateObj)"><span>+</span></button>
      <PlateShow v-if="showModal" :plate="plateObj" @closeModal="toggleModal()" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
#plate-card {
  border: 1px solid rgb(230, 217, 217);
  padding: 15px 12px;
  border-radius: 7px;
  display: flex;
  height: 125px;
  max-height: 125px;
  overflow: hidden;

  &>* {
    flex-basis: 50%;
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .wrapper {
    display: flex;
    flex-grow: 1;

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
    // flex-basis: 30%;
    width: 70px;

    img {
      display: block;
      width: 100%;
      height: 100%;
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
      color: #70C8BF;
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

@media screen and (max-width: 512px) {
  #plate-card {

    .box-img,
    img {
      display: none;
    }
  }
}
</style>
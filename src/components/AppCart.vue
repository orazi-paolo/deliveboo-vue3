<script>
import { RouterLink } from "vue-router";
import { store } from "../js/store.js";

export default {
  name: "AppCart",
  data() {
    return {
      store,
    };
  },
  components: {},
  methods: {
    deleteCart() {
      store.platesInCart.splice(0, store.platesInCart.length);
      localStorage.removeItem("platesInCart");
    },

    decrementPlates(clickedPlateId) {
      store.platesInCart.forEach((order) => {
        if (order.id === clickedPlateId && order.quantity >= 1) {
          order.quantity -= 1;
          order.totalPrice -= order.price;
        }
      });
      store.platesInCart = store.platesInCart.filter((order) => {
        if (order.id === clickedPlateId) {
          return order.quantity > 0;
        }
        return true;
      });
      if (store.platesInCart.length === 0)
        localStorage.removeItem("platesInCart");

      store.getOrderTotalPrice();
    },
  },
  computed: {
    hasOrders() {
      return store.platesInCart.length > 0;
    },
    localStoredPlates() {
      localStorage.setItem("platesInCart", JSON.stringify(store.platesInCart));
      localStorage.setItem("totalPrice", JSON.stringify(store.totalPrice));
      const localStoredPlates = localStorage.getItem("platesInCart");
      /* console.log(JSON.parse(localStoredPlates)); */
      return JSON.parse(localStoredPlates);
    },
  },
};
</script>

<template>
  <div id="cart">
    <div v-if="hasOrders" class="plates-in-cart">
      <div>
        <div class="cart-top-card">
          <h4>Your Order</h4>
          <font-awesome-icon :icon="['fas', 'trash-can']" class="fas-trash" @click="deleteCart" />
        </div>
        <h4>Cart</h4>
      </div>
      <ul class="orders-list d-flex flex-column-reverse justify-content-end">
        <li class="single-order" v-for="order in localStoredPlates" :key="order.id" @click="decrementPlates(order.id)">
          <div class="quantities">x {{ order.quantity }}</div>
          <div class="order-info">
            <h6 class="text-center m-0">{{ order.name }}</h6>
          </div>
          <div class="order-price text-end">
            {{ order.totalPrice.toFixed(2) }} <span>&euro;</span>
          </div>
        </li>
      </ul>
      <div class="cart-footer">
        <div v-if="hasOrders" class="order-total">
          <p>Total of the order</p>
          <div class="order-total-price">
            {{ store.totalPrice.toFixed(2) }}
            <span>&euro;</span>
          </div>
        </div>
        <router-link :to="{ name: 'checkout' }">
          <button :class="hasOrders ? 'button-cart-order' : 'button-cart-empty'">
            Go to payment
          </button>
        </router-link>
      </div>
    </div>

    <div v-else class="no-plates-in-cart">
      <font-awesome-icon :icon="['fas', 'cart-shopping']" class="fas-cart" />
      <span>Your cart is empty</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#cart {
  width: 100%;
  height: 500px;
  padding: 10px;
  border: 1px solid rgb(230, 217, 217);
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;

  .no-plates-in-cart,
  .plates-in-cart {
    flex-grow: 1;
    overflow-y: scroll;
  }

  .plates-in-cart {
    display: flex;
    flex-direction: column;

    .cart-top-card {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;

      .fas-trash {
        color: #45ccbc;
        cursor: pointer;
      }

      h4 {
        font-size: 20px;
        font-weight: 700;
        margin: 0;
      }
    }

    .orders-list {
      flex-grow: 2;
      padding: 0;
      margin: 0;
      max-height: 300px;
      overflow-y: auto;

      .single-order {
        padding: 5px 10px;
        display: flex;
        border: 1px solid rgb(230, 217, 217);
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 5px;

        &:hover {
          background-color: #eee;
        }

        .quantities {
          flex-basis: 10%;
        }

        .order-info {
          flex-grow: 1;
        }

        .order-price {
          flex-basis: 30%;
        }
      }
    }
  }

  .no-plates-in-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    * {
      color: #abadad;
    }

    .fas-cart {
      font-size: 30px;
    }
  }

  .cart-footer {
    background-color: white;
    border-top: 1px solid rgb(230, 217, 217);
    padding: 10px 0;

    @media (orientation: landscape) and (max-width: 768px) {
      position: fixed;
      bottom: 0;
      left: 50%;
      right: 50%;
      width: 70%;
      transform: translatex(-50%);
      padding: 10px;
      border-radius: 20px;
    }

    .order-total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      p {
        margin: 0;
      }

      .order-total-price {
        font-weight: 700;
      }
    }

    .button-cart-order,
    .button-cart-empty {
      width: 100%;
      font-weight: 700;
      border-color: transparent;
      border-radius: 5px;
      padding: 5px 0px;
    }

    .button-cart-order {
      background-color: #45ccbc;
      color: #fff;
      cursor: pointer;
    }

    .button-cart-empty {
      background-color: #e2e5e5;
      color: #abadad;
      cursor: not-allowed;
    }
  }
}
</style>

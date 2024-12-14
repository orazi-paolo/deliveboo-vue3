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
  },
  computed: {
    hasOrders() {
      return store.platesInCart.length > 0;
    },
    localStoredPlates() {
      localStorage.setItem("platesInCart", JSON.stringify(store.platesInCart));
      localStorage.setItem("totalPrice", JSON.stringify(store.totalPrice));
      localStorage.setItem("totalQuantities", JSON.stringify(store.totalQuantities));
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
      <div class="cart-top">
        <div class="cart-top-card">
          <h4>Your Order</h4>
          <font-awesome-icon :icon="['fas', 'trash-can']" class="fas-trash" @click="deleteCart" />
        </div>
        <h4>Cart</h4>
      </div>
      <div class="cart-bottom relative overflow-y-scroll">
        <ul class="orders-list d-flex flex-column-reverse justify-content-end">
          <li class="single-order" v-for="order in localStoredPlates" :key="order.id">
            <div class="quantities">
              <button class="decrement-button" @click="store.decrementPlates(order.id)">
                <span>-</span>
              </button>
              <span>x{{ order.quantity }}</span>
              <button class="increment-button" @click="store.incrementPlates(order.id)">
                <span>+</span>
              </button>
            </div>
            <div class="order-info">
              <h6 class="text-center m-0">{{ order.name }}</h6>
            </div>
            <div class="order-price text-end">
              {{ order.totalPrice.toFixed(2) }} <span>&euro;</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="cart-footer">
        <div v-if="hasOrders" class="order-total">
          <p>Total of the order</p>
          <div class="order-total-price">
            {{ store.totalPrice.toFixed(2) }}
            <span>&euro;</span>
          </div>
        </div>
        <router-link :to="{ name: 'checkout' }">
          <button type="button" data-bs-dismiss="modal" aria-label="Close"
            :class="hasOrders ? 'button-cart-order' : 'button-cart-empty'">
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
  /* height: 500px; */
  min-height: 200px;
  padding: 20px;
  border: 1px solid rgb(230, 217, 217);
  position: relative;
  display: flex;
  flex-direction: column;

  .no-plates-in-cart,
  .plates-in-cart {
    flex-grow: 1;
    /* overflow-y: scroll; */
  }

  .plates-in-cart {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    right: 0;

    .cart-top {
      height: 100px;
    }

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
      height: 200px;
      max-height: 200px;


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
          flex-basis: 20%;
          display: flex;
          align-items: center;
          gap: 8px;

          .decrement-button,
          .increment-button {
            border: 1px #45ccbc solid;
            background-color: transparent;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;

            span {
              color: #45ccbc;
              font-weight: 900;
            }
          }
        }

        .order-info {
          flex-grow: 1;
        }

        .order-price {
          flex-basis: 45%;

          @media (min-width: 800px) {
            flex-basis: 40%
          }

          @media (min-width: 900px) {
            flex-basis: 30%
          }

          @media (min-width: 1000px) {
            flex-basis: 20%
          }

          @media (min-width: 1250px) {
            flex-basis: 15%
          }
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
    height: 100px;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;

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

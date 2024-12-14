<script>
import { store } from "../js/store";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
  components: {},
  methods: {},
};
</script>

<template>
  <header class="sticky-top shadow">
    <nav class="navbar navbar-expand">
      <div class="container-fluid">
        <div class="nav-left">
          <ul class="pages-links">
            <li class="li-logo">
              <img class="img-logo" src="./../assets/deliveroo-logo.webp" alt="deliveroo-logo.web" />
              <router-link class="nav-link active fw-bold" aria-current="page"
                :to="{ name: 'home' }">deliveboo</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</router-link>
            </li>
          </ul>
        </div>
        <div class="nav-right">
          <!-- <router-link :to="{ name: 'resolveTransitionHooks.show' }">
            </router-link> -->
          <ul class="auth flex-column flex-sm-row">
            <router-link :to="{
              name: 'restaurants.show',
              params: { slug: store.platesInCart[0].restaurant.slug },
            }" v-if="store.platesInCart.length > 0 && $route.path === '/'">
              <li class="cart-button">
                <font-awesome-icon icon="cart-shopping" />
                <small class="cart-quantities">{{
                  store.totalQuantities
                }}</small>
              </li>
            </router-link>
            <li class="register-button">
              <font-awesome-icon :icon="['fas', 'house-chimney']" class="icon-auth" />
              <a href="http://127.0.0.1:8000/login" class="menu-item fw-bold turquoise text-decoration-none">Login</a>
            </li>
            <li class="sign-in-button">
              <font-awesome-icon :icon="['fas', 'user']" class="icon-auth" />
              <a href="http://127.0.0.1:8000/register"
                class="menu-item fw-bold turquoise text-decoration-none">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
nav {
  background-color: #fff;
  padding: 15px 25px;
  border-bottom: 1px solid rgb(230, 217, 217);

  * {
    color: #00cbbd;
    font-size: 16px;
  }

  .nav-left {
    display: flex;

    .li-logo {
      display: flex;
      align-items: center;
      gap: 5px;

      .img-logo {
        width: 25px;
      }
    }
  }

  .pages-links,
  .auth {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
  }

  .auth {
    li {
      display: flex;
      align-items: center;
      gap: 5px;
      border: 1px solid rgb(230, 217, 217);
      border-radius: 5px;
      padding: 5px 25px;

      .cart-quantities {
        color: #00cbbd;
      }

      .icon-auth {
        font-size: 12px;
      }
    }
  }
}
</style>

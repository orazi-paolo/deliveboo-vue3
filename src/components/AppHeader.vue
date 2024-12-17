<script>
import { store } from "../js/store";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<template>
  <header class="sticky-top shadow">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm px-3 px-xl-5">
      <div class="nav-left d-flex align-items-center justify-content-between w-100">
        <ul class="pages-links d-flex align-items-center">
          <li class="li-logo">
            <img class="img-logo" src="./../assets/deliveroo-logo.webp" alt="deliveroo-logo.webp" />
            <router-link class="nav-link active fw-bold" aria-current="page" :to="{ name: 'home' }">deliveboo</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">Home</router-link>
          </li>
        </ul>

        <button class="navbar-toggler" type="button" @click="toggleNavbar" :aria-expanded="isNavbarOpen" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto auth flex-column flex-md-row">
            <router-link v-if="store.platesInCart.length > 0 && $route.path === '/'"
              :to="{ name: 'restaurants.show', params: { slug: store.platesInCart[0].restaurant.slug } }">
              <li class="cart-button">
                <font-awesome-icon icon="cart-shopping" />
                <small class="cart-quantities">{{ store.totalQuantities }}</small>
              </li>
            </router-link>
            <li class="register-button">
              <font-awesome-icon :icon="['fas', 'house-chimney']" class="icon-auth" />
              <a href="http://127.0.0.1:8000/login" class="menu-item fw-bold turquoise text-decoration-none">Login</a>
            </li>
            <li class="sign-in-button">
              <font-awesome-icon :icon="['fas', 'user']" class="icon-auth" />
              <a href="http://127.0.0.1:8000/register" class="menu-item fw-bold turquoise text-decoration-none">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
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
    align-items: center;
    justify-content: space-between;

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

  .navbar-toggler {
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
}

@media (max-width: 768px) {
    .collapse {
      display: none;
    }

    .collapse.show {
      display: flex;
      flex-direction: column; 
      position: fixed; 
      top: 47px; 
      right: 10px;
      background-color: #ddd;
      border: 1px solid #aaa;
      padding: 5px;
      border-radius: 10px;
    }
  }
}



</style>

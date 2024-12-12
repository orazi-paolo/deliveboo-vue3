<script>
import PlatesList from "../components/plates/PlatesList.vue";
import AppCart from "../components/AppCart.vue";
import { store } from "../js/store";
import { storecart } from "../js/storeCart";
export default {
  name: "AppSingleRestaurant",
  data() {
    return {
      store,
      storecart,
      /* isScrolled: false, */
      totalHeight: document.documentElement.scrollHeight,
      /* isFooterVisible: false, */
      footerOffset: 0
    };
  },
  components: {
    PlatesList,
    AppCart,
  },
  computed: {
    // Osserva direttamente lo stato della visibilità del footer
    isFooterVisible() {
      return this.storecart.state.isFooterVisible;
    },
  },
  /* mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }, */
};
</script>

<template>
  <div class="container-custom my-4">
    <!-- to costumize container-custom go to style/general.scss -->
    <section class="row row-cols-1 row-cols-md-2 relative" id="AppSingleRestaurant">
      <div class="col">
        <PlatesList />
      </div>
      <div id="cart" class="col d-none d-md-block"
        :style="{ position: isFooterVisible ? 'absolute' : 'fixed', bottom: isFooterVisible ? `${footerOffset}px` : '0px' }">
        <AppCart />
      </div>

      <!-- Button trigger modal -->
      <button v-if="store.platesInCart.length > 0" type="button"
        class="btn btn-turquoise fw-bold d-md-none position-sticky left-0 right-0 bottom-0" data-bs-toggle="modal"
        data-bs-target="#staticBackdrop">
        <span class="me-5 border border-1 p-1 rounded-3">{{
          store.platesInCart.length
        }}</span>
        View Cart
      </button>
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="mt-5 overflow-scroll">
              <AppCart />
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal -->
    </section>
  </div>
</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use "../style/general.scss" as *;

#cart {
  position: fixed;
  top: 10%;
  right: 0;
}

@media (max-width: 767px) {
  #cart {
    position: static;
  }
}
</style>

<script>
import RestaurantsList from '../components/restaurants/RestaurantsList.vue';
import TipologiesList from '../components/tipologies/TipologiesList.vue';
import AppLoader from '../components/AppLoader.vue'
import { store } from '../js/store';

export default {
  name: "AppHome",
  data() {
    return {
      store,
    };
  },
  components: {
    RestaurantsList,
    TipologiesList,
    AppLoader,
  },
  methods: {

  },
  created() {
    this.store.getRestaurantsFiltered();
  },
};
</script>

<template>
  <section v-if="store.isLoadingRestaurants && store.isLoadingTipologies">
    <AppLoader />
  </section>

  <section v-else id="AppListRestaurants">
    <TipologiesList />
    <div class="container-custom my-4"> <!-- to costumize container-custom go to style/general.scss -->
      <RestaurantsList />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
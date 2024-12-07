<script>
import RestaurantsList from '../components/restaurants/RestaurantsList.vue';
import TipologiesList from '../components/tipologies/TipologiesList.vue';
export default {
  name: "AppListRestaurants",
  data() {
    return {

    };
  },
  components: {
    RestaurantsList,
    TipologiesList
  },
  methods: {

  },
};
</script>

<template>
  <div class="container-custom my-4"> <!-- to costumize container-custom go to style/general.scss -->
    <section id="AppListRestaurants">
      <TipologiesList />
      <RestaurantsList />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
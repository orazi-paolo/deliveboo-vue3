<script>
import RestaurantsList from '../components/restaurants/RestaurantsList.vue';
import TipologiesList from '../components/tipologies/TipologiesList.vue';
export default {
  name: "AppHome",
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
  <section id="AppListRestaurants">
    <TipologiesList />
    <div class="container-custom my-4"> <!-- to costumize container-custom go to style/general.scss -->
      <RestaurantsList />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
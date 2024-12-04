<script>
import RestaurantsList from '../components/restaurants/RestaurantsList.vue';
export default {
  name: "AppListRestaurants",
  data() {
    return {

    };
  },
  components: {
    RestaurantsList
  },
  methods: {

  },
};
</script>

<template>
  <div class="mx-5 mt-4"> <!-- simulazione container-lg -->
    <section id="AppListRestaurants">
      <RestaurantsList />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
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
    <div class="container-custom my-4"> <!-- to costumize container-custom go to style/general.scss -->
        <section id="AppListRestaurants">
            <RestaurantsList />
        </section>
    </div>
</template>

<style lang="scss" scoped></style>
<script>
import { RouterLink } from 'vue-router';
export default {
  name: "RestaurantsListCard",
  data() {
    return {

    };
  },
  components: {

  },
  methods: {
  },
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  }
};
</script>

<template>
  <!-- card of single restaurant -->
  <li class="col-12 col-sm-6 col-md-4 col-lg-3 p-1 p-lg-2">
    <div id="restaurant-card">
      <router-link class="text-decoration-none" :to="{ name: 'restaurants.show', params: { 'slug': restaurant.slug } }">
        <div class=" box-img">
          <img v-if="restaurant.image" :src="restaurant.image" :alt="`Image of ${restaurant.name}`">
          <img v-else :src="restaurant.image_placeholder" :alt="`Image of ${restaurant.name}`">
        </div>
        <div class="info-restaurant-card">
          <span class="badge me-2 my-1" :style="{ backgroundColor: tipology.color }"
            v-for="tipology in restaurant.tipologies" :key="tipology.id">{{
              tipology.name }}</span>
          <h4 class="text-black">{{ restaurant.name }}</h4>
          <p class="text-muted">{{ restaurant.address }}, {{ restaurant.city }}</p>
        </div>
      </router-link>
    </div>
  </li>
</template>

<style lang="scss" scoped>
#restaurant-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgb(239, 231, 231);
  border-radius: 7px;
  padding: 0;
  height: 300px;
  max-height: 300px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    scale: 1.05;
  }

  .box-img {
    height: 140px;
    width: 100%;
    border: 1px solid rgb(239, 231, 231);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info-restaurant-card {
    flex-basis: 50px;
    padding: 4px 15px;

    h4 {
      font-size: 16px;
      font-weight: 700;
    }

    span {
      font-size: 12px;
      font-weight: 600;
    }

    p,
    h4 {
      margin-bottom: 3px;
    }

    p {
      font-size: 14px;
    }
  }

}
</style>
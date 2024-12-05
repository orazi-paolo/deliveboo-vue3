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
  <!-- card of single plate -->
  <router-link :to="{ name: 'restaurants.show', params: { 'id': restaurant.id } }">
    <li id="restaurant-card">
      <div class=" box-img">
        <img :src="restaurant.image" :alt="`Image of ${restaurant.name}`">
      </div>
      <div class="info-restaurant-card">
        <h4>{{ restaurant.name }}</h4>
        <p>{{ restaurant.address }}, {{ restaurant.city }}</p>
      </div>
    </li>
  </router-link>
</template>

<style lang="scss" scoped>
#restaurant-card {
  flex-basis: calc(100% / 6 - 60px / 6);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgb(239, 231, 231);
  min-width: 375px;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }

  .box-img {
    flex-basis: 130px;
    max-height: 130px;
    border: 1px solid rgb(239, 231, 231);

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  .info-restaurant-card {
    flex-basis: 50px;
    padding: 2px 15px;

    h4 {
      font-size: 14px;
      font-weight: 700;
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
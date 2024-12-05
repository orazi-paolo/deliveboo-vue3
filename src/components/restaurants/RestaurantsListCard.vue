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
  <li class="col-4 col-lg-3" id="restaurant-card">
        <router-link :to="{ name: 'restaurants.show', params: { 'id': restaurant.id } }">
      <div class=" box-img">
        <img :src="restaurant.image" :alt="`Image of ${restaurant.name}`">
      </div>
      <div class="info-restaurant-card">
        <h4>{{ restaurant.name }}</h4>
        <p>{{ restaurant.address }}, {{ restaurant.city }}</p>
      </div>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
#restaurant-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgb(239, 231, 231);
  border-radius: 5px;
  padding: 0;

  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
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
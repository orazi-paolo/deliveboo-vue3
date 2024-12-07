<script>
import axios from 'axios';
import PlatesListCard from './PlatesListCard.vue';

export default {
  name: "Plateslist",
  data() {
    return {
      apiUrl: "http://127.0.0.1:8000/api/restaurant",
      singleRestaurant: [],
    }

  },
  components: {
    PlatesListCard
  },
  methods: {
    getRestaurant() {
      axios.get(`${this.apiUrl}/${this.$route.params.id}`)
        .then(response => {
          console.log(response.data.results.plates)
          this.singleRestaurant = response.data.results
          console.log(this.singleRestaurant)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getRestaurant();
  }
};
</script>

<template>
  <section>
    <section>
      <div class="back-button">
        <router-link :to="{ name: 'home' }">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          <span class="back-button-text">Back to restaurants</span>
        </router-link>
      </div>
    </section>
    <div class="restaurant-info d-flex align-items-center my-3">
      <img v-if="singleRestaurant.image" class="img-fluid rounded-2 w-25 me-3" :src="singleRestaurant.image"
        alt="Image of {{ singleRestaurant.name }}">
      <img v-else class="img-fluid rounded-2 w-25 me-3" :src="singleRestaurant.image_placeholder"
        alt="Image of {{ singleRestaurant.name }}">
      <h3 class="fw-semibold">{{ singleRestaurant.name }}</h3>
    </div>
    <ul class="row" id="plates-list">
      <PlatesListCard v-for="plate in singleRestaurant.plates" :key="plate.id" :plateObj="plate" />
    </ul>
  </section>
</template>

<style lang="scss">
.back-button {
  * {
    color: #00CBBD;
  }

  .back-button-text {
    margin: 0 0 0 10px;
  }
}

h3 {
  margin: 20px 0;
}

#plates-list {
  list-style-type: none;
  padding: 0;
  flex-wrap: wrap;
}
</style>
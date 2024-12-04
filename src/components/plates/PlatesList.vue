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
      <router-link :to="{ name: 'restaurants' }" class="btn btn-secondary">Go Back</router-link>
    </section>
    <h2>{{ singleRestaurant.name }}</h2>
    <ul id="plates-list">
      <PlatesListCard v-for="plate in singleRestaurant.plates" :key="plate.id" :plateObj="plate" />
    </ul>
  </section>
</template>

<style lang="scss">
#plates-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 15px;
}
</style>
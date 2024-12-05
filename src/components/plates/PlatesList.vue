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
    <h3>{{ singleRestaurant.name }}</h3>
    <ul class="row" id="plates-list">
      <PlatesListCard v-for="plate in singleRestaurant.plates" :key="plate.id" :plateObj="plate" />
    </ul>
  </section>
</template>

<style lang="scss">
h3{
 margin: 20px 0;
}

#plates-list {
  list-style-type: none;
  padding: 0;
  flex-wrap: wrap;
}
</style>
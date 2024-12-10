<script>
import axios from 'axios';
import PlatesListCard from './PlatesListCard.vue';
import AppLoader from '../AppLoader.vue';
export default {
  name: "Plateslist",
  data() {
    return {
      apiUrl: "http://127.0.0.1:8000/api/restaurant",
      singleRestaurant: [],
      isLoading: true
    }

  },
  components: {
    PlatesListCard,
    AppLoader
  },
  methods: {
    getRestaurant() {
      axios.get(`${this.apiUrl}/${this.$route.params.slug}`)
        .then(response => {
          console.log(response.data.results.plates)
          this.singleRestaurant = response.data.results
          console.log(this.singleRestaurant)
          this.isLoading = false
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  // mounted() {
  //   const slug = this.$route.params.slug;
  //   console.log("Slug ricevuto:", slug); 
  //   axios.get(`http://127.0.0.1:8000/api/restaurant/${slug}`)
  //     .then(response => {
  //       this.singleRestaurant = response.data.results;
  //       this.isLoading = false;
  //     })
  //     .catch(error => {
  //       console.log("Errore nella chiamata API:", error);
  //       this.isLoading = false;
  //     });
  // },
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
    <section v-if="isLoading">
      <AppLoader />
    </section>
    <section v-else>
      <div class="restaurant-info d-flex align-items-center my-3">
        <img v-if="singleRestaurant.image" class="img-fluid rounded-2 w-25 me-3" :src="singleRestaurant.image"
          alt="Image of {{ singleRestaurant.name }}">
        <img v-else class="img-fluid rounded-2 w-25 me-3" :src="singleRestaurant.image_placeholder"
          alt="Image of {{ singleRestaurant.name }}">
        <div>
          <span class="badge me-2 my-1" :style="{ backgroundColor: tipology.color }"
            v-for="tipology in singleRestaurant.tipologies" :key="tipology.id">{{
              tipology.name }}</span>
          <h3 class="fw-semibold">{{ singleRestaurant.name }}</h3>
        </div>
      </div>
      <ul class="row" id="plates-list">
        <PlatesListCard v-for="plate in singleRestaurant.plates" :key="plate.id" :plateObj="plate" />
      </ul>
    </section>
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
  margin: 10px 0;
}

#plates-list {
  list-style-type: none;
  padding: 0;
  flex-wrap: wrap;
}

@media screen and (max-width: 520px) {
  .restaurant-info {
    img {
      display: none;
    }
  }
}
</style>
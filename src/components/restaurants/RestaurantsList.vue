<script>
import RestaurantsListCard from './RestaurantsListCard.vue';
import axios from 'axios';
export default {
    name: "RestaurantsList",
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/restaurant",
            listRestaurants: [],
        };
    },
    components: {
        RestaurantsListCard
    },
    methods: {
        getRestaurants() {
            axios.get(this.apiUrl)
                .then(response => {
                    console.log(response.data.results)
                    this.listRestaurants = response.data.results
                    console.log(this.listRestaurants)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    created() {
        this.getRestaurants();
    }
};
</script>

<template>
    <section>
        <ul class="row" id="restaurants-list">
            <RestaurantsListCard v-for="restaurant in listRestaurants" :key="restaurant.id" :restaurant="restaurant" />
        </ul>
    </section>
</template>

<style lang="scss">
#restaurants-list {
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    display: flex;
}
</style>
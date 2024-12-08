<script>
import RestaurantsListCard from './RestaurantsListCard.vue';
import axios from 'axios';
import { store } from '../../js/store';
export default {
    name: "RestaurantsList",
    data() {
        return {
            store,
            listRestaurants: [],

        };
    },
    components: {
        RestaurantsListCard
    },
    methods: {

    },
    computed: {

    },
    created() {
        store.getRestaurantsFiltered()
        store.tipologiesIds = []
        console.log("store.restaurantsFiltered", store.restaurantsFiltered)
    }
};
</script>

<template>
    <section>
        <div class="p-2">
            <h5>Search Results: "{{ store.restaurantsFiltered.length }}"</h5>
        </div>
        <ul class="row" id="restaurants-list">
            <RestaurantsListCard v-for="restaurant in store.restaurantsFiltered" :key="restaurant.id"
                :restaurant="restaurant" />
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
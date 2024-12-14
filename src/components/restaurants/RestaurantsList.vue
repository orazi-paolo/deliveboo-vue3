<script>
import RestaurantsListCard from './RestaurantsListCard.vue';
import { store } from '../../js/store';
import axios from 'axios';
export default {
    name: "RestaurantsList",
    data() {
        return {
            store,
            listRestaurants: [],
            apiUrl: "http://127.0.0.1:8000/api/tipologies",
            tipologies: [],
        };
    },
    components: {
        RestaurantsListCard
    },
    methods: {
        getTipologies() {
            axios.get(this.apiUrl)
                .then(response => {
                    this.tipologies = response.data.results
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                })
        },
    },
    computed: {
        restaurantsFiltered() {
            if (store.tipologiesIds.length > 1) {
                return store.restaurantsFiltered.filter(restaurant => {
                    return store.tipologiesIds.every(tipologyId => restaurant.tipologies.some(tipology => tipology.id === tipologyId))
                })
            }
            return store.restaurantsFiltered
        },
        activeTipologies() {
            return this.tipologies.filter(tipology => store.tipologiesIds.includes(tipology.id))
        }
    },
    created() {
        // store.tipologiesIds = []
        // this.store.getRestaurantsFiltered() // commentato questa chiamata è stata fatta su AppHome.vue
        // console.log("store.restaurantsFiltered", store.restaurantsFiltered)
        this.getTipologies()
    }
};
</script>

<template>
    <section>
        <div class="p-2">
            <h5>
                Search Results:
                <span class="turquoise">
                    "{{ restaurantsFiltered.length }}"
                </span>
                <span class="badge m-2 my-1" v-for="tipology in activeTipologies" :key="tipology.id"
                    :style="{ backgroundColor: tipology.color }">
                    {{ tipology.name }}
                </span>
            </h5>
        </div>
        <ul class="row" id="restaurants-list">
            <RestaurantsListCard v-for="restaurant in restaurantsFiltered" :key="restaurant.id"
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
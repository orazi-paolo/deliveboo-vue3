<script>
import RestaurantsListCard from './RestaurantsListCard.vue';
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
        restaurantsFiltered() {
            if (store.tipologiesIds.length > 1) {
                return store.restaurantsFiltered.filter(restaurant => {
                    return store.tipologiesIds.every(tipologyId => restaurant.tipologies.some(tipology => tipology.id === tipologyId))
                })
            }
            return store.restaurantsFiltered
        }
    },
    created() {
        // store.tipologiesIds = []
        // this.store.getRestaurantsFiltered() // commentato questa chiamata è stata fatta su AppHome.vue
        // console.log("store.restaurantsFiltered", store.restaurantsFiltered)
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
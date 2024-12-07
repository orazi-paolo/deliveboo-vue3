import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    // Variables
    platesInCart: [],
    tipologiesIds: [],
    restaurantsFiltered: [],
    // apiUrlRestaurants: "http://127.0.0.1:8000/api/restaurants",
    apiUrlRestaurantsFilter: "http://127.0.0.1:8000/api/restaurant/filter",

    // Methods
    joinTipologiesIds() {
        if (store.tipologiesIds.length > 0) {
            return store.tipologiesIds.join(',');
        }
        return '';
    },
    getRestaurantsFiltered() {
        axios.get(this.apiUrlRestaurantsFilter, {
            params: {
                tipologies: this.joinTipologiesIds()
            }
        })
            .then(response => {
                console.log("======= Inizio chiamata API Restaurants Filtered======= ")
                console.log(response.data.results)
                this.restaurantsFiltered = response.data.results
                console.log(this.restaurantsFiltered)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                console.log("======= Chiamata API Restaurants Completata Filtered======= ")
            })
    },
})
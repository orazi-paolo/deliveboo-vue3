import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    // Variables
    platesInCart: [],
    tipologiesIds: [],
    restaurantsFiltered: [],
    // apiUrlRestaurants: "http://127.0.0.1:8000/api/restaurants",
    apiUrlRestaurantsFilter: "http://127.0.0.1:8000/api/restaurant/filter",
    // loader
    isLoadingRestaurants: true,
    isLoadingTipologies: true,

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
                this.isLoadingRestaurants = false;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                console.log("======= Chiamata API Restaurants Completata Filtered======= ")
            });
    },

    // Method for adding dishes to the cart
    addPlateToCart(plate, quantity, selectedIngredients) {
        // Check if the dish is already in your cart
        const existingPlate = this.platesInCart.find(item => item.id === plate.id);

        if (existingPlate) {
            existingPlate.quantity += quantity;
            existingPlate.totalPrice += plate.price * quantity;
        } else {
            this.platesInCart.push({
                id: plate.id,
                name: plate.name,
                price: plate.price,
                quantity,
                ingredients: selectedIngredients,
                totalPrice: plate.price * quantity,
            });
        }
    }
})
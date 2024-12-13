import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  // Variables
  platesInCart: JSON.parse(localStorage.getItem("platesInCart")) || [],
  tipologiesIds: [],
  restaurantsFiltered: [],
  // apiUrlRestaurants: "http://127.0.0.1:8000/api/restaurants",
  apiUrlRestaurantsFilter: "http://127.0.0.1:8000/api/restaurant/filter",
  // loader
  isLoadingRestaurants: true,
  isLoadingTipologies: true,
  totalPrice: JSON.parse(localStorage.getItem("totalPrice")) || 0,

  // Methods
  joinTipologiesIds() {
    if (store.tipologiesIds.length > 0) {
      return store.tipologiesIds.join(",");
    }
    return "";
  },
  getRestaurantsFiltered() {
    axios
      .get(this.apiUrlRestaurantsFilter, {
        params: {
          tipologies: this.joinTipologiesIds(),
        },
      })
      .then((response) => {
        console.log("Dati ricevuti:", response.data.results);
        console.log("======= Inizio chiamata API Restaurants Filtered======= ");
        console.log(response.data.results);
        this.restaurantsFiltered = response.data.results;
        console.log(this.restaurantsFiltered);
        this.isLoadingRestaurants = false;
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log(
          "======= Chiamata API Restaurants Completata Filtered======= "
        );
      });
  },

  // Method for adding dishes to the cart
  addPlateToCart(plate, quantity, selectedIngredients) {
    // Check if the dish is already in your cart
    const existingPlate = this.platesInCart.find(
      (item) => item.id === plate.id
    );

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
        restaurant_id: plate.restaurant_id,
      });
    }
  },
  getOrderTotalPrice() {
    // in totalPrice calculate the amount of the total order inside of the client's cart
    let finalPrice = 0;
    for (let i = 0; i < this.platesInCart.length; i++) {
      const plate = this.platesInCart[i];
      finalPrice += plate.totalPrice;
    }
    this.totalPrice = finalPrice;
  },
  clearCart() {
    this.platesInCart = [];
    localStorage.removeItem("platesInCart");
  },

  decrementPlates(plateId) {
    this.platesInCart.forEach((order) => {
      if (order.id === plateId && order.quantity >= 1) {
        order.quantity -= 1;
        order.totalPrice -= order.price;
      }
    });
    this.platesInCart = this.platesInCart.filter((order) => {
      if (order.id === plateId) {
        return order.quantity > 0;
      }
      return true;
    });
    if (this.platesInCart.length === 0)
      localStorage.removeItem("platesInCart");

    this.getOrderTotalPrice();
  },

  incrementPlates(plateId) {
    this.platesInCart.forEach((order) => {
      if (order.id === plateId) {
        order.quantity += 1;
        order.totalPrice = parseInt(order.price) * order.quantity;
      }
    });

    this.getOrderTotalPrice();
    localStorage.setItem("platesInCart", JSON.stringify(this.platesInCart));
    localStorage.setItem("totalPrice", JSON.stringify(this.totalPrice));
  }
});

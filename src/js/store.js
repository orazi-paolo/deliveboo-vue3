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
  totalQuantities: JSON.parse(localStorage.getItem("totalQuantities")) || 0,

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
  addPlateToCart(plate, selectedIngredients) {
    // Check if the dish is already in your cart
    const existingPlate = this.platesInCart.find(
      (item) => item.id === plate.id
    );

    if (existingPlate) {
      existingPlate.quantity += 1;
      existingPlate.totalPrice += plate.price * plate.quantity;
    } else {
      this.platesInCart.push({
        ...plate,
        ingredients: selectedIngredients,
      });
    }
    // update storage this.totalQuantities
    this.totalQuantities += 1;
    localStorage.setItem("totalQuantities", JSON.stringify(this.totalQuantities));

    localStorage.setItem("platesInCart", JSON.stringify(this.platesInCart));
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
  getOrderTotalQuantities() {
    // in totalquantities calculate the amount of the quantities of the plates in the order inside of the client's cart
    let finalQuantities = 0;
    for (let i = 0; i < this.platesInCart.length; i++) {
      const plate = this.platesInCart[i];
      finalQuantities += plate.quantity;
    }
    this.totalQuantities = finalQuantities;
    localStorage.setItem("totalQuantities", JSON.stringify(this.totalQuantities));
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
    this.getOrderTotalQuantities();
    // console.log(this.totalQuantities)
  },

  incrementPlates(plateId, plateObj) {
    let isInCart = false;
    this.platesInCart.forEach((order) => {
      if (order.id === plateId) {
        order.quantity += 1;
        order.totalPrice = order.price * order.quantity;
        isInCart = true;
      }
    });
    // if guest want to add a new plate in cart in ShowPlate modal with button(+) incrementPlates
    if (!isInCart) {
      this.platesInCart.push(plateObj);
    }

    this.getOrderTotalPrice();
    this.getOrderTotalQuantities();

    localStorage.setItem("platesInCart", JSON.stringify(this.platesInCart));
    // console.log(this.totalQuantities)
  }
});

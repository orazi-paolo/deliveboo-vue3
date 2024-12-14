<script>
import { store } from '../js/store.js';

export default {
    name: "OrderReview",
    data() {
        return {
            store,
        };
    },
    components: {

    },
    methods: {
        goBackPage() {
          this.$router.back();
        },
    },
    computed: {
        totalPrice() {
            return store.totalPrice;
        }
    },
    created() {
        store.getOrderTotalPrice()
    }
};
</script>

<template>
    <section id="OrderReview" class="container">
        <!-- back button -->
        <button class="back-button" @click="goBackPage">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
            <span class="back-button-text">Back to the restaurant</span>   
        </button>
        <!-- restaurant infos -->
        <div class="restaurant-info d-flex align-items-center mb-2 mt-3">
            <img v-if="store.platesInCart[0].restaurant.image" class="img-fluid rounded-2 w-25 me-3" :src="store.platesInCart[0].restaurant.image"
            alt="Image of {{ singleRestaurant.name }}">
            <img v-else class="img-fluid rounded-2 w-25 me-3" :src="store.platesInCart[0].restaurant.image_placeholder"
            alt="Image of {{ singleRestaurant.name }}">
            <div>
            <h4 class="fw-semibold">{{ store.platesInCart[0].restaurant.name }}</h4>
            </div>
        </div>
        <!-- orders-list -->
        <h4>Order summary:</h4>
        <div class="review-card">
            <ul class="orders-list" v-for="singlePlate in store.platesInCart" :key="singlePlate.id">
                <li class="single-order">
                    <div class="quantities">
                        <button class="decrement-button" @click="store.decrementPlates(singlePlate.id)">
                            <span>-</span>
                        </button>
                        <span>x{{ singlePlate.quantity }}</span>
                        <button class="increment-button" @click="store.incrementPlates(singlePlate.id)">
                            <span>+</span>
                        </button>
                    </div>
                    <div class="order-info">
                        <h5>{{ singlePlate.name }}</h5>
                    </div>
                    <div class="order-price">
                        {{ singlePlate.totalPrice.toFixed(2) }} <span>&euro;</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="review-order-footer">
            <div class="review-order-footer-content">
                <p>Total of the order</p>
                <div class="order-total-price">
                    {{ totalPrice.toFixed(2) }}
                    <span>&euro;</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.back-button {
    background-color: transparent;
    border-color: transparent;

    * {
        color: #00CBBD;
    }

    .back-button-text {
        margin: 0 0 0 10px;
    }
}

#OrderReview {
    .orders-list {
        padding: 0;
        margin: 0;
        max-height: 300px;
        overflow-y: auto;

        .single-order {
            display: flex;
            align-items: center;
            padding: 10px;
            border: 1px solid rgb(230, 217, 217);

            &:hover {
                background-color: #eee;
            }

            .quantities,
            .order-price {
                flex-basis: 20%;
                text-align: center;
            }

            .quantities {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 8px;

                .decrement-button, .increment-button{
                    border: 1px #45ccbc solid;
                    background-color: transparent;
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;

                    span{
                    color:#45ccbc;
                    font-weight: 900;
                    }
                }
            }

            .order-info {
                flex-grow: 1;

                h5 {
                    font-size: 17px;
                    font-weight: 400;
                    margin: 0;
                    padding: 0 8px;
                }
            }
        }
    }

    .review-order-footer {
        bottom: 0;
        background-color: #fff;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        border: 1px solid #00CBBD;


        .review-order-footer-content {
            display: flex;
            align-items: center;
            gap: 15px;

            * {
                color: #00CBBD;
            }

            p {
                margin: 0;
            }

            .order-total-price {
                font-weight: 900;
            }
        }
    }
}
</style>
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
        <div class="back-button">
            <!-- <router-link :to="{ name: 'restaurant-show', params: { slug: restaurant.slug } }">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                <span class="back-button-text">Back to the restaurant</span>
            </router-link> -->
        </div>
        <div class="restaurant-info">
            <div class="img-box">
                <img src="" alt="">
            </div>
            <h6>{{ store.platesInCart[0].restaurant.name }}</h6>
        </div>
        <h4>Order summary:</h4>
        <div class="review-card">
            <ul class="orders-list" v-for="singlePlate in store.platesInCart" :key="singlePlate.id">
                <li class="single-order">
                    <div class="quantities">x{{ singlePlate.quantity }}</div>
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
    margin-bottom: 20px;

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
                flex-basis: 15%;
                text-align: center;
            }

            .order-info {
                flex-grow: 1;

                h5 {
                    font-size: 17px;
                    font-weight: 400;
                    margin: 0;
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
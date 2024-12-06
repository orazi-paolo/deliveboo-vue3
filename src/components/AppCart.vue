<script>
import { store } from '../js/store.js';

export default {
    name: "AppCart",
    data() {
        return {
            store,
        };
    },
    components: {

    },
    methods: {
        deleteCart(){
            store.platesInCart.splice(0, store.platesInCart.length)
        },
    },
    computed: {
        hasOrders() {
            return store.platesInCart.length > 0;
        }
    }
};
</script>

<template>
    <div id="cart">
        <div v-if="hasOrders" class="plates-in-cart">
            <div class="cart-top-card">
                <h4>Your Order</h4>
                <font-awesome-icon :icon="['fas', 'trash-can']" 
                    class="fas-trash" @click="deleteCart"
                />
            </div>
            <h4>Cart</h4>
            <ul class="orders-list" v-for="(order, index) in store.platesInCart" :key="order.id">
                <li class="single-order">
                    <div class="quantities">
                        x{{ order.quantity }}
                    </div>
                    <div class="order-info">
                        <h5>{{ order.name }}</h5>
                    </div>
                    <div class="order-price">
                        {{ order.totalPrice.toFixed(2) }} <span>&euro;</span>
                    </div>
                </li>
            </ul>
        </div>

        <div v-else class="no-plates-in-cart">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="fas-cart" />
            <span>Your cart is empty</span>
        </div>
        <div class="cart-footer">
            <div v-if="hasOrders">

            </div>
            <button :class="hasOrders ? 'button-cart-order' : 'button-cart-empty'">Go to payment</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#cart {
    width: 100%;
    height: 500px;
    padding: 10px;
    border: 1px solid rgb(230, 217, 217);
    position: relative;
    display: flex;
    flex-direction: column;
    position: relative;

    .no-plates-in-cart,
    .plates-in-cart {
        flex-grow: 1;
        overflow-y: auto;

    }

    .plates-in-cart {
        .cart-top-card{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;

            .fas-trash{
                color: #45CCBC;
            }
            h4 {
                font-size: 20px;
                font-weight: 700;
                margin: 0;
            }
        }

        .orders-list {
            padding: 0;
            margin: 0;
            max-height: 300px;
            overflow-y: auto;

            .single-order {
                display: flex;
                padding: 10px;
                border: 1px solid rgb(230, 217, 217);

                &:hover {
                    background-color: #eee;
                }

                .quantities {
                    flex-basis: 10%;
                }

                .order-info {
                    flex-grow: 1;

                    h5 {
                        font-size: 17px;
                        font-weight: 400;
                    }
                }

                .order-price {
                    flex-basis: 30%;
                }
            }
        }
    }

    .no-plates-in-cart {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        * {
            color: #ABADAD;
        }

        .fas-cart {
            font-size: 30px;
        }
    }

    .cart-footer {
        position: sticky;
        bottom: 0;
        background-color: white;
        border-top: 1px solid rgb(230, 217, 217);
        padding: 10px 0;

        .button-cart-order,
        .button-cart-empty {
            width: 100%;
            font-weight: 700;
            border-color: transparent;
            border-radius: 5px;
            padding: 5px 0px;
        }

        .button-cart-order {
            background-color: #45CCBC;
            color: #fff;
            cursor: pointer;
        }

        .button-cart-empty {
            background-color: #E2E5E5;
            color: #ABADAD;
            cursor: not-allowed;
        }
    }
}
</style>
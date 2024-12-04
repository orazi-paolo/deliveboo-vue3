<script>
export default {
  name:"AppCart",  
  data() {
    return {
    //   aggiungere quantites
      orders: [
       {
          name: "Sushi Platter",
          image: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
          description: "Assorted sushi rolls with fresh fish and vegetables.",
          ingredients: ["Rice", "Nori", "Salmon", "Tuna", "Avocado", "Cucumber"],
          price: 18.0,
          visible: true
        },
        {
          name: "Cheeseburger",
          image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
          description: "Juicy burger with cheese, lettuce, tomato, and pickles.",
          ingredients: ["Beef patty", "Cheese", "Lettuce", "Tomato", "Pickles", "Bun"],
          price: 10.0,
          visible: true
        },
        {
          name: "Pad Thai",
          image: "https://images.unsplash.com/photo-1604908553925-c5b76749a193",
          description: "Stir-fried Thai noodles with shrimp, peanuts, and tamarind sauce.",
          ingredients: ["Rice noodles", "Shrimp", "Eggs", "Peanuts", "Tamarind sauce"],
          price: 9.5,
          visible: true
        },
      ]
    };
  },
  components: {
    
  },
  methods: {
    
  },
  computed:{
    hasOrders() {
        return this.orders.length < 0;
    }
  }
};
</script>

<template>
    <div id="cart">
        <div v-if="hasOrders" class="plates-in-cart">
            <!-- cart with orders -->
            <h4>Your Order</h4>
            <h4>Cart</h4>
            <ul class="orders-list" v-for="order in orders">
                <li class="single-order">
                    <div class="quantities">x2</div>
                    <div class="order-info">
                        <h5>{{ order.name }}</h5>
                    </div>
                    <div class="order-price">
                        {{ order.price.toFixed(2) }} <span>&euro;</span>
                    </div>
                </li>
            </ul>   
        </div>

        <div v-else class="no-plates-in-cart">
            <!-- cart if is empty -->
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="fas-cart"/>  
            <span>Your cart is empty</span>      
        </div>
        <!-- button for payment -->
        <div class="cart-footer">
            <div v-if="hasOrders">

            </div>
            <button :class="hasOrders ? 'button-cart-order' : 'button-cart-empty'">Go to payment</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #cart{
        width: 450px;
        height: 500px;
        padding: 10px;
        border:1px solid rgb(230, 217, 217);
        position: relative;
        display: flex;
        flex-direction: column;   
        position: relative;

        .no-plates-in-cart, .plates-in-cart{
            flex-grow: 1;
            overflow-y: auto; 

        }

        .plates-in-cart{
            h4{
                margin-bottom: 25px;
                font-size: 20px;
                font-weight: 700;
            }
            .orders-list{
                padding: 0;
                margin: 0;
                max-height: 300px;
                overflow-y: auto;

                .single-order{
                    display: flex;
                    padding: 10px;
                    border: 1px solid rgb(230, 217, 217);

                    &:hover {
                        background-color: #eee;
                    }

                    .quantities{
                        flex-basis: 10%;
                    }

                    .order-info{
                        flex-grow: 1;
                        h5{
                            font-size: 17px;
                            font-weight: 400;
                        }
                    }

                    .order-price{
                        flex-basis: 30%;
                    }
                }
            }
        }

        .no-plates-in-cart{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;

            *{
                color: #ABADAD;
            }

            .fas-cart{
                font-size: 30px;
            }
        }

        .cart-footer {
            position: sticky;
            bottom: 0;
            background-color: white;
            border-top: 1px solid rgb(230, 217, 217);
            padding: 10px 0;

            .button-cart-order, .button-cart-empty {
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
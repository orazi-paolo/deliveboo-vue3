<script>
export default {
  name:"AppCart",  
  data() {
    return {
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
        return this.orders.length > 0;
    }
  }
};
</script>

<template>
    <div id="cart">
        <!-- cart if with orders -->
        <div v-if="hasOrders" class="plates-in-cart">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />  
            <span>Il carrsssssssssssssssssello è vuoto</span>      
        </div>
        <!-- cart if is empty -->
        <div v-else class="no-plates-in-cart">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />  
            <span>Il carrello è vuoto</span>      
        </div>
        <!-- button for payment -->
        <button :class="hasOrders ? 'button-cart-order' : 'button-cart-empty'">Vai al Pagamento</button>
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
        .no-plates-in-cart, .plates-in-cart{
            flex-grow: 1;
        }

        .no-plates-in-cart{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .button-cart-order, .button-cart-empty{
            width: 100%;
            font-weight: 700;
            border-color: transparent;
            border-radius: 5px;
            padding: 5px 0px;
        }
        .button-cart-order{
            background-color: #45CCBC;
            color: #fff;
            cursor: pointer;
        }
        
        .button-cart-empty{
            background-color: #E2E5E5;
            color: #ABADAD;
            cursor: not-allowed;
        }
    }

  
</style>
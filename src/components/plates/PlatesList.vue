<script>
import PlatesListCard from './PlatesListCard.vue';

export default {
  name:"Plateslist",  
  data() {
    return {
     listPlates: [
        {
          name: "Margherita Pizza",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Pizza-Margarita.jpg",
          description: "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil.",
          ingredients: ["Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
          price: 8.99,
          visible: true
        },
        {
          name: "Caesar Salad",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Caesar_salad_%281%29.jpg",
          description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
          ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
          price: 7.49,
          visible: true
        },
        {
          name: "Spaghetti Carbonara",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Spaghetti_alla_Carbonara.jpg",
          description: "A classic Roman pasta dish with pancetta, eggs, Parmesan, and black pepper.",
          ingredients: ["Spaghetti", "Pancetta", "Eggs", "Parmesan cheese", "Black pepper"],
          price: 12.99,
          visible: true
        },
        {
          name: "Sushi Platter",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg",
          description: "A variety of fresh sushi rolls and sashimi served with soy sauce and wasabi.",
          ingredients: ["Rice", "Nori", "Raw fish", "Soy sauce", "Wasabi", "Pickled ginger"],
          price: 24.99,
          visible: false
        },
        {
          name: "Cheeseburger",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Cheeseburger.jpg",
          description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and onion on a sesame bun.",
          ingredients: ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Onion", "Sesame bun"],
          price: 10.49,
          visible: true
        },
        {
          name: "Pad Thai",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pad_Thai_kung.JPG",
          description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce.",
          ingredients: ["Rice noodles", "Shrimp", "Tofu", "Peanuts", "Tamarind sauce"],
          price: 14.99,
          visible: true
        },
        {
          name: "Chicken Tikka Masala",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Chicken_tikka_masala.jpg",
          description: "Chunks of marinated chicken in a creamy and spicy tomato sauce.",
          ingredients: ["Chicken", "Tomato sauce", "Cream", "Spices", "Cilantro"],
          price: 15.99,
          visible: true
        },
        {
          name: "Greek Salad",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Greek_salad.jpg",
          description: "Fresh vegetables, feta cheese, and olives tossed with olive oil and oregano.",
          ingredients: ["Tomatoes", "Cucumbers", "Feta cheese", "Olives", "Olive oil", "Oregano"],
          price: 9.99,
          visible: true
        },
        {
          name: "Ramen",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Shoyu_ramen.jpg",
          description: "Japanese noodle soup with broth, pork, soft-boiled egg, and scallions.",
          ingredients: ["Noodles", "Pork", "Broth", "Soft-boiled egg", "Scallions"],
          price: 13.99,
          visible: true
        },
        {
          name: "Veggie Burger",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Veggie_burger.jpg",
          description: "A plant-based patty with lettuce, tomato, onion, and vegan mayo on a bun.",
          ingredients: ["Plant-based patty", "Lettuce", "Tomato", "Onion", "Vegan mayo", "Bun"],
          price: 11.99,
          visible: false
        },
        {
          name: "Fish and Chips",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Fish_and_chips_blackpool.jpg",
          description: "Crispy fried fish served with golden french fries and tartar sauce.",
          ingredients: ["Fish", "Potatoes", "Batter", "Tartar sauce"],
          price: 14.49,
          visible: true
        },
        {
          name: "Caprese Salad",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Caprese_salad.jpg",
          description: "Tomatoes, mozzarella, and basil drizzled with olive oil and balsamic glaze.",
          ingredients: ["Tomatoes", "Mozzarella", "Basil", "Olive oil", "Balsamic glaze"],
          price: 8.49,
          visible: true
        },
        {
          name: "BBQ Ribs",
          image: "https://upload.wikimedia.org/wikipedia/commons/3/32/BBQ_ribs_plate.jpg",
          description: "Slow-cooked ribs glazed with a smoky barbecue sauce.",
          ingredients: ["Pork ribs", "BBQ sauce", "Spices"],
          price: 19.99,
          visible: true
        },
        {
          name: "Lasagna",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Lasagne_-_stonesoup.jpg",
          description: "Layered pasta with meat sauce, béchamel, and melted cheese.",
          ingredients: ["Pasta", "Meat sauce", "Béchamel", "Cheese"],
          price: 16.99,
          visible: true
        },
        {
          name: "Chicken Caesar Wrap",
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Chicken_Caesar_wrap.jpg",
          description: "Grilled chicken, romaine lettuce, and Caesar dressing in a tortilla wrap.",
          ingredients: ["Chicken", "Romaine lettuce", "Caesar dressing", "Tortilla"],
          price: 9.99,
          visible: false
        },
        {
          name: "Tacos al Pastor",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Tacos_al_Pastor.jpg",
          description: "Marinated pork served on corn tortillas with pineapple and cilantro.",
          ingredients: ["Pork", "Corn tortillas", "Pineapple", "Cilantro", "Onions"],
          price: 12.99,
          visible: true
        },
        {
          name: "Poke Bowl",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Poke_Bowl.jpg",
          description: "A Hawaiian dish with marinated raw fish, rice, and fresh vegetables.",
          ingredients: ["Raw fish", "Rice", "Avocado", "Cucumber", "Soy sauce"],
          price: 14.99,
          visible: true
        },
        {
          name: "Fried Chicken",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Fried_chicken%2C_Belgrade.JPG",
          description: "Crispy and golden fried chicken served with coleslaw and mashed potatoes.",
          ingredients: ["Chicken", "Flour", "Spices", "Coleslaw", "Mashed potatoes"],
          price: 11.99,
          visible: true
        },
        {
          name: "Shrimp Scampi",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Shrimp_scampi.jpg",
          description: "Garlic butter shrimp served over linguine pasta.",
          ingredients: ["Shrimp", "Garlic", "Butter", "Linguine", "Parsley"],
          price: 17.99,
          visible: true
        },
        {
          name: "Beef Stroganoff",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Beef_Stroganoff.JPG",
          description: "Tender beef in a creamy mushroom sauce served over egg noodles.",
          ingredients: ["Beef", "Mushrooms", "Sour cream", "Egg noodles"],
          price: 18.99,
          visible: true
        }
      ],

    };
  },
  components: {
    PlatesListCard
  },
  methods: {
    
  },
};
</script>

<template>
  <section>
    <ul class="list-unstyled">
      <PlatesListCard v-for="(plate, index) in listPlates" :key="index" :plateObj="plate"/>
    </ul>
  </section>
</template>

<style lang="scss">
  
</style>
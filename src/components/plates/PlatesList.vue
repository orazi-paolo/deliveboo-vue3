<script>
import axios from 'axios';
import PlatesListCard from './PlatesListCard.vue';

export default {
  name:"Plateslist",  
  data() {
    return {
      apiUrl: "",
      listPlates: [
        {
          name: "Spaghetti Carbonara",
          image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2",
          description: "Traditional Italian pasta with eggs, cheese, pancetta, and pepper.",
          ingredients: ["Spaghetti", "Eggs", "Pecorino cheese", "Pancetta", "Black pepper"],
          price: 12.5,
          visible: true
        },
        {
          name: "Margherita Pizza",
          image: "https://images.unsplash.com/photo-1548365328-0196b1736a27",
          description: "Classic Neapolitan pizza with tomato, mozzarella, and fresh basil.",
          ingredients: ["Dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
          price: 8.5,
          visible: true
        },
        {
          name: "Caesar Salad",
          image: "https://images.unsplash.com/photo-1572441712495-e03c07d273cc",
          description: "Fresh salad with romaine lettuce, croutons, and Caesar dressing.",
          ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing"],
          price: 7.0,
          visible: true
        },
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
        {
          name: "French Onion Soup",
          image: "https://images.unsplash.com/photo-1618477449673-4dcf9501ed2b",
          description: "Rich onion soup topped with croutons and melted cheese.",
          ingredients: ["Onions", "Beef broth", "Cheese", "Croutons"],
          price: 6.5,
          visible: true
        },
        {
          name: "Tacos",
          image: "https://images.unsplash.com/photo-1605948568467-8d54a7e7e0c4",
          description: "Soft corn tortillas filled with spiced pork and fresh toppings.",
          ingredients: ["Tortillas", "Pork", "Cilantro", "Onions", "Salsa"],
          price: 8.0,
          visible: true
        },
        {
          name: "Ramen",
          image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
          description: "Japanese noodle soup with miso broth, pork, and egg.",
          ingredients: ["Noodles", "Miso broth", "Pork", "Egg", "Green onions"],
          price: 11.0,
          visible: true
        },
        {
          name: "Falafel Wrap",
          image: "https://images.unsplash.com/photo-1612392061783-1d48f4e6efde",
          description: "Middle Eastern wrap with falafel, hummus, and fresh veggies.",
          ingredients: ["Pita bread", "Falafel", "Hummus", "Lettuce", "Tomato", "Cucumber"],
          price: 7.5,
          visible: true
        }
    ],
    }

  },
  components: {
    PlatesListCard
  },
  methods: {
    getPlates(){
      axios.get(this.apiUrl)
        .then(response => {
            this.listPlates = response.data.results
          })
        .catch(function(error) {
        console.log(error);
      });
    },

    show(plateId){
      this.$router.push({name: "plates.show", params: {id: plateId}})
    }
  }, 
  // created() {
  //   this.getPlates();
  // }
};
</script>

<template>
  <section>
    <ul id="plates-list">
      <PlatesListCard v-for="(plate, index) in listPlates" :key="index" :plateObj="plate"/>
    </ul>
  </section>
</template>

<style lang="scss">
#plates-list{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 15px;
}
  
</style>
<script>
import RestaurantsListCard from './RestaurantsListCard.vue';
import axios from 'axios';
export default {
  name:"RestaurantsList",  
  data() {
    return {
        apiUrl: "http://127.0.0.1:8000/api/restaurant",
        listRestaurants: [],
        // listRestaurants: [
        //     {
        //         name: "La Pergola",
        //         image: "https://images.unsplash.com/photo-1603570415533-0cbcb6b7ed92",
        //         city: "Rome",
        //         address: "Via Alberto Cadlolo, 101",
        //         VAT: "IT01234567890"
        //     },
        //     {
        //         name: "Osteria Francescana",
        //         image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
        //         city: "Modena",
        //         address: "Via Stella, 22",
        //         VAT: "IT09876543210"
        //     },
        //     {
        //         name: "Enoteca Pinchiorri",
        //         image: "https://images.unsplash.com/photo-1556912994-2fcee24e7e1e",
        //         city: "Florence",
        //         address: "Via Ghibellina, 87",
        //         VAT: "IT12345678901"
        //     },
        //     {
        //         name: "Piazza Duomo",
        //         image: "https://images.unsplash.com/photo-1581929763532-5c19b1f21a47",
        //         city: "Alba",
        //         address: "Piazza Risorgimento, 4",
        //         VAT: "IT23456789012"
        //     },
        //     {
        //         name: "Da Vittorio",
        //         image: "https://images.unsplash.com/photo-1578922864608-10249ba90c8b",
        //         city: "Brusaporto",
        //         address: "Via Cantalupa, 17",
        //         VAT: "IT34567890123"
        //     },
        //     {
        //         name: "Reale",
        //         image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        //         city: "Castel di Sangro",
        //         address: "Località Casadonna, 1",
        //         VAT: "IT45678901234"
        //     },
        //     {
        //         name: "Le Calandre",
        //         image: "https://images.unsplash.com/photo-1565895405130-74f5e02d5802",
        //         city: "Rubano",
        //         address: "Via Liguria, 1",
        //         VAT: "IT56789012345"
        //     },
        //     {
        //         name: "Cracco",
        //         image: "https://images.unsplash.com/photo-1576765607928-9d55d73a39e3",
        //         city: "Milan",
        //         address: "Galleria Vittorio Emanuele II",
        //         VAT: "IT67890123456"
        //     },
        //     {
        //         name: "Il Luogo di Aimo e Nadia",
        //         image: "https://images.unsplash.com/photo-1580913399273-99aaf8dc8210",
        //         city: "Milan",
        //         address: "Via Privata Raimondo Montecuccoli, 6",
        //         VAT: "IT78901234567"
        //     },
        //     {
        //         name: "La Madia",
        //         image: "https://images.unsplash.com/photo-1604908553925-c5b76749a193",
        //         city: "Licata",
        //         address: "Corso Filippo Re Capriata, 22",
        //         VAT: "IT89012345678"
        //     }
        // ]

    };
  },
  components: {
    RestaurantsListCard
  },
  methods: {
    getRestaurants(){
      axios.get(this.apiUrl)
        .then(response => {
            console.log(response)
            this.listRestaurants = response.data.results
          })
        .catch(function(error) {
        console.log(error);
      });
    },

    show(restaurantId){
      this.$router.push({name: "restaurants.show", params: {id: restaurantId}})
      console.log(restaurantId)
    }
  },
  created() {     
    this.getRestaurants(); 
    }
};
</script>

<template>
    <section>
        <ul id="restaurants-list">
            <RestaurantsListCard v-for="(restaurant, index) in listRestaurants" :key="index" :restaurantObj="restaurant"
                @select-restaurant="show"
            />
        </ul>
    </section>
</template>

<style lang="scss">
#restaurants-list{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    gap: 10px;
    }
</style>
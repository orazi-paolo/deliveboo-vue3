<script>
export default {
  name:"RestaurantsListCard",  
  data() {
    return {
      
    };
  },
  components: {
    
  },
  methods: {
    selectRestaurant(id){
        this.$emit("select-restaurant", id)
    }
  },
  props: {
    restaurantObj: {
      type: Object,
      required: true,
    },
  }
};
</script>

<template>
  <!-- card of single plate -->
  <li id="restaurant-card" @click="selectRestaurant(restaurantObj.id)">
    <div class="box-img">
    <img :src="restaurantObj.image" :alt="`Image of ${restaurantObj.name}`">    
    </div>
    <div class="info-restaurant-card">
      <h4>{{ restaurantObj.name }}</h4>
      <p>{{ restaurantObj.address }}, {{ restaurantObj.city }}</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
  #restaurant-card{
    flex-basis: calc(100% / 6 - 60px / 6);
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid rgb(239, 231, 231);
    min-width: 375px;
    border-radius: 5px;
    
    &:hover {
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    }
        
    .box-img{
        flex-basis: 130px;
        max-height: 130px;
        border: 1px solid rgb(239, 231, 231);

        img{
        display: block;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        }
    }

    .info-restaurant-card{
      flex-basis: 50px;
      padding: 2px 15px;

      h4{
        font-size: 14px;
        font-weight: 700;
      }

      p, h4{
       margin-bottom: 3px; 
      }

      p{
        font-size: 14px;
      }
    } 

  }
</style>
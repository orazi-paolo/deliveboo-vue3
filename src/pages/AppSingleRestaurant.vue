<script>
import PlatesList from '../components/plates/PlatesList.vue';
import AppCart from '../components/AppCart.vue';
export default {
  name:"AppSingleRestaurant",  
  data() {
    return {
      
    };
  },
  components: {
    PlatesList,
    AppCart,
  },
  methods: {
    
  },
};
</script>

<template>
    <div class="mx-5 mt-4">  <!-- simulazione container-lg -->
        <section id="AppSingleRestaurant">
            <div>
                <PlatesList />
            </div>
            <div>
                <AppCart />
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    #AppSingleRestaurant{
        display: flex;
    }
  
</style>
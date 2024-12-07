<script>
import TipologiesList from '../components/tipologies/TipologiesList.vue';
export default {
  name:"Home",  
  data() {
    return {
      
    };
  },
  components: {
    TipologiesList
  },
  methods: {
    
  },
};
</script>

<template>
   <div class="container-custom my-4"> <!-- to costumize container-custom go to style/general.scss -->
        <section class="row" id="AppSingleRestaurant">
            <div>
                <TipologiesList />
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
  
</style>
<script>
import TipologiesListCard from './TipologiesListCard.vue';
export default {
  name: "TipologiesList",  
  data() {
    return {
      
    };
  },
  components: {
    TipologiesListCard,
  },
  methods: {
    
  },
};
</script>

<template>
  <ul id="tipologies-list" class="row">
    <TipologiesListCard />
  </ul>
</template>

<style lang="scss" scoped>
  #tipologies-list {
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    display: flex;
}
</style>
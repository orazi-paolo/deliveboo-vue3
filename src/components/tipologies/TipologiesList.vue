<script>
import TipologiesListCard from './TipologiesListCard.vue';
import axios from 'axios';
export default {
  name: "TipologiesList",  
  data() {
    return {
        apiUrl: "http://127.0.0.1:8000/api/tipologies",
        listTipologies: [],
    };
  },
  components: {
    TipologiesListCard,
  },
  methods: {
    getTipologies() {
            axios.get(this.apiUrl)
                .then(response => {
                    console.log(response.data.results)
                    this.listTipologies = response.data.results
                    console.log(this.listTipologies)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    created() {
        this.getTipologies();
    }
};
</script>

<template>
  <ul id="tipologies-list" class="row">
    <TipologiesListCard v-for="(tipology, index) in listTipologies" :key="index" :tipologyObj="tipology"/>
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
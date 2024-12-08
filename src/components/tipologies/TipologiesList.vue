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
                    console.log("======= Inizio chiamata API Tipologie ======= ")
                    console.log(response.data.results)
                    this.listTipologies = response.data.results
                    console.log(this.listTipologies)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    console.log("======= Chiamata API Tipologie Completata ======= ")
                })
        },
    },
    created() {
        this.getTipologies();
    }
};
</script>

<template>
    <section>
        <div class="title-section p-2 pb-0">
            <h5>Restaurants</h5>
        </div>
        <ul id="tipologies-list" class="row">
            <TipologiesListCard v-for="tipology in listTipologies" :key="tipology.id" :tipologyObj="tipology" />
        </ul>
    </section>
</template>

<style lang="scss" scoped>
#tipologies-list {
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    display: flex;
}
</style>
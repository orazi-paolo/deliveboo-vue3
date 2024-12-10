<script>
import TipologiesListCard from './TipologiesListCard.vue';
import axios from 'axios';
import { store } from '../../js/store';
import AppTipologiesLoader from '../AppTipologiesLoader.vue';
import AppLoader from '../AppLoader.vue';
export default {
    name: "TipologiesList",
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/tipologies",
            listTipologies: [],
            store
        };
    },
    components: {
        AppTipologiesLoader,
        TipologiesListCard,
        AppLoader
    },
    methods: {
        getTipologies() {
            axios.get(this.apiUrl)
                .then(response => {
                    console.log("======= Inizio chiamata API Tipologie ======= ")
                    console.log(response.data.results)
                    this.listTipologies = response.data.results
                    console.log(this.listTipologies)
                    store.isLoadingTipologies = false;
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
    <section class="py-2">
        <div class="container-custom my-4">
            <div class="title-section p-2 pb-0">
                <h5 class="text-white">Restaurants</h5>
            </div>
            <div class="row" v-if="store.isLoadingTipologies">
                <AppTipologiesLoader />
            </div>
            <ul id="tipologies-list" class="row" v-else>
                <TipologiesListCard v-for="tipology in listTipologies" :key="tipology.id" :tipologyObj="tipology" />
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#tipologies-list {
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    display: flex;
}

section {
    background: linear-gradient(to right, black 30%, transparent), url('../../assets/hamburgers.jpg');
    background-size: cover;
    background-position: bottom right;
}
</style>
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
            images: [
                {
                    name: "bg-1.jpg",
                    id: 1
                },
                {
                    name: "bg-2.jpeg",

                    id: 2
                },
                {
                    name: "bg-3.jpeg",

                    id: 3
                },
                {
                    name: "bg-4.webp",

                    id: 4
                },
                {
                    name: "bg-5.webp",

                    id: 5
                },
                {
                    name: "bg-6.jpeg",

                    id: 6
                },
            ],
            activeIndex: 0,
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
                    /* console.log("======= Inizio chiamata API Tipologie ======= ")
                    console.log(response.data.results) */
                    this.listTipologies = response.data.results
                    /* console.log(this.listTipologies) */
                    store.isLoadingTipologies = false;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    /* console.log("======= Chiamata API Tipologie Completata ======= ") */
                })
        },
        autoPlay() {
            setInterval(() => {
                this.activeIndex++;
                this.restartCicle;
                /* console.log(this.activeIndex) */
            }, 5000);
        },
        getImagePath(imagePath) {
            return new URL(`../../assets/${imagePath}`, import.meta.url).href;
        }

    },
    computed: {

        // Metodo per gestire il ciclo delle immagini
        restartCicle() {
            if (this.activeIndex < 0) {
                return this.activeIndex = this.images.length - 1;
            } else if (this.activeIndex === this.images.length) {
                return this.activeIndex = 0;
            } else {
                return this.activeIndex;
            }
        },


    },
    created() {
        /* console.log(this.activeIndex) */
        this.getTipologies();
        this.autoPlay();
    }
};
</script>

<template>
    <section class="py-2">
        <img v-for="(image, index) in images" class="tipologies-bg" :key="image.id" :src="getImagePath(image.name)"
            alt="Background" :class="{ 'active': index === activeIndex }">
        <div class="container-custom my-4">
            <div class="title-section p-2 pb-0">
                <h5 class="text-white">Restaurants</h5>
            </div>
            <div class="mb-5" v-if="store.isLoadingTipologies">
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
    background: linear-gradient(to right, black 30%, transparent);
    /* background-size: cover;
    background-position: bottom right */
    ;
    position: relative;
}

.tipologies-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom right;
    /* height: 100%; */
    z-index: -1;
    display: none;
    animation: slideIn 1s ease-in;
    /* animation: fadeOut 1s ease-out; */

    &.active {
        display: block;
    }

    &img {
        display: none;
    }
}

@keyframes slideIn {
    0% {
        opacity: 0.5;
        transform: translateX(30%);
        transition: opacity 0.1s ease;
    }

    100% {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.1s ease;
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 0;
        transform: translateX(100%);
    }
}
</style>
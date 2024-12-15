<script>
import RestaurantsListCard from './RestaurantsListCard.vue';
import { store } from '../../js/store';
import axios from 'axios';
export default {
    name: "RestaurantsList",
    data() {
        return {
            store,
            listRestaurants: [],
            apiUrl: "http://127.0.0.1:8000/api/tipologies",
            tipologies: [],
        };
    },
    components: {
        RestaurantsListCard
    },
    methods: {
        getTipologies() {
            axios.get(this.apiUrl)
                .then(response => {
                    this.tipologies = response.data.results
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                })
        },
        prevPage() {
            if (store.page > 1) {
                store.page--
                store.getRestaurantsFiltered()
            }
        },
        nextPage() {
            if (store.page < store.restaurantsFiltered.length) {
                store.page++
                store.getRestaurantsFiltered()
            }
        }
    },
    computed: {
        restaurantsFiltered() {
            if (store.tipologiesIds.length > 1) {
                return store.restaurantsFiltered.filter(restaurant => {
                    return store.tipologiesIds.every(tipologyId => restaurant.tipologies.some(tipology => tipology.id === tipologyId))
                })
            }
            return store.restaurantsFiltered
        },
        activeTipologies() {
            return this.tipologies.filter(tipology => store.tipologiesIds.includes(tipology.id))
        }
    },
    created() {
        // store.tipologiesIds = []
        // this.store.getRestaurantsFiltered() // commentato questa chiamata è stata fatta su AppHome.vue
        // console.log("store.restaurantsFiltered", store.restaurantsFiltered)
        this.getTipologies()
    }
};
</script>

<template>
    <section>
        <div class="p-2">
            <h5>
                Search Results:
                <span class="turquoise">
                    "{{ store.tipologiesIds.length > 0 ? restaurantsFiltered.length : store.totalRestaurants }}"
                </span>
                <span class="badge m-2 my-1" v-for="tipology in activeTipologies" :key="tipology.id"
                    :style="{ backgroundColor: tipology.color }">
                    {{ tipology.name }}
                </span>
            </h5>
        </div>
        <div v-if="store.tipologiesIds.length == 0" class="d-flex justify-content-center align-items-center gap-3">
            <i v-if="store.tipologiesIds.length == 0" class="fa-solid fa-circle-chevron-left" @click="prevPage"></i>
            <!-- Number of pages -->
            <span class="badge badge-turquoise my-3  rounded-pill">
                Page {{ store.page }} of {{ Math.ceil(store.totalRestaurants / 12) }}
            </span>
            <i v-if="store.tipologiesIds.length == 0" class="fa-solid fa-circle-chevron-right" @click="nextPage"></i>
        </div>
        <ul class="row" id="restaurants-list">
            <RestaurantsListCard v-for="restaurant in restaurantsFiltered" :key="restaurant.id"
                :restaurant="restaurant" />
        </ul>

    </section>
</template>

<style lang="scss" scoped>
#restaurants-list {
    flex-wrap: wrap;
    padding: 0;
    list-style-type: none;
    display: flex;
}

.badge.badge-turquoise {
    background-color: #00CBBD;
    font-size: 18px;
    padding: 10px 20px;
}

i {
    cursor: pointer;
    color: #8b8b8b;
    font-size: 2.5rem;

    &:hover {
        color: #00CBBD;
        scale: 1.1;
        transition: all 0.3s ease;
    }
}

@media (max-width: 576px) {
    .badge.badge-turquoise {
        font-size: 14px;
        padding: 10px 15px;
    }

    i {
        font-size: 2rem;
    }
}
</style>
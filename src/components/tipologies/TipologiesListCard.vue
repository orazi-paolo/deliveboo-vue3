<script>
import { store } from '../../js/store';
export default {
    name: "TipologiesListCard",
    data() {
        return {
            store,
            active: false,
        };
    },
    components: {

    },
    props: {
        tipologyObj: {
            type: Object,
            required: true,
        }
    },
    methods: {
        toggleTipology() {
            /* console.log([...store.tipologiesIds]); */
            this.active = !this.active;
            // Controllo se il tipologyObj.id è già presente in store.tipologiesIds
            // Controllando se il tipologyObj.id è presente in store.tipologiesIds            
            const tipologyIdInArray = store.tipologiesIds.includes(
                this.tipologyObj.id);
            if (tipologyIdInArray) { // Se è vero allora filtriamo con la condizione se tipologyObj.id è diverso da tipologyId
                // Ci restituirà l'array filtrato dalla condizione, ovvero l'array senza il tipologyObj.id cliccato
                store.tipologiesIds = store.tipologiesIds.filter(tipologyId => tipologyId !== this.tipologyObj.id);
            } else {
                store.tipologiesIds.push(this.tipologyObj.id);
            }

            if (store.tipologiesIds.length == 0) {
                store.getRestaurantsFiltered()
            } else {
                store.getRestaurants()
            }
        }
    },
    computed: {
        isActive() {
            // Controlla se il tipologyObj.id è nell'array store.tipologiesIds
            return store.tipologiesIds.includes(this.tipologyObj.id);
        }
    },
};
</script>

<template>
    <!-- card of single tipology -->
    <li class="col-4 col-sm-3 col-lg-2 py-2 px-md-3 p-lg-3">
        <div class="tipology-card" :class="{ active: isActive }" @click="toggleTipology()">
            <div class="box-img">
                <img v-if="tipologyObj.image" class="rounded-2" :src="tipologyObj.image"
                    :alt="`Image of ${tipologyObj.name}`">
                <img v-else class="rounded-2" :src="tipologyObj.image_placeholder"
                    :alt="`Image of ${tipologyObj.name}`">
            </div>
            <h4>{{ tipologyObj.name }}</h4>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.tipology-card {
    position: relative;
    // border: 1px solid rgb(230, 217, 217);
    /* padding: 15px 12px; */
    border-radius: 7px;
    height: 80px;
    max-height: 80px;
    cursor: pointer;

    .box-img {
        height: 80px;
        width: 100%;
        // border: 1px solid rgb(239, 231, 231);

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.6);
        }
    }

    h4 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        font-weight: 700;
        color: #fff;
    }

    &.active,
    &:hover {
        box-shadow: 0 0 10px 0 rgb(0, 234, 255);
        scale: 1.1;
        transition: all 0.3s ease;
    }

    &:active {
        scale: 1;
        transition: all 0.3s ease;
    }

}

@media screen and (max-width: 450px) {
    .tipology-card {
        height: 60px;
        max-height: 60px;

        .box-img {
            height: 60px;
        }

        h4 {
            font-size: 12px;
            font-weight: 900;
        }
    }
}
</style>

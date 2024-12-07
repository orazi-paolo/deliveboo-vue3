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
            this.active = !this.active;
            // Controllo se il tipologyObj.id è già presente in store.tipologiesIds
            // Controllando se il tipologyObj.id è presente in store.tipologiesIds
            const tipologyIdInArray = store.tipologiesIds.find(
                (tipologyId) => tipologyId === this.tipologyObj.id
            );
            if (tipologyIdInArray) { // Se è vero allora filtriamo con la condizione se tipologyObj.id è diverso da tipologyId
                // Ci restituirà l'array filtrato dalla condizione, ovvero l'array senza il tipologyObj.id cliccato
                store.tipologiesIds = store.tipologiesIds.filter(tipologyId => tipologyId !== this.tipologyObj.id);
            } else {
                store.tipologiesIds.push(this.tipologyObj.id);
            }
            console.log([...store.tipologiesIds]);
        }
    }
};
</script>

<template>
    <!-- card of single tipology -->
    <li class="col-3 p-1 p-lg-2">
        <div id="tipology-card" :class="{ active: active }" @click="toggleTipology(), store.getRestaurantsFiltered()">
            <div class="box-img">
                <img :src="tipologyObj.image_placeholder" :alt="`Image of ${tipologyObj.name}`">
            </div>
            <h4>{{ tipologyObj.name }}</h4>
        </div>
    </li>
</template>

<style lang="scss" scoped>
#tipology-card {
    border: 1px solid rgb(230, 217, 217);
    padding: 15px 12px;
    border-radius: 7px;
    height: 125px;
    max-height: 125px;
    cursor: pointer;

    .box-img {
        height: 100px;
        width: 100%;
        border: 1px solid rgb(239, 231, 231);

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &.active {
        background-color: rgb(255, 0, 0);
    }

}
</style>
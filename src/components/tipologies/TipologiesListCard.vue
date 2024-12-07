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
    <li class="col-2 p-1 p-lg-3">
        <div id="tipology-card" :class="{ active: active }" @click="toggleTipology(), store.getRestaurantsFiltered()">
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
#tipology-card {
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
            filter: brightness(0.9);
        }
    }

    h4 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        font-weight: 600;
        color: #fff;
    }

    &.active,
    &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 234, 255, 0.5);
        scale: 1.1;
    }

    &:active {
        scale: 1;
    }

}
</style>
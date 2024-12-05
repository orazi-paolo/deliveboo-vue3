<script>
import PlatesList from '../components/plates/PlatesList.vue';
import AppCart from '../components/AppCart.vue';
export default {
    name: "AppSingleRestaurant",
    data() {
        return {

        };
    },
    components: {
        PlatesList,
        AppCart,
    },
    methods: {

    },
};
</script>

<template>
    <div class="container-custom my-4"> <!-- to costumize container-custom go to style/general.scss -->
        <section class="row" id="AppSingleRestaurant">
            <div class="col-7 col-8-md col-9-xl">
                <PlatesList />
            </div>
            <div class="col-5 col-4-md col-3-xl">
                <AppCart />
            </div>
        </section>
    </div>
</template>

<style lang="scss">

</style>
<script>
import OrderReview from "../components/OrderReview.vue"
export default {
    name: "AppCheckout",
    data() {
        return {

        };
    },
    components: {
        OrderReview
    },
    methods: {

    },
};
</script>

<template>
    <section id="AppCheckout">
        <div class="container-custom my-4"> <!-- to costumize container-custom go to style/general.scss -->
            <OrderReview />
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
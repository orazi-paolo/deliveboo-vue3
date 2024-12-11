<script>
import OrderReview from "../components/OrderReview.vue"
import AppPayment from '../components/payment/AppPayment.vue';
export default {
    name: "AppCheckout",
    data() {
        return {

        };
    },
    components: {
        OrderReview,
        AppPayment
    },
    methods: {

    },
};
</script>

<template>
    <section id="AppCheckout">
        <div class="container-custom my-4"> <!-- to costumize container-custom go to style/general.scss -->
            <OrderReview />
            <AppPayment />
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
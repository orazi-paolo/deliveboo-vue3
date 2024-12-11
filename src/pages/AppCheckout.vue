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
            <h1 class="text-center">Checkout</h1>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <OrderReview />
                </div>
                <div class="col-12 col-lg-6">
                    <AppPayment />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
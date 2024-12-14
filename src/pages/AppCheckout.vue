<script>
import AppLoader from "../components/AppLoader.vue";
import OrderReview from "../components/OrderReview.vue"
import AppPayment from '../components/payment/AppPayment.vue';
export default {
    name: "AppCheckout",
    data() {
        return {
            isLoading: false
        };
    },
    components: {
        OrderReview,
        AppPayment,
        AppLoader
    },
    methods: {
        setLoading(status) {
            return this.isLoading = status;
        }
    },
};
</script>

<template>
    <AppLoader v-if="isLoading" />
    <section v-show="!isLoading" id="AppCheckout">
        <div class="container-custom my-4"> <!-- to costumize container-custom go to style/general.scss -->
            <h1 class="text-center">Checkout</h1>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <OrderReview />
                </div>
                <div class="col-12 col-lg-6">
                    <AppPayment @setLoader="setLoading" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
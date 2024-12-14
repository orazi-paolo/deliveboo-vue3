<script>
import store from "../../js/store";
export default {
    data() {
        return {
            // order: null,
            store
        };
    },
    methods: {
        goToHome() {
            store.clearCart();
            this.$router.push("/");
        },
    },
    mounted() {
        // retrieves the details in localStorage
        /* const orderDetails = localStorage.getItem("orderDetails");
        if (orderDetails && orderDetails !== "undefined") {
            try {
                this.order = JSON.parse(orderDetails);
            } catch (error) {
            //  any parsing errors
            console.error("Errore nel parsing di orderDetails:", error);
            this.order = null;
        }
        } else {
        // if the value is null/undefined set the order to null
        this.order = null;
        } */
    },
};
</script>

<template>
    <div class="page-wrapper">
        <div class="banner-section">
            <img src="/public/images/staff.jpg" alt="Deliveroo Banner" class="banner-image" />
        </div>

        <div class="container py-5 text-center">
            <div class="title-section">


                <span class="congrats-text"> Your order is confirmed! </span>
            </div>

            <div v-if="store.platesInCart" class="order-summary">
                <h2 class="fs-4 mb-3 text-center">Order Summary {{ store.platesInCart[0].restaurant.name }} </h2>
                <p class="text-muted text-center"> {{ store.platesInCart[0].restaurant.address }} </p>
                <div class="card border-2 rounded-4 border-turquoise py-3">
                    <table class="table table-hover table-border text-center">
                        <thead>
                            <tr>
                                <th>Plates</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="plate in store.platesInCart" :key="plate.id">
                                <td>{{ plate.name }}</td>
                                <td>x{{ plate.quantity }}</td>
                                <td>€{{ (Number(plate.price) * Number(plate.quantity) || 0).toFixed(2) }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2" class="text-center">Total</td>
                                <!-- <th>€{{ order.total.toFixed(2) }}</th> -->
                                <td class="table-success">€{{ store.totalPrice.toFixed(2) }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </div>


        <div class="text-center my-4">
            <button @click="goToHome" class="btn btn-success btn-lg">
                <i class="fa-solid fa-house fa-xs"></i>
                Back to Home
            </button>
        </div>

        <!-- <div v-else class="text-center mt-5">
            <p class="text-danger">Nessun ordine trovato. Torna alla home per continuare.</p>
            <button @click="goToHome" class="btn btn-primary mt-3">Torna alla Home</button>
        </div> -->
    </div>

</template>



<style scoped>
body {
    background-color: #ebeced;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}


.container {
    background-color: white;
    border-radius: 12px;
    padding: 30px;
    max-width: 1200px;
    margin: 20px auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}


.banner-section {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

@media (max-width: 768px) {
    .banner-section {
        height: 200px;
    }

    .banner-image {
        object-fit: cover;
    }
}


.congrats-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    margin: 20px 0;
}

.icon {
    font-size: 48px;
    color: #00CBBD;
}

.congrats-text {
    font-size: 48px;
    color: #00CBBD;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    position: relative;
}

/* .congrats-text::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #00CBBD, #00CBBD);
    border-radius: 2px;
    animation: slideIn 1.8s ease-in-out infinite;
} */



.message-box {
    background: rgba(32, 201, 151, 0.1);
    border: 1px solid #00CBBD;
    border-radius: 12px;
    padding: 30px;
    margin: 20px auto;
    max-width: 600px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

.message-box:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease-in-out;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
}

.main-message {
    font-size: 30px;
    font-weight: 700;
    color: #00CBBD;
    margin-bottom: 10px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    text-align: center;
}

.secondary-message {
    font-size: 20px;
    color: #333;
    margin-top: 5px;
    line-height: 1.6;
    text-align: center;
}

.card.border-turquoise {
    border-color: #00CBBD;
}

/* @keyframes slideIn {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(0); }
    100% { transform: translateX(100%); }
} */
</style>
<script>
import dropin from "braintree-web-drop-in";
import axios from "axios";
import { store } from '../../js/store';
import { Toast } from "bootstrap";

export default {
    data() {
        return {
            store,
            // importo del pagamento esempio da passare poi come prop
            cardHolder: "",
            // nome del titolare della carta
            total: store.totalPrice,
            // istanza del widget Drop-in
            instance: null,
            // email del cliente
            email: "",
            // numero di telefono del cliente
            phone: "",
            // indirizzo del cliente
            address: "",
            // città del cliente
            city: "",
            // id del ristorante
            allPlates: store.platesInCart,
            restaurantId: store.platesInCart[0].restaurant_id,
            errorMessage: "",
            successMessage: "",
            isPaid: false,
        };
    },
    methods: {
        async processPayment() {
            store.errorMessage = "";
            store.successMessage = "";
            this.isPaid = true;
            // metodo del widget per ottenere il nonce
            this.instance.requestPaymentMethod((err, payload) => {
                if (err) {
                    console.error("Errore nel recupero del nonce:", err);
                    return;
                };

                // invio del nonce totale e nome del titolare della carta al backend
                axios.post("http://127.0.0.1:8000/api/checkout", {
                    payment_method_nonce: payload.nonce, // Nonce generato dal widget
                    total: this.total, // Importo totale del pagamento
                    name: this.cardHolder,  // Nome del cliente
                    email: this.email, // Email del cliente
                    phone_number: this.phone, // Numero di telefono del cliente
                    address: this.address, // Indirizzo del cliente
                    city: this.city, // Città del cliente
                    restaurant_id: this.restaurantId, // Id del ristorante
                    plates: this.allPlates, // Piatti ordinati
                })
                    .then((response) => {
                        /* alert(response.data.message);  */// Mostro messaggio di successo
                        this.successMessage = response.data.message;
                        this.$nextTick(() => {
                            const toastElement = document.querySelector('.toast');
                            const toastInstance = new Toast(toastElement);
                            toastInstance.show();
                            store.clearCart();
                            setTimeout(() => {
                                this.$router.push('/');
                            }, 2000);
                        });
                    })
                    .catch((error) => {
                        console.log(this.email)
                        console.error("Errore durante il pagamento:", error.response.data.message);
                        this.errorMessage = error.response?.data?.message || "An error occurred during payment.";
                    });
            });
        },
    },
    mounted() {
        // Recupero del token dal backend
        axios.get("http://127.0.0.1:8000/api/client-token")
            .then((response) => {
                // Creazione del widget Drop-in con il token ricevuto
                dropin.create({
                    authorization: response.data.token, // Token ricevuto dal backend
                    container: "#dropin-container",     // Elemento DOM dove caricare il widget
                }, (err, instance) => {
                    if (err) {
                        console.error("Errore nella creazione del widget Drop-in:", err);
                        this.errorMessage = "Errore nella creazione del widget Drop-in";
                        return;
                    }
                    this.instance = instance; // Salva l'istanza del widget
                });
            })
            .catch((error) => {
                console.error("Errore nel recupero del token:", error);
                this.errorMessage = error.response?.data?.message || "An error occurred during payment.";
                this.$nextTick(() => {
                    const toastElement = document.querySelector('.toast');
                    const toastInstance = new Toast(toastElement);
                    toastInstance.show();
                    /* store.clearCart(); */
                    setTimeout(() => {
                        this.$router.back();
                    }, 2500);
                });
            });
    },
};
</script>

<template>
    <div v-if="errorMessage || successMessage" class="toast"
        :class="errorMessage ? 'text-bg-danger' : 'text-bg-success'" role="alert" aria-live="assertive"
        aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto"> Transaction {{ errorMessage ? 'Failed' : 'Completed' }} </strong>
            <small>{{ new Date().toLocaleString() }}</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body text-white">
            {{ errorMessage }}
            <p class="error-toast-message" v-if="errorMessage">
                Generated Token is invalid or the Braintree keys are not correct.
            </p>
        </div>
    </div>
    <div class="checkout-page container mt-3 mb-3" id="AppPayment">
        <h4>Proceed to Payment</h4>
        <form @submit.prevent="processPayment" method="POST" class="form-payment">
            <div class="form-payment-content">
                <input type="hidden" v-model="restaurantId">

                <label for="card-holder">*Card Holder Name</label>
                <input id="card-holder" type="text" name="card-holder" v-model="cardHolder"
                    placeholder="e.g. Mario Rossi" required />

                <label for="email">*Email</label>
                <input id="email" name="email" type="email" v-model="email" placeholder="e.g. mario.rossi@example.com"
                    required />

                <label for="phone">*Phone Number</label>
                <input id="phone" name="phone" type="text" v-model="phone" placeholder="e.g. +123456789" required />

                <label for="address">*Address</label>
                <input id="address" name="address" type="text" v-model="address"
                    placeholder="e.g. via Montenapoleone 123" required />

                <label for="city">*City</label>
                <input id="city" name="city" type="text" v-model="city" placeholder="e.g. Milano" required />
            </div>
            <div id="dropin-container"></div>
            <button class="button-pay-order" :class="{ 'disabled': isPaid }" type="submit">Pay
                {{ store.totalPrice }} &euro;</button>
        </form>
    </div>
</template>

<style lang="scss">
div.toast {
    background-color: #45ccbc;
    position: fixed;
    top: 10%;
    right: 0;
    z-index: 2;

    .error-toast-message {
        font-size: 14px;
    }
}


#AppPayment {
    .form-payment {
        .form-payment-content {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;

            label {
                margin-left: 5px;
                margin-bottom: 5px;
            }

            input {
                padding: 5px 10px;
                margin-bottom: 15px;
            }
        }

        .button-pay-order {
            &.disabled {
                background-color: #ccc;
                cursor: not-allowed;
            }

            width: 100%;
            font-weight: 700;
            border-color: transparent;
            border-radius: 5px;
            padding: 5px 0px;
            background-color: #45ccbc;
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>
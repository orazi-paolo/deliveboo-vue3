<script>
import dropin from "braintree-web-drop-in";
import axios from "axios";
import { store } from '../../js/store';
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { computed } from "vue";

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
        };
    },
    methods: {
        async processPayment() {
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
                        alert(response.data.message); // Mostro messaggio di successo
                    })
                    .catch((error) => {
                        console.log(this.email)
                        console.error("Errore durante il pagamento:", error.response.data.message);
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
                        return;
                    }
                    this.instance = instance; // Salva l'istanza del widget
                });
            })
            .catch((error) => {
                console.error("Errore nel recupero del token:", error);
            });
    },
};
</script>

<template>
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
            <button class="button-cart-order" type="submit">Pay {{ total }} &euro;</button>
        </form>
    </div>
</template>

<style lang="scss">
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

        .button-cart-order,
        .button-cart-empty {
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
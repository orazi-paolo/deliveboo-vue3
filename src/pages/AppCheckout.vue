<script>
import dropin from "braintree-web-drop-in";
import axios from "axios";

export default {
    data() {
        return {
            // nome del titolare della carta
            cardHolder: "",
            // importo del pagamento esempio da passare poi come prop
            total: 10.00,
            // istanza del widget Drop-in
            instance: null,
        };
    },
    methods: {
        async processPayment() {
            // metodo del widget per ottenere il nonce
            this.instance.requestPaymentMethod((err, payload) => {
                if (err) {
                    console.error("Errore nel recupero del nonce:", err);
                    return;
                }

                // invio del nonce totale e nome del titolare della carta al backend
                axios.post("http://127.0.0.1:8000/api/checkout", {
                    payment_method_nonce: payload.nonce, // Nonce generato dal widget
                    total: this.total, // Importo totale del pagamento
                    name: this.cardHolder,  // Nome del cliente
                })
                    .then((response) => {
                        alert(response.data.message); // Mostro messaggio di successo
                    })
                    .catch((error) => {
                        console.error("Errore durante il pagamento:", error.response.data.message);
                        alert("Errore: " + error.response.data.message); // Mostra messaggio di errore
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
    }
};
</script>

<template>
    <div class="checkout-page container mt-3 mb-3">
        <h1>Checkout</h1>
        <form @submit.prevent="processPayment">
            <div>
                <label for="card-holder">Card Holder Name</label>
                <input type="text" v-model="cardHolder" required />
            </div>
            <div id="dropin-container"></div>
            <button type="submit">Pay {{ total }}</button>
        </form>
    </div>
</template>

<style scoped></style>
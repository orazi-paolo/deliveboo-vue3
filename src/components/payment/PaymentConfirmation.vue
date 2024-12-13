<script>
export default {
    data() {
    return {
        order: null,
        };
    },
    methods: {
        goToHome() {
        this.$router.push("/");
    },
    },
    mounted() {
    // retrieves the details in localStorage
    const orderDetails = localStorage.getItem("orderDetails");
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
    }
    },
};
</script>

<template>
    <div class="container py-5 text-center">
        <div class="title-section">
            <h1 class="text-center mb-3">
                <i class="fa-solid fa-circle-check me-2"></i>Complimenti!
            </h1>
                <p class="fs-5">Il pagamento è stato completato con successo.</p>
                <p class="fs-6">Abbiamo inviato una email di conferma al tuo indirizzo.</p>
        </div>

        <div v-if="order" class="order-summary">
            <h2 class="fs-4 mb-3 text-center">Riepilogo Ordine</h2>
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th>Piatti</th>
                        <th>Quantità</th>
                        <th>Prezzo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="plate in order.plates" :key="plate.id">
                        <td>{{ plate.name }}</td>
                        <td>{{ plate.quantity }}</td>
                        <td>€{{ (Number(plate.price) * Number(plate.quantity) || 0).toFixed(2) }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="2" class="text-end">Totale</th>
                        <th>€{{ order.total.toFixed(2) }}</th>
                    </tr>
                </tfoot>
            </table>
        </div>

        <div class="text-center mt-4">
            <button @click="goToHome" class="btn btn-success btn-lg">Torna alla Home</button>
        </div>

        <!-- <div v-else class="text-center mt-5">
            <p class="text-danger">Nessun ordine trovato. Torna alla home per continuare.</p>
            <button @click="goToHome" class="btn btn-primary mt-3">Torna alla Home</button>
        </div> -->
    </div>
</template>



<style scoped>

.title-section h1 {
  font-family: 'Raleway', sans-serif; 
  font-size: 3rem; 
  color: #00c7b6; 
  font-weight: 700; 
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.title-section i {
  color: #00c7b6;
  font-size: 1.5rem;
}

.order-summary {
  margin-top: 20px;
}
.table {
  margin: 0 auto;
  max-width: 600px;
}
</style>
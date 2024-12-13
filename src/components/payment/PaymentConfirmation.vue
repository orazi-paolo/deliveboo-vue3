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
    <div class="page-wrapper">
        <div class="banner-section">
            <img src="/public/images/domicilio.png" alt="Deliveroo Banner" class="banner-image" />
        </div>
        <div class="container py-5 text-center">
        <div class="title-section">
            <div class="congrats-container">
                <i class="fas fa-award icon"></i>
                <span class="congrats-text"> Il tuo ordine è stato confermato! </span>
                <i class="fas fa-award icon"></i>
            </div>
            <div class="message-box">
                <p class="main-message"><strong>Grazie per aver scelto Deliveboo!</strong></p>
                <hr>
                <p class="secondary-message">Ti abbiamo inviato un'email con i dettagli.</p>
                <p class="secondary-message">Stiamo preparando il tuo ordine con cura!</p>
            </div>
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
    </div>
</template>



<style scoped>
body {
    background-color: #ebeced; /* Colore grigio chiaro */
    margin: 0;
    font-family: 'Poppins', sans-serif;
}

/* Stile per il contenitore principale */
.container {
    background-color: white; /* Sfondo bianco per risaltare */
    border-radius: 12px; /* Angoli arrotondati */
    padding: 30px;
    max-width: 1200px;
    margin: 20px auto; /* Centra il contenitore con margini */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Ombra per effetto card */
}


.banner-section {
    width: 100%;
    margin: 0; 
    padding: 0;
    overflow: hidden;
}

.banner-image {
    width: 100%; /* L'immagine occupa tutta la larghezza */
    max-height: 400px; /* Limita l'altezza massima */
    object-fit: cover; /* Adatta l'immagine mantenendo le proporzioni */
    display: block;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .banner-image {
        max-height: 250px; /* Altezza ridotta per dispositivi mobili */
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
/* @keyframes slideIn {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(0); }
    100% { transform: translateX(100%); }
} */


</style>
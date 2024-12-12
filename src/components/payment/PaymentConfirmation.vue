<script>
export default {
  data() {
    return {
        order: null,
    };
  },
  methods: {
    
  },
  mounted() {

    // //dettagli ordine
    // this.order = JSON.parse(localStorage.getItem("orderDetails"));

  },
};
</script>

<template>

    <div class="container py-5">
        <div class="text-center">
            <h1 class="text-success">Complimenti!</h1>
                <p class="fs-5">Il pagamento è stato completato con successo.</p>
                <p class="fs-6">Abbiamo inviato una email di conferma al tuo indirizzo.</p>
        </div>
    </div>

</template>



<script scoped>

</script>
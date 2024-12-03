<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    close() {
      // torna alla homepage
      this.$router.push('/');
    },
  },
}
</script>

<template>

<div class="modal-dialog">
    <div class="modal-content p-3">

      <!-- pulsante di chiusura -->
      <button type="button" class="btn-close" aria-label="Close" @click="close"></button>

      <!-- immagine -->
      <img src="https://via.placeholder.com/300" alt="Plate Image" class="plate-image" />

      <!-- nome del piatto -->

      <h2 class="h4 mb-3">Bacon King 3.0</h2>

      <!-- descrizione -->
      <p class="text-muted mb-3">Un piatto delizioso con bacon, formaggio e pane soffice.</p>


      <!-- ingredienti -->
      <ul class="list-unstyled mb-3">
          <li>✔ Bacon</li>
          <li>✔ Formaggio</li>
          <li>✔ Pane</li>
      </ul>
        
      <!-- prezzo -->
      <p class="fw-bold mb-3">Prezzo: €12.99</p>

      <!-- bottone -->
      <button type="button" class="btn btn-success w-100">aggiungi al carrello</button>


    </div>
</div>
  
</template>

<style lang="scss">
.plate-show {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.plate-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>
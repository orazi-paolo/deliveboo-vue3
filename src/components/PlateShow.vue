<script>
export default {
  data() {
    return {
      ingredienti: ["Bacon", "Formaggio", "Pane"],
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

      <div class="mb-3">
        <h5 class="h6">ingredienti</h5>
        <div class="form-check" v-for="ingrediente in ingredienti" :key="ingrediente">
          <input type="checkbox":id="ingrediente" class="form-check-input" checked/>
          <label class="form-check-label" :for="ingrediente">{{ ingrediente }}</label>
        </div>
      </div>
        
     <!-- selezione quantità -->

     <div class="d-flex justify-content-between align-items-center mb-3">
        <button class="btn btn-outline-secondary">-</button>
        <span class="fw-bold mx-3">1</span>
        <button class="btn btn-outline-secondary">+</button>
      </div>

      <!-- prezzo e bottone aggiungi al carrello -->

      <button type="button" class="btn btn-success w-100">
        aggiungi per €12.99
      </button>
    


    </div>
</div>
  
</template>

<style lang="scss">

modal-dialog {
  max-width: 500px;
  margin: 50px auto;
}

.modal-content {
  position: relative;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.img-fluid {
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.text-muted {
  color: #6c757d;
  font-size: 16px;
  margin-bottom: 20px;
}

.form-check-label {
  display: flex;
  justify-content: space-between;
}

.btn-outline-secondary {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-success {
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  display: block;
}


</style>
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
      <img src="/images/baconking.png" alt="Plate Image" class="img-fluid rounded mb-4" />


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

.modal-dialog {
  max-width: 500px;
  margin: 50px auto;
}

.modal-content {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  position: relative;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #999;
}

.img-fluid {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.text-muted {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
}

.form-check {
  margin-bottom: 10px;
}

.form-check-label {
  font-size: 14px;
  margin-left: 8px;
}

.btn-outline-secondary {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.btn-primary {
  background-color: #00c7b6;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  display: block;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #00b3a3;
}


</style>
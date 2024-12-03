<script>
export default {
  data() {
    return {
      ingredienti: ["Bacon", "Formaggio", "Pane"],
      selectedIngredients: [],
      quantity: 1,
      price: 12.99,
    };
  },
  computed: {
    totalPrice() {
      return (this.quantity * this.price).toFixed(2);
    },
  },
  methods: {
    close() {
      // torna alla homepage
      this.$router.push('/');
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>

<template>

<div class="modal-dialog">
    <div class="modal-content p-4">


      <!-- Barra laterale di scorrimento -->
    <div class="scrollable-content">

      <!-- pulsante di chiusura -->
      <button type="button" class="btn-close-custom" aria-label="Close" @click="close">x</button>
      
      <!-- immagine -->
      <img src="/images/baconking.png" alt="Plate Image" class="img-fluid rounded mb-4" />


      <!-- nome del piatto -->

      <h2 class="h4 fw-bold mb-3">Bacon King 3.0</h2>

      <!-- descrizione -->
      <p class="text-muted mb-4">Un piatto delizioso con bacon, formaggio e pane soffice.</p>


      <!-- ingredienti -->

      <div class="ingredient-section">
        <h5 class="h6 fw-bold mb-3">Ingredienti</h5>
        <div class="form-check ingredient-option" v-for="ingrediente in ingredienti" :key="ingrediente" :class="{ 'selected': selectedIngredients.includes(ingrediente) }">
          <input type="checkbox" :id="ingrediente" class="form-check-input" v-model="selectedIngredients" :value="ingrediente"/>
          <label class="form-check-label" :for="ingrediente">
            {{ ingrediente }}
          </label>
        </div>
      </div>
        
     <!-- selezione quantità e bottone -->

     <div class="fixed-footer">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <button class="btn btn-outline-secondary btn-quantity" @click="decreaseQuantity">-</button>
          <span class="fw-bold mx-3">{{ quantity }}</span>
          <button class="btn btn-outline-secondary btn-quantity" @click="increaseQuantity">+</button>
        </div>
        <button type="button" class="btn btn-primary w-100">
          Aggiungi per €{{ totalPrice }}
        </button>
      </div>

      </div>
    </div>
</div>
  
</template>

<style lang="scss">

.modal-dialog {
  max-width: 500px;
  margin: 50px auto;
  position: relative;
}

.modal-content {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
}

.scrollable-content {
  max-height: 400px; 
  overflow-y: auto;
  padding: 20px;
}

.scrollable-content::-webkit-scrollbar {
  width: 6px;
}

.scrollable-content::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 10px;
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background: #bbb;
}

.ingredient-section {
  margin-bottom: 30px;
}

.ingredient-option {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.ingredient-option:hover {
  border-color: #00c7b6;
}

.ingredient-option.selected {
  background-color: #f1fdfc;
  border-color: #00c7b6;
}


.form-check-input:checked + .form-check-label {
  font-weight: bold;
  color: #00c7b6;
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

.fixed-footer {
  position: sticky;
  bottom: 0;
  background-color: #fff;
  padding: 15px 20px;
  border-top: 1px solid #ddd;
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

.btn-close-custom {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 36px;
  height: 36px;
  background-color: #fff;
  border: 2px solid #00c7b6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #00c7b6;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-close-custom:hover {
  background-color: #00c7b6;
  color: #fff;
}

</style>
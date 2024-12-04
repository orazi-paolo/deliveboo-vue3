<script>
export default {
  data() {
    return {

      ingredienti: [
        "Bacon",
        "Formaggio",
        "Pane",
        "Lattuga",
        "Pomodoro",
        "Cetriolo",
        "Salsa BBQ",
        "Cipolla",
        "Maionese",
        "Senape",],

      selectedIngredients: [],
      quantity: 1,
      price: 7.99,

    };
  },

  computed: {

    // prezzo totale basato sulla quantità
    totalPrice() {
      return (this.quantity * this.price).toFixed(2);
    },
  },

  methods: {
    close() {

      // torna alla homepage
      this.$router.push('/');
    },

    // incremento la quantità del piatto
    increaseQuantity() {
      this.quantity++;
    },

    // decremento
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

      <div class="scrollable-content">

        <!-- pulsante di chiusura -->
        <button type="button" class="btn-close-custom" aria-label="Close" @click="close">x</button>
        <!-- immagine -->
        <img src="/images/baconking.png" alt="Plate Image" class="img-fluid rounded mb-4" />
        <!-- nome del piatto -->
        <h2 class="h4 fw-bold mb-3">Bacon King 3.0</h2>
        <!-- descrizione -->
        <p class="text-muted mb-4">Un piatto delizioso con bacon, formaggio e pane soffice.</p>
        <hr>

        <!-- selezione degli ingredienti -->
        <div class="ingredient-section">
          <h5 class="h6 fw-bold mb-3">Ingredienti</h5>
          <hr>
          <!-- lista degli ingredienti - checkbox -->
          <div class="ingredient-option" v-for="ingrediente in ingredienti" :key="ingrediente"
            :class="{ 'selected': selectedIngredients.includes(ingrediente) }">
            <input type="checkbox" :id="ingrediente" class="form-check-input" v-model="selectedIngredients"
              :value="ingrediente" />
            <label class="form-check-label" :for="ingrediente"> {{ ingrediente }} </label>
          </div>
        </div>
      </div>

      <!-- selezione quantità e bottone -->
      <div class="fixed-footer">
        <div class="quantity-control">
          <!-- Bottone per diminuire -->
          <button class="btn-quantity" :class="{ active: quantity > 1, disabled: quantity === 1 }"
            @click="decreaseQuantity" :disabled="quantity === 1"> - </button>
          <!-- Quantità -->
          <span class="quantity-value">{{ quantity }}</span>
          <!-- Bottone per aumentare -->
          <button class="btn-quantity active" @click="increaseQuantity"> + </button>
        </div>
        <!-- Bottone aggiungi al carrello -->
        <button type="button" class="btn btn-primary w-100"> Aggiungi per {{ totalPrice }} € </button>
      </div>

    </div>

  </div>

</template>

<style lang="scss" scoped>
.modal-dialog {
  max-width: 800px;
  margin: 50px auto;
}

.modal-content {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 900px;
  padding: 30px;
}

.scrollable-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;

    &:hover {
      background: #bbb;
    }
  }
}

h2,
p {
  text-align: center;
  margin-bottom: 20px;
}

.ingredient-section {
  margin-bottom: 30px;

  .ingredient-option {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: all 0.3s ease;

    &.selected {
      border-color: #00c7b6;
      border-width: 3px;
    }

    .form-check-input {
      margin-right: 15px;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border: 2px solid #ddd;

      &:checked {
        background-color: #00c7b6;
        border-color: #00c7b6;
        box-shadow: 0 0 0 2px #f1fdfc;
      }
    }

    .form-check-label {
      font-size: 16px;
    }
  }
}

.btn-close-custom {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00c7b6;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #00c7b6;
  }
}

.fixed-footer {
  background-color: #fff;
  border-top: 1px solid #ddd;
  padding: 15px 20px;
  position: sticky;
  bottom: 0;

  .quantity-control {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    .btn-quantity {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #ddd;
      background-color: #fff;
      color: #999;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 0 20px;

      &.active {
        color: #00c7b6;
        border-color: #00c7b6;
      }

      &.disabled {
        color: #ddd;
        border-color: #ddd;
        cursor: not-allowed;
      }

      &:not(.disabled):hover {
        background-color: #f1fdfc;
      }
    }

    .quantity-value {
      font-size: 25px;
      font-weight: bold;
      text-align: center;
      color: #000;
    }
  }

  .btn-primary {
    background-color: #00c7b6;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: #00b3a3;
    }
  }
}
</style>
<script>
import { store } from '../js/store';

export default {
  props: {
    plate: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

      isModalVisible: true, 
      quantity: 1,
      selectedIngredients: [],
      notification:null,

    };
  },

  computed: {
    totalPrice() {
      return (this.quantity * this.plate.price).toFixed(2);
    },
  },

  methods: {
    close() {
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
    emitCloseModal() {
      this.$emit('closeModal')
    },
    addToCart() {
      
      store.addPlateToCart(this.plate, this.quantity, this.selectedIngredients);
      this.notification = "Piatto aggiunto al carrello!";

      // Hides the notification after 3 sec
      setTimeout(() => {
        this.notification = null;
      }, 3000);

      this.emitCloseModal();
    },

  },
};
</script>

<template>

  <div class="modal d-block" :id="`#exampeModal-${plate.id}`" tabindex="-1" aria-labelledby="exampleModalLabel" :aria-hidden="!isModalVisible">
    <div class="modal-dialog">

      <!-- Modal close button -->
      <div class="modal-content p-4">
        <div v-if="notification" class="notification">{{ notification }}</div>
        <div class="scrollable-content">
          <div class="modal-header">
            <button type="button" class="btn-close-custom" aria-label="Close" @click="emitCloseModal()">x</button>
          </div>
          <div class="modal-body p-0">
            <div class="modal-image-wrapper">
              <img :src="plate.image || plate.image_placeholder" alt="Plate Image" class="modal-image" />
            </div>
            <div class="modal-content-wrapper p-4">
            <h2 class="h4 fw-bold mb-3">{{ plate.name }}</h2>
            <p class="text-muted mb-4">{{ plate.description }}</p>
            <hr>
            <div class="ingredient-section">
              <h5 class="h6 fw-bold mb-3">Ingredients</h5>
              <hr>
              <div class="ingredient-option" v-for="ingrediente in plate.ingredients" :key="ingrediente" :class="{ 'selected': selectedIngredients.includes(ingrediente) }">
                <input type="checkbox" :id="ingrediente" class="form-check-input" v-model="selectedIngredients" :value="ingrediente" />
                <label class="form-check-label" :for="ingrediente"> {{ ingrediente }} </label>
              </div>
            </div>
          </div>
          </div>
        </div>
            <!-- Quantity control -->
            <div class="quantity-payment-container">
              <div class="quantity-control">
                <button class="btn-quantity" :class="{ active: quantity >1, disabled: quantity === 1  } "@click="decreaseQuantity" :disabled="quantity === 1" > - </button>
                <span class="quantity-value">{{ quantity }}</span>
                <button class="btn-quantity" :class="{ active: true }" @click="increaseQuantity"> + </button>
              </div>
              <button type="button" class="btn btn-primary w-100" @click="addToCart"> Add for {{ totalPrice }} € </button>
            </div>
          </div>
        </div>
      </div>
</template>

<style lang="scss">

h2,
p {
  text-align: center;
  margin-bottom: 20px;
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

.btn-quantity {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ddd;
  background-color: #fff;
  color: #bbb;
  transition: all 0.3s ease;

  &.active {
    color: #00c7b6;
    border-color: #00c7b6;
    cursor: pointer;
  }

  &.disabled {
    color: #ddd;
    cursor: not-allowed;
  }

  &:not(.disabled):hover {
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }
}

.quantity-value {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000;
}

.modal-dialog {
  max-width: 800px;
  margin: 50px auto;
}

.modal-content {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
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

.ingredient-section {
  margin-bottom: 30px;

  .ingredient-option {
    display: flex;
    align-items: center;
    padding:10px;
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

.quantity-payment-container {
  position: sticky;
  bottom: 0; 
  background-color: white; 
  padding: 15px; 
  border-top: 1px solid #ddd; 
  z-index: 10;
}

.quantity-control {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 10px;
}

.modal-body {
  padding: 0; 
  margin:0;
}

.modal-image-wrapper {
  width: 100%; 
  height: 100%;
  overflow: hidden;
}

.modal-image {
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  display: block; 
}

.modal-content-wrapper {
  padding: 20px; 

}
</style>
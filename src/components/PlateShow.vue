<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<template>

    <div class="plate-show">

        <h2>piatto</h2>
        <!-- immagine -->
        <img src="https://via.placeholder.com/300" alt="Plate Image" class="plate-image" />

        <!-- descrizione  -->
        <h3>nome del piatto</h3>
        <p>descrizzione piatto</p>

        <!-- ingredienti -->
        <ul>
            <li>ingredienti 1</li>
            <li>ingredienti 2</li>
            <li>ingredienti 3</li>
        </ul>
        
        <!-- prezzo -->
        <p><strong>prezzo:</strong> $12.99</p>

        <!-- bottone -->
        <button @click="close">chiudi</button>


    
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
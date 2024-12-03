<script>
export default {
  name: "AppHeader",
  data() {
    return {
      
    };
  },
  components: {
    
  },
  methods: {
    
  },
};
</script>

<template>
    <header>
        <nav class="navbar navbar-expand">
            <div class="container-fluid">
                <a class="navbar-brand fw-bolder" href="#">Deliveboo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{ 'name' : 'restaurants.show'}">Restaurant</router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    nav{
        background-color: #00CBBD;
        
        *{
            color: #fff;
        }
    }
  
</style>
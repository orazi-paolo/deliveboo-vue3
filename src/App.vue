<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import Footer from './partials/Footer.vue';
export default {
  data() {
    return {
    }
  },
  components:{
    AppHeader,
    Footer
  }
}
</script>

<template>
  <AppHeader/>
  <main>
    <router-link to="/plate/1"> singolo piatto</router-link>
    <RouterView />
  </main>
  <Footer/>
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './style/general.scss' as *;
</style>
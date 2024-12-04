<script>
import Footer from './partials/Footer.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    Footer,
  },
};
</script>

<template>
  <div class="text-danger">
    Deliveboo
  </div>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './style/general.scss' as *;
</style>
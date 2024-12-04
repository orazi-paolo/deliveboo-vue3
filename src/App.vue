<script>
import AppFooter from './components/AppFooter.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    AppFooter,

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
  <AppFooter />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './style/general.scss' as *;
</style>
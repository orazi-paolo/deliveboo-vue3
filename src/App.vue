<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {

    }
  },
  components:{
    AppHeader
  }
}
</script>

<template>
  <AppHeader/>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './style/general.scss' as *;
</style>
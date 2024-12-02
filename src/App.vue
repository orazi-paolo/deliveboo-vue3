<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="text-danger">
    Deliveboo
  </div>
  <main>
    <router-link to="/plate/1"> singolo piatto</router-link>
    <RouterView />
  </main>
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use './style/general.scss' as *;
</style>
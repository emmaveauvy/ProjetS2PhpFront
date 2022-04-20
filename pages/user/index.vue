<template>
  <h1>User</h1>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: "app-page",
  
  async asyncData({ params, redirect }) {
    if(true) {
      redirect('/sign-in')
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
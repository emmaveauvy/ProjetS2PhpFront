<template>
  <div>
    <h1>Mon compte</h1>
    <p>Nom : {{user.name}}</p>
    <p>Mail : {{user.mail}}</p>

    <div @click="logout()">
      <UiButton label="Me déconnecter"  />
    </div>
    
  </div>
  
  
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: "app-page",

  middleware: 'authenticated',

  data() {
    return {
      user: {}
    }
  },

  async fetch() {
    this.user = await this.$axios.$get(`/api/me`);
  },

  methods: {
    async logout() {
      await this.$axios.$get(`/api/logout`);
      this.$router.push('/');
    }
  }

});
</script>

<style lang="scss" scoped>

</style>
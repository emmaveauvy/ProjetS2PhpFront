<template>
  <div>
    <div v-if="!loading">
      <QuizCode v-if="!code" />
      <Quiz v-else :code="code" />
    </div>
    <div v-else>
      <p>loading</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: "app-page",

  data() {
    return {
      code: null,
      loading: true
    }
  },

  async asyncData({ params }) {
    if(params.code) {
      return {
        code: params.code,
        loading: false,
      }
    }else {
      return {
        loading: false
      }
    }
  },
});
</script>

<style lang="scss" scoped>

</style>
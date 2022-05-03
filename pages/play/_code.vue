<template>
  <div>
    <div v-if="!loading">
      <div v-if="!code" class="quiz-code-container">
        <QuizCode />
      </div>
      <div v-else>
        <Quiz :code="code" />
      </div>
      
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

.quiz-code-container {
  height: calc(100vh - #{$nav-height} - 30px);
  @include d-flex-center;
}

</style>
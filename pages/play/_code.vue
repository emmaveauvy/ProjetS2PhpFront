<template>
  <div>
    <div v-if="!code" class="quiz-code-container">
      <QuizCode />
    </div>
    <div v-else>
      <QuizPlay :code="code" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: "app-page",

  data() {
    return {
      code: null
    }
  },

  async asyncData({ params }) {
    if(params.code) {
      return {
        code: params.code,
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
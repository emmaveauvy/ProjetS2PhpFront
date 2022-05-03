<template>
	<div class="quiz-join-container">
		<QuizJoin :code="code"/>
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

  async asyncData({ params, redirect }) {
    if(params.code) {
      return {
        code: params.code
      }
    }else {
      return redirect('/');
    }
  },
});
</script>

<style lang="scss" scoped>

.quiz-join-container {
  height: calc(100vh - #{$nav-height} - 30px);
  @include d-flex-center;
}

</style>
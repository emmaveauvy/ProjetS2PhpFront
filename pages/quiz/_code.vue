<template>
  <div class="quiz-play">
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: "app-page",
  middleware: 'authenticated',
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
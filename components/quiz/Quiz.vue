<template>
  <div class="row quiz">
    <QuizQuestion text="Comment être aussi beau que Antoine Leblond ?" :code="code"/>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    code: {
      type: String,
      required: true
    }
  } 
});
</script>
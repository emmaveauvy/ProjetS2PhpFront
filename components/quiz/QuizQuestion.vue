<template>
    <div class="quiz-question col-12">
      <p class="quiz-question__text">{{ text }}</p>
      <p class="quiz-question__code">{{ code }}</p>
      <img src="~assets/svg/quiz_question.svg" alt="">
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.quiz-question {
  position: relative;
  &__text {
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translate(0, -50%);
    width: 57%;
    height: 70%;

    @include font-size(70);
    font-weight: $semi-bold-font-weight;
    line-height : 140%;
    display: flex;
    align-items: center;
  }

  &__code {
    position: absolute;
    top: 50%;
    right: 2.5%;
    transform: translate(0, -50%) rotate(180deg);
    width: 10%;
    height: 80%;

    writing-mode: vertical-lr;
    @include font-size(85);
    font-weight: $semi-bold-font-weight;
    @include d-flex-center
  }
}
</style>
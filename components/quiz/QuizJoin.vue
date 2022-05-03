<template>
    <div class="quiz-join col-8 col-md-5 col-xl-3">
      <QuizBackground>
        <h2 class="quiz-join__title">Rejoindre</h2>
        <div class="quiz-join__container">         
          <p class="quiz-join__text">Vous pouvez rejoindre ici :</p>
          <p class="quiz-join__text quiz-join__text--url">play.loic.link</p>
          <p class="quiz-join__text quiz-join__text--code">{{code}}</p>
          <QuizButton label="Lancer" :icon="{ name: 'play_arrow', theme: 'outlined' }" @click="handleSubmit"/>
        </div>
      </QuizBackground>
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
  },
  methods: {
    handleSubmit() {
      this.$router.push(`/quiz/${this.code}`);
    }
  }
});
</script>

<style lang="scss" scoped>
.quiz-join {
  &__title {
    height: 70px;
    color: $text;
    background-color: $y-primary;
    @include d-flex-center;
    @include font-size(22);
    font-weight: $semi-bold-font-weight;
  }

  &__container {
    padding: 0 50px;
    padding-top: 15px;
  }

  &__text {
    @include font-size(14);
    font-weight: $regular-font-weight;
    padding-top: 15px;
    text-align: center;
    font-weight: $semi-bold-font-weight;

    &--url {
      @include font-size(25);
      padding-top: 20px;
    }

    &--code {
      font-weight: $bold-font-weight;
      padding-top: 25px;
      @include font-size(45);
    }

  }

  .quiz-button {
    padding: 30px 0;
  }

  .error {
    margin-top: 10px;
    text-align: center;
  }
}
</style>
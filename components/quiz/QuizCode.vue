<template>
    <div class="quiz-code col-10 col-md-5 col-xl-3">
      <QuizBackground>
        <h2 class="quiz-code__title">Jouer</h2>
        <div class="quiz-code__container">
          <p class="quiz-code__text">Entrez un code pour <strong>commencer le jeu.</strong></p>
          <QuizInputCode type="text" name="code" label="Code" required v-model="code" />
          <QuizButton label="Jouer" :icon="{ name: 'play_arrow', theme: 'outlined' }" @click="handleSubmit"/>
          <p class="quiz-code__text quiz-code__text--bottom">Créer son propre quiz <UiLink text="ici" to="/quiz/add" /></p>
          <p class="error">{{error}}</p>
        </div>
      </QuizBackground>
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      code : '',
      error: ''
    }
  },
  methods: {
   async handleSubmit() {
      if(this.code) {
        try {
          await this.$axios.$get(`/api/quiz/${this.code}`);
          this.$router.push(`/play/${this.code}`);
        } catch (err) {
          this.error = err?.response?.data?.error;
        }
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.quiz-code {
  height: 390px;
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
  }

  &__text {
    @include font-size(14);
    font-weight: $regular-font-weight;
    padding-top: 20px;
    text-align: center;
    line-height: 120%;
    strong {
      font-weight: $semi-bold-font-weight;
    }

    &--bottom {
      padding-top: 0px;
      text-align: left;
      font-weight: $semi-bold-font-weight;
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
<template>
    <div class="quiz-pseudo col-10 col-md-5 col-xl-3">
      <QuizBackground>
        <h2 class="quiz-pseudo__title">Jouer</h2>
        <div class="quiz-pseudo__container">
          <p class="quiz-pseudo__text">Entrez un pseudo</p>
          <QuizTextInput type="text" name="pseudo" label="Pseudo" required v-model="pseudo" placeholder="Star Shadow" />
          <QuizButton label="Jouer" :icon="{ name: 'play_arrow', theme: 'outlined' }" @click="handleSubmit"/>
          <p class="error">{{error}}</p>
        </div>
      </QuizBackground>
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    idquiz: {
      type: String,
      required : true
    }
  },
  data() {
    return {
      pseudo: '',
      error: ''
    }
  },
  methods: {
   async handleSubmit() {
      if(this.pseudo) {
        try {
          let id = await this.$axios.$post(`/api/player`, {"name": this.pseudo, "idquiz": this.idquiz});
          this.$emit('input', id); //idPlayer
        } catch (err) {
          this.error = err?.response?.data?.error;
        }
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.quiz-pseudo {
  height: 370px;
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
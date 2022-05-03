<template>
  <div class="user">
    <div class="row">
      <div class="col-12">
        <QuizBackground class="user__account">
          <div class="user__container">
            <h1 class="user__title">Mon compte</h1>
            <p><strong>Nom</strong> : {{user.name}}</p>
            <p><strong>Mail</strong>  : {{user.mail}}</p>
            <div class="user__controls">
              <UiButton label="Me déconnecter" @click="logout()" />
              <UiButton label="Supprimer mon compte" secondary />
            </div>
          </div>
        </QuizBackground>
      </div>
    </div>
    <div class="row" v-if="quiz.length > 0">
      <div class="col-12">
        <QuizBackground>
          <div class="user__container">
            <h1 class="user__title">Mes quiz</h1>
            <div v-for="(aquiz, index) in quiz" :key="index" class="user__quiz">
              <h2>{{aquiz.name}}</h2>
              <div class="user__controls">
                <UiButton label="Jouer" :to="`/play/${aquiz.code}`" />
                <UiButton label="Editer" secondary :to="`/quiz/edit/${aquiz.code}`" />
              </div>
            </div>
          </div>
        </QuizBackground>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: "app-page",

  middleware: 'authenticated',

  data() {
    return {
      user: {},
      quiz: []
    }
  },

  async fetch() {
    this.user = await this.$axios.$get(`/api/me`);
    try {
      this.quiz = await this.$axios.$get(`/api/quiz`);
    } catch (err) {
      this.error = err?.response?.data?.error;
    }
  },

  methods: {
    async logout() {
      await this.$axios.$get(`/api/logout`);
      this.$router.push('/');
    }
  }

});
</script>

<style lang="scss" scoped>
.user {
  &__container {
    padding: 40px 50px;
  }

  &__title {
    @include font-size(32);
  }

  &__account {
    p {
      margin-top: 20px;
    }
  }

  &__controls {
    margin-top: 30px;
    display: flex;
    &>div {
      margin-right: 10px;
    }
    &>a {
      margin-right: 10px;
    }
  }

  &__quiz {
    border: 2px solid $r-secondary-2;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px;
  }
}

</style>
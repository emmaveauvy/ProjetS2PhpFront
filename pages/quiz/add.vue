<template>
  <div class="quiz-add">
    <div class="row">
      <div class="col-12">
        <QuizBackground class="quiz-add__quiz">
          <div class="quiz-add__container">
            <UiButton :icon="{ name: 'save' }" class="quiz-add__save" @click="save" :disabled="checkDisabled"/>
            <h1 class="quiz-add__title">Créer son quiz</h1>
            <QuizTextInput type="text" name="name" label="Nom du quiz" required v-model="name" placeholder="Le meilleur quiz" />
            <div class="quiz-add__controls">
              <UiButton :disabled="progress == 0" :icon="{ name: 'chevron_left' }" @click="stepAhead(false)"/>
              <UiButton :disabled="progress == progressMax" :icon="{ name: 'chevron_right' }" @click="stepAhead(true)"/>
              <UiButton label="Ajouter une question" @click="addQuestion"/>
              <UiButton label="Supprimer cette question" :disabled="questions.length == 1" @click="deleteQuestion"/>
            </div>
            <p class="error">{{error}}</p>
          </div>
        </QuizBackground>
      </div>
    </div>
    <div v-for="(question, index) in questions" :key="index">
      <transition name="slide-fade">
        <div v-if="progress == index && show">
          <div class="row">
            <div class="col-12">
              <QuizBackground class="quiz-add__question">
                <div class="quiz-add__container">
                  <h2 class="quiz-add__question">Question {{index + 1}}</h2>
                  <QuizTextInput type="text" name="name" required v-model="question.title" placeholder="Ma super question" />
                </div>
              </QuizBackground>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6 quiz-add__col quiz-add__col--right">
              <QuizBackground class='quiz-add__answer'>
                <QuizSymAnswer :num="0" class="quiz-add__sym"/>
                <div class="quiz-add__container quiz-add__container--anwser">
                  <QuizTextInput type="text" name="answer0" :padding="false" required v-model="question.answers[0].value" placeholder="Ma réponse" />
                  <QuizCheckbox name="isTrue" required @input="(e) => {isTrue(e, index, 0)}" :value="question.answers[0].isTrue"/>
                </div>
              </QuizBackground>
            </div>
            <div class="col-12 col-lg-6 quiz-add__col quiz-add__col--left"> 
              <QuizBackground class='quiz-add__answer'>
                <QuizSymAnswer :num="1" class="quiz-add__sym"/>
                <div class="quiz-add__container quiz-add__container--anwser">
                  <QuizTextInput type="text" name="answer0" :padding="false" required v-model="question.answers[1].value" placeholder="Ma réponse" />
                  <QuizCheckbox name="isTrue" required @input="(e) => {isTrue(e, index, 1)}" :value="question.answers[1].isTrue"/>
                </div>
              </QuizBackground>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6 quiz-add__col quiz-add__col--right"> 
              <QuizBackground class='quiz-add__answer'>
                <QuizSymAnswer :num="2" class="quiz-add__sym"/>
                <div class="quiz-add__container quiz-add__container--anwser">
                  <QuizTextInput type="text" name="answer0" :padding="false" required v-model="question.answers[2].value" placeholder="Ma réponse" />
                  <QuizCheckbox name="isTrue" required @input="(e) => {isTrue(e, index, 2)}" :value="question.answers[2].isTrue"/>
                </div>
              </QuizBackground>
            </div>
            <div class="col-12 col-lg-6 quiz-add__col quiz-add__col--left"> 
              <QuizBackground class='quiz-add__answer'>
                <QuizSymAnswer :num="3" class="quiz-add__sym"/>
                <div class="quiz-add__container quiz-add__container--anwser">
                  <QuizTextInput type="text" name="answer0" :padding="false" required v-model="question.answers[3].value" placeholder="Ma réponse" />
                  <QuizCheckbox name="isTrue" required @input="(e) => {isTrue(e, index, 3)}" :value="question.answers[3].isTrue"/>
                </div>
              </QuizBackground>
            </div>
          </div>
        </div>
      </transition>
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
      name: '',
      progress: 0,
      progressMax: 0,
      questions: [
        {
          title: '',
          answers: [
            {value : '', isTrue : true},
            {value : '', isTrue : false},
            {value : '', isTrue : false},
            {value : '', isTrue : false},
          ]
        }
      ],
      show: true,
      error: ''
    }
  },
  methods: {
    addQuestion() {
      this.questions.push(
        {
          title: '',
          answers: [
            {value : '', isTrue : true},
            {value : '', isTrue : false},
            {value : '', isTrue : false},
            {value : '', isTrue : false},
          ]
        }
      );
      this.show = false;
      setTimeout(() => {
        this.progressMax++;
        this.progress = this.progressMax;
        this.show = true;
      }, 200);
    },
    deleteQuestion() {
      if(this.questions.length > 1) {
        this.show = false;
        this.questions.splice(this.progress, 1);
        if(this.progress > 0) {
          setTimeout(() => {
            this.progress--;
            this.show = true;
          }, 200);
        }else {
          setTimeout(() => {
            this.show = true;
          }, 200);
        }
        this.progressMax --;
      }
    },
    stepAhead(is) {
      if(is) {
        if(this.progress < this.progressMax ) {
          this.progress++;
        }else {
          return;
        }
      }else {
        if(this.progress > 0 ) {
            this.progress--;
          }else {
            return;
        }
      }
      this.show = false;
      setTimeout(() => {
        this.show = true;
      }, 200);
    },
    checkInputs() {
      let check = false;
      if(this.name == '') {
        return true;
      }
      this.questions.forEach(question => {
        if(question.title == '') {
          check = true;
        }
        question.answers.forEach(answer => {
          if(answer.value == '') {
            check = true;
          }
        });
      });
      return check;
    },
    checkAnswers() {
      for (let j = 0; j < this.questions.length; j++) {
        const question = this.questions[j];
        let hasAnswer = false;
        for (let i = 0; i < question.answers.length; i++) {
          const answer = question.answers[i];
          if(answer.isTrue == true) {
            hasAnswer = true;
          }
        }
        if(!hasAnswer) {
          return true;
        }
      }
      return false;
    },
    async save() {
      if(this.checkAnswers()) {
        this.error = "Il faut une réponse valide par question";
        return;
      }
      if(this.checkInputs()) {
        this.error = "Il y a des champs vides";
        return;
      }
      try {
        await this.$axios.$post(`/api/quiz`, {'name': this.name, 'questions': this.questions });
        this.$router.push('/user');
      } catch (err) {
        this.error = err?.response?.data?.error;
      }
    },
    isTrue(e, indexQuestion, indexAnswer) {
      console.log(e, indexQuestion, indexAnswer);
      if(e) {
        this.questions[indexQuestion].answers.forEach(el => {
          el.isTrue = false;
        });
      }
      this.questions[indexQuestion].answers[indexAnswer].isTrue = e;
    }
  },
  computed: {
    checkDisabled() {
      return this.checkInputs() || this.checkAnswers();
    }
  }
});
</script>

<style lang="scss" scoped>
.quiz-add {
  .quiz-text-input {
    max-width: 300px;
  }

  &__quiz {
    height: calc(100% - 30px);
    margin-bottom: 30px; 
  }

  &__container {
    position: relative;
		padding: 40px 50px;
    &--anwser {
      display: flex;
      padding-left: 100px;
      &>div {
        margin-right: 10px;
      }
    }
	}

  &__title {
    @include font-size(32);
  }

  &__question {
    @include font-size(20);
  }

  &__answer {
    position: relative;
    &--true {
      background-color: green;
    }
  }

  &__sym {
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__controls {
    margin-top: 30px;
    display: flex;
    &>div {
      margin-right: 10px;
    }
  }

  &__save {
    position: absolute;
    top: 40px;
    right: 50px;
  }

  @media screen and (min-width: 992px) {
    &__col {
      &--right {
        padding-right : 3.5px;
      }
      &--left {
        padding-left : 3.5px;
      }
    }
  }
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: 100ms opacity, 200ms transform ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}

</style>
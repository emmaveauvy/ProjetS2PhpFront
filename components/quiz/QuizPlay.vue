<template>
  <div v-if="idPlayer == ''" class="quiz-full-container">
    <QuizPseudo v-model="idPlayer" :idquiz="idQuiz"/>
  </div>
  <div v-else-if="!end" class="quiz-play">
    <div v-for="(question, index) in questions" :key="index">
      <transition name="slide-fade">
        <div v-if="progress == index && show">
          <div class="row">
            <div class="col-12">
              <QuizBackground class="quiz-play__question">
                  <h1>Question<p class="quiz-play__num-question">{{progress + 1}}</p></h1>
              </QuizBackground>
            </div>
          </div>
          <div class="row">
            <div class="col-6 quiz-play__col quiz-play__col--right">
              <QuizBackground :class="['quiz-play__answer', ((!showResult) || (question.answers[0].isTrue)) == 0 ? 'quiz-play__answer--hide' : '']" @click="handleSubmit(0, question.answers[0].id)">
                <p class="quiz-play__sym">C</p>
              </QuizBackground>
            </div>
            <div class="col-6 quiz-play__col quiz-play__col--left"> 
              <QuizBackground :class="['quiz-play__answer', ((!showResult) || (question.answers[1].isTrue)) == 0 ? 'quiz-play__answer--hide' : '']" @click="handleSubmit(1, question.answers[1].id)">
                <p class="quiz-play__sym">A</p>
              </QuizBackground>
            </div>
          </div>
          <div class="row">
            <div class="col-6 quiz-play__col quiz-play__col--right"> 
              <QuizBackground :class="['quiz-play__answer', ((!showResult) || (question.answers[2].isTrue)) == 0 ? 'quiz-play__answer--hide' : '']" @click="handleSubmit(2, question.answers[2].id)">
                <p class="quiz-play__sym">M</p>
              </QuizBackground>
            </div>
            <div class="col-6 quiz-play__col quiz-play__col--left"> 
              <QuizBackground :class="['quiz-play__answer', ((!showResult) || (question.answers[3].isTrue)) == 0 ? 'quiz-play__answer--hide' : '']" @click="handleSubmit(3, question.answers[3].id)">
                <p class="quiz-play__sym">I</p>
              </QuizBackground>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
  <div v-else class="quiz-full-container ending">
    <h1>Merci pour votre participation</h1>
    <UiButton label="Accueil" to="/" />
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
  data() {
    return {
      idPlayer : '',
      idQuiz : '',
      questions: [],
      progress: 0,
      show: true,
      showResult : false,
      end: false,
    }
  },
  async mounted() {
    try {
      this.questions = await this.$axios.$get(`/api/answers/${this.code}`);
      this.idQuiz = this.questions[0].id_quiz;
        this.questions.forEach(question => {
        question.answers.forEach(answer => {
          answer.isTrue = false;
        });
      });
    } catch (err) {
      this.$router.push('/');
    }
  },
  methods: {
    async handleSubmit(index, idAnswer) {
      this.questions[this.progress].answers[index].isTrue = true;
      this.showResult = true;

      await this.$axios.$put(`/api/score`, {'playerId': this.idPlayer, "idQuestion": this.questions[this.progress].id, "idAnswer": idAnswer});

      setTimeout(() => {
        if(this.progress < this.questions.length) {
          this.showResult = true;

          this.show = false;
          setTimeout(() => {
            this.progress++;
            this.show = true;
            this.showResult = false;
            if (this.progress >= this.questions.length) {
              this.end = true;
            }
          }, 300);
        }
      }, 3000);
    },
  }
});

</script>

<style lang="scss" scoped>

.quiz-full-container {
  height: calc(100vh - #{$nav-height} - 30px);
  @include d-flex-center;
}

.ending {
  flex-flow: column nowrap;
  h1 {
    @include font-size(30);
    color: #fff;
    margin-bottom: 20px;
  }
}

.quiz-play {

  &__question {
    @include d-flex-center;
    height: 100px;
    h1 {
      @include d-flex-center;
      @include font-size(25);
    }
  }

  &__num-question {
    left: 50px;
    top: 50%;
    @include d-flex-center;
    background-color: $y-primary;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    box-shadow: 0px 4px 0px 0px $y-secondary-3;
    font-family: $secondary-font;
    font-weight: $bold-font-weight;
    @include font-size(20);
    margin-left: 20px;
  }

  &__answer {
    @include d-flex-center;
    height: 30vh;
    transition: 0.15s;
    cursor: pointer;
    &--hide {
      background-color: $gray;
      transform: translateY(7px);
			box-shadow: none;
    }
  }

  &__sym {
    font-family: $secondary-font;
		font-weight: $bold-font-weight;
		@include font-size(450);
    transform: rotateZ(15deg);
    color: $gray;
  }

  &__col {
    &--right {
      padding-right : 3.5px;
    }
    &--left {
      padding-left : 3.5px;
    }
  }
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: 150ms opacity, 300ms transform ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}
</style>
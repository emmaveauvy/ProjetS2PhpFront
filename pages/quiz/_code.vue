<template>
  <div class="quiz-play">
    <div v-for="(question, index) in questions" :key="index">
      <transition name="slide-fade">
        <div v-if="progress == index && show">
          <div class="row">
            <div class="col-12">
              <QuizBackground class="quiz-play__question">
                <div class="quiz-play__container">
                  <p class="quiz-play__num-question">{{progress + 1}}</p>
                  <p class="quiz-play__time" v-if="time > 0">{{time}}</p>
                  <h1>{{question.title}}</h1>
                </div>
              </QuizBackground>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6 quiz-play__col quiz-play__col--right">
              <QuizBackground :class="['quiz-play__answer', ((!showResult) || (question.answers[0].isTrue)) == 0 ? 'quiz-play__answer--hide' : '']">
                <QuizSymAnswer :num="0" class="quiz-play__sym"/>
                <div class="quiz-play__container quiz-play__container--anwser">
                  <p>{{question.answers[0].title}}</p>
                </div>
              </QuizBackground>
            </div>
            <div class="col-12 col-lg-6 quiz-play__col quiz-play__col--left"> 
              <QuizBackground :class="['quiz-play__answer', ((!showResult) || (question.answers[1].isTrue)) == 0 ? 'quiz-play__answer--hide' : '']">
                <QuizSymAnswer :num="1" class="quiz-play__sym"/>
                <div class="quiz-play__container quiz-play__container--anwser">
                  <p>{{question.answers[1].title}}</p>
                </div>
              </QuizBackground>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6 quiz-play__col quiz-play__col--right"> 
              <QuizBackground :class="['quiz-play__answer', ((!showResult) || (question.answers[2].isTrue)) == 0 ? 'quiz-play__answer--hide' : '']">
                <QuizSymAnswer :num="2" class="quiz-play__sym"/>
                <div class="quiz-play__container quiz-play__container--anwser">
                  <p>{{question.answers[2].title}}</p>
                </div>
              </QuizBackground>
            </div>
            <div class="col-12 col-lg-6 quiz-play__col quiz-play__col--left"> 
              <QuizBackground :class="['quiz-play__answer', ((!showResult) || (question.answers[3].isTrue)) == 0 ? 'quiz-play__answer--hide' : '']">
                <QuizSymAnswer :num="3" class="quiz-play__sym"/>
                <div class="quiz-play__container quiz-play__container--anwser">
                  <p>{{question.answers[3].title}}</p>
                </div>
              </QuizBackground>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-if="showResult">
      <QuizButton :label="progress + 1 != questions.length ? 'Suivant' : 'Fin'" @click="handleNext"/>
    </div>
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
  data() {
    return {
      questions: [],
      progress: 0,
      show: true,
      time: 15,
      showResult: false,
      show: true,
    }
  },
  async mounted() {
    try {
      this.questions = await this.$axios.$get(`/api/questions/${this.code}`);
      //Il faut clear les donnees des précédents players !
      this.stopwatch();
    } catch (err) {
      console.log('oups');
    }
  },
  methods: {
    stopwatch() {
      let id = setInterval(() => {
        if(this.time > 0) {
          this.time--;
        }else {
          this.result(id);
        }
      }, 1000);
    },
    result(id) {
      //fetch players results
      clearInterval(id);
      this.showResult = true;
    },
    handleNext() {
      setTimeout(() => {
        this.progress++;
        this.show = true;
      }, 300);
      this.time = 15;
      this.showResult = false;
      this.stopwatch();
      this.show = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.quiz-play {
  
  &__container {
    position: relative;
		padding: 40px 50px;
    display: flex;
    padding-left: 100px;
    width: 100%;
    &>div {
      margin-right: 10px;
    }
	}

  &__question {
    h1 {
      @include font-size(32);
    }
    display: flex;
    align-items: center;
    height: calc(100% - 30px);
    padding-top: 25px;
    padding-bottom: 25px;
    margin-bottom: 30px; 
  }

  &__num-question {
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translate(-50%, -50%);
    @include d-flex-center;
    background-color: $y-primary;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    box-shadow: 0px 4px 0px 0px $y-secondary-3;
    font-family: $secondary-font;
    font-weight: $bold-font-weight;
    @include font-size(20);		
  }

  &__time{
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translate(-50%, -50%);
    @include d-flex-center;
    background-color: $r-primary;
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    font-family: $secondary-font;
    font-weight: $bold-font-weight;
    @include font-size(35);		
  }

  &__answer {
    position: relative;
    transition: 0.15s;
    &--hide {
      background-color: $gray;
      transform: translateY(7px);
			box-shadow: none;
    }
  }

  &__sym {
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translate(-50%, -50%);
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
  transition: 150ms opacity, 300ms transform ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}

</style>
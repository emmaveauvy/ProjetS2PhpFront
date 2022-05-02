<template>
    <div class="quiz-home col-12 col-md-7 col-xl-9">
      <QuizBackground>
          <div class="quiz-home__container">
						<h1 class="quiz-home__title">Le Cami</h1>
          </div>
      </QuizBackground>
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.quiz-home {
	&__title {
		@include font-size(40);
	}
	&__container {
		padding: 50px;
	}
}
</style>
<template>
	<div class="quiz-home col-12 col-md-7 col-xl-9">
		<QuizBackground>
			<div class="quiz-home__container">
				<h1 class="quiz-home__title">Le Cami</h1>
				<p>Bienvenue sur le <strong>CAMI</strong>. Teste tes amis en créant des quiz sur tes sujets favoris !. Pour créer ton premier quiz, il te faudra créer un compte. Utilise les actions rapides juste en dessous !</p>
				<h2>Actions rapides</h2>
				<div class="quiz-home__controls">
                  <UiButton label="Jouer" to="/play" />
                  <UiButton label="Créer un quiz" to="/quiz/add" />
				  <UiButton label="Se connecter" to="/sign-in" />
				  <UiButton label="Créer un compte" to="/sign-up" />
                </div>
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
		padding: 40px 50px;
	}

	h1 {
		margin-bottom: 30px;
	}

	h2 {
		margin-top: 30px;
	}

	p {
		margin: 15px 0;
		line-height: 150%;
	}

	&__controls {
		margin-top: 15px;
		display: flex;
		&>div {
			margin-right: 10px;
		}
		&>a {
			margin-right: 10px;
		}
	}
}
</style>
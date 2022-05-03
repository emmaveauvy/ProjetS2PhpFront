<template>
<div class="quiz-sym-answer">
	<div><p>{{letter}}</p></div>
</div>
    
</template>

<script>
import Vue from "vue";
export default Vue.extend({
	props: {
		num: {
			type: Number,
      required: true,
		}
	},
	computed: {
		letter() {
			let tab = ['C', 'A', 'M', 'I'];
			return tab[this.num];
		}
	}
});
</script>

<style lang="scss" scoped>
.quiz-sym-answer {
	@include d-flex-center;
	background-color: $y-primary;
	width: 50px;
	height: 50px;
	border-radius: 100%;
	box-shadow: 0px 4px 0px 0px $y-secondary-3;
	p {
		font-family: $secondary-font;
		font-weight: $bold-font-weight;
		@include font-size(20);		
	}
}
</style>
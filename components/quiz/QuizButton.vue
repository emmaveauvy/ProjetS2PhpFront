<template>
  <div class="quiz-button" @click="handleClick">
    <div class="quiz-button__container" :style="padding">
      <span v-if="label" class="quiz-button__text">{{ label }}</span>
      <UiIcon v-if="icon" class="quiz-button__icon" :name="icon.name" :theme="icon.theme" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    label: {
      type: String,
      required: false
    },
    icon: {
      type: Object,
      required: false
    }
  },
  computed: {
    padding() {
      return {
        padding: this.icon ? "0 1rem" : "0 1.5rem"
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
});
</script>

<style scoped lang="scss">
.quiz-button {
  transition: 0.2s;
  font-weight: $semi-bold-font-weight;
  overflow: hidden;
  cursor: pointer;
  &__container {
    background-color: $y-primary;
    height: 47px;
    padding: 0 1.5rem;
    @include d-flex-center;
    transition: 0.15s;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 7px 0px 0px $y-secondary-3;

		&:active {
			transform: translateY(7px);
			box-shadow: none;
		}
  }
  &__text, &__icon {
    color: $text;
    transition: 0.15s;
		user-select: none;
  }
  &__text {
    @include font-size(20);
    font-style: italic;
    font-weight: $bold-font-weight;
  }
  &__icon {
    @include font-size(25);
    padding-left: 0.2rem;
  }
  &.disabled {
    opacity: 0.5;
  }
}
</style>
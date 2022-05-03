<template>
  <div class="quiz-checkbox">
    <div v-if="label" class="quiz-checkbox__label">
      <label :for="name">{{ label }}</label>
    </div>
    <div class="quiz-checkbox__wrapper">
      <input 
        type="checkbox"
        :id="name"
        :name="name"
        :checked="value"
        @input="$emit('input', $event.target.checked)"
        :required="required"
        :class="[interaction ? 'interaction' : '', 'quiz-checkbox__input']"
      />
      <p v-if="text" class="quiz-checkbox__text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    label: {
      type: String,
      required : false
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required : false
    },
    interaction: {
      type: Boolean,
      default: true
    }
  },
});
</script>

<style scoped lang="scss">
.quiz-checkbox {
  &__label {
    display: flex;
    align-items: center;
    label {
      display: block;
      font-weight: $semi-bold-font-weight;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
      @include font-size(14);
    }
  }
  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  &__input {
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0;
    border: solid 1px $y-secondary-2;
    border-radius: 5px;
    background-color: $y-secondary;
    border-radius: 3px;
    appearance: none;
    outline: none;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      bottom: 50%;
      width: 45%;
      height: 3px;
      left: 14%;
      background-color: $text;
      transform: rotate(50deg);
      transform-origin: left;
      transition: 0.2s;
      transition-delay: 0.2s;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 13%;
      width: 70%;
      height: 3px;
      left: 40%;
      background-color: $text;
      transform: rotate(-50deg);
      transform-origin: left;
      transition: 0.2s;
      transition-delay: 0s;
      overflow: hidden;
    }
    &.interaction::before {
      width: 0;
    }
    &.interaction::after {
      width: 0;
    }
    &.interaction:checked::before {
      width: 45%;
      transition-delay: 0s;
    }
    &.interaction:checked::after {
      width: 70%;
      transition-delay: 0.2s;
    }
  }
  &__text {
    @include font-size(13);
    padding-left: 0.5rem;
  }
}
</style>
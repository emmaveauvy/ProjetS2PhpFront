<template>
  <div class="quiz-input-code">
    <label class="quiz-input-code__label" :for="name">{{ label }}</label>
    <div class="quiz-input-code__wrapper" @click="$event.target.firstChild.focus()">
      <input
        v-for="index in digitCount"
        :key="index"
        class="quiz-input-code__input"
        type="number"
        :name="name + '-' + index"
        :id="name + '-' + index"
        :value="digitsFromValue[index - 1]"
        @click.stop
        @input="handleInput($event, index - 1)"
        @paste.prevent="handlePaste"
        :required="required"
        :placeholder="index"
         inputmode="decimal"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "UiPinInput",
  data() {
    return {
      digits: [],
    }
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String],
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    digitCount: {
      type: Number,
      default: 4,
    }
  },
  methods: {
    handleInput(event, digitId) {
      (event.target).parentElement.classList.remove('invalid');
      let newVal = this.value.toString();
      let data = event.data;
      if (!data || data?.trim() === '')
        newVal = newVal.substr(0, digitId) + '_' + newVal.substr(digitId + 1);
      else
        newVal = newVal.substr(0, digitId) + event.data + newVal.substr(digitId + 1);
      this.$forceUpdate();
      // console.log(this.concatDigits());
      this.$emit('input', newVal);
      (event.target)?.nextSibling?.focus();
    },
    handlePaste(event) {
      let pasted = (event.clipboardData).getData('text');
      this.$emit('input', pasted);
    },
    concatDigits() {
      return `
        ${this.digits[1] ? this.digits[1] : ''}
        ${this.digits[2] ? this.digits[2] : ''}
        ${this.digits[3] ? this.digits[3] : ''}
        ${this.digits[4] ? this.digits[4] : ''}
      `.replace(/\s/g, '');
    }
  },
  computed: {
    digitsFromValue() {
      return this.value.toString().split('');
    }
  }
});
</script>

<style lang="scss" scoped>
.quiz-input-code {
  width: 100%;
}
.quiz-input-code__label {
  display: block;
  font-weight: $semi-bold-font-weight;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  @include font-size(14);
}
.quiz-input-code__input {
  appearance: none;
  width: 100%;
  max-width: 20rem;
  box-sizing: border-box;
  padding: 0.5rem;
  font-weight: $bold-font-weight;
  height: 40px;
  width: 2rem;
  background-color: transparent;
  text-align: center;
  border-radius: 5px;
  -moz-appearance: textfield;
  border: none;
  &:focus {
    box-shadow: 0 0 0 0.1rem $y-secondary-2;
  }
}
.invalid.quiz-input-code__wrapper {
  border: solid 1px var(--error-color);
}
.invalid .quiz-input-code__input::placeholder {
  color: var(--light-error-color) !important;
}
.invalid .quiz-input-code__input:focus {
  box-shadow: 0 0 0 0.2rem var(--light-error-color);
}
.quiz-input-code__input::-webkit-inner-spin-button, 
.quiz-input-code__input::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
.quiz-input-code__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 100%;
  max-width: 20rem;
  box-sizing: border-box;
  height: 40px;

  border: solid 1px $y-secondary-2;
  border-radius: 5px;
  background-color: $y-secondary;
  transition: 0.2s;
  &:focus {
    box-shadow: 0 0 0 0.2rem $y-secondary-2;
  }
}
</style>
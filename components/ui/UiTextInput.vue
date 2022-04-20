<template>
  <div class="ui-text-input">
    <div class="ui-text-input__label" v-if="label">
      <label :for="name">{{ label }}</label>
    </div>
    <div class="ui-text-input__wrapper">
      <UiIcon v-if="icon" class="ui-text-input__icon" :name="icon.name" :theme="icon.theme" />
      <UiIcon v-if="type == 'password'" class="ui-text-input__password" name="visibility" @down="showPassword = true" @up="showPassword = false" />
      <input
        class="ui-text-input__input"
        :type="typeInput"
        :name="name"
        :id="name"
        :value="value"
        :placeholder="placeholder"
        @input="handleInput"
        :required="required"
        :maxlength="type == 'text' ? 30 : ''"
        :style="paddingLeft"
      />
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
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      required: false
    },
    icon: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      showPassword: false,
    }
  },
  computed: {
    paddingLeft() {
      return {
        'padding-left': this.icon ? "2.5rem !important" : ""
      };
    },
    typeInput() {
      return this.showPassword ? 'text' : this.type; 
    }
  },
  methods: {
    handleInput(e) {
      // e.target.parentElement.classList.remove('invalid');
      this.$emit('input', e.target.value);
    }
  }
});
</script>

<style lang="scss" scoped>
.ui-text-input {
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
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
    height: 40px;
    border: solid 1px $r-secondary-2;
    border-radius: 5px;
    background-color: $r-secondary-3;
    transition: 0.2s;
    // &:focus {
    //   // box-shadow: 0 0 0 0.2rem $r-secondary-2;
    // }
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    @include font-size(20);
    transform: translateY(-50%);
    color: $r-secondary-2;
  }
  &__password {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0.75rem;
    @include font-size(20);
    transform: translateY(-50%);
    color: $r-secondary-2;
    z-index: 100000000;
  }
}
</style>
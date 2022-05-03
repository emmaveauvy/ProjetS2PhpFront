<template>
  <NuxtLink v-if="!native && to" :to="to" :class="['ui-button', disabled ? 'disabled' : '']" @click="$emit('click')">
    <div class="ui-button__container" :class="{secondary}" :style="padding">
      <UiIcon v-if="icon" class="ui-button__icon" :name="icon.name" :theme="icon.theme" />
      <span v-if="label" class="ui-button__text">{{ label }}</span>
    </div>
  </NuxtLink>
  <a v-else-if="to" :href="to" :class="['ui-button', disabled ? 'disabled' : '']" :target="blank ? '_blank' : ''" @click="$emit('click')">
    <div class="ui-button__container" :class="{secondary}" :style="padding">
      <UiIcon v-if="icon" class="ui-button__icon" :name="icon.name" :theme="icon.theme" />
      <span v-if="label" class="ui-button__text">{{ label }}</span>
    </div>
  </a>
  <div v-else :class="['ui-button', disabled ? 'disabled' : '']" :target="blank ? '_blank' : ''" @click="$emit('click')">
    <div class="ui-button__container" :class="{secondary}" :style="padding">
      <UiIcon v-if="icon" class="ui-button__icon" :name="icon.name" :theme="icon.theme" />
      <span v-if="label" class="ui-button__text">{{ label }}</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    to: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    native: {
      type: Boolean,
      default: false
    },
    blank: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Object,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    padding() {
      return {
        padding: this.icon ? "0 1rem" : "0 1.5rem"
      };
    },
  }
});
</script>

<style scoped lang="scss">
.ui-button {
  transition: 0.2s;
  font-weight: $semi-bold-font-weight;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  &__container {
    background-color: $r-primary;
    height: 40px;
    padding: 0 1.5rem;
    @include d-flex-center;
    transition: 0.15s;
    position: relative;
    overflow: hidden;
    &.secondary {
      background-color: $r-secondary;
      &::after {
        content: '';
        z-index: 2;
        background-color: $r-secondary;
        position: absolute;
        left: -100%;
        bottom: -100%;
        width: 0;
        height: 0;
        transition: 0.4s ease-in-out;
        border-radius: 500px;
      }
      &:hover::after {
        width: 300%;
        height: 300%;
      }
      .ui-button__text, .ui-button__icon {
        position: relative;
        z-index: 3;
        color: $r-primary;
      }
    }
  }
  &__text, &__icon {
    color: #fff;
    @include font-size(13); 
    letter-spacing: .07rem;
    transition: 0.15s;
  }
  &__icon {
    @include font-size(20); 
  }
  &.disabled {
    opacity: 0.5;
  }
}
</style>
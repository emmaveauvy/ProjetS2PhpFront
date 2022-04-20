<template>
  <NuxtLink v-if="native" class="ui-link" :to="to">
    {{ text }}
  </NuxtLink>
  <a v-else class="ui-link" :href="to" :target="blank ? '_blank' : ''">
    {{ text }}
  </a>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    blank: {
      type: Boolean,
      default: false
    },
    native: {
      type: Boolean,
      default: true
    }
  },
});
</script>

<style lang="scss" scoped>
.ui-link {
  color: $r-primary;
  border-bottom: 2px solid $r-primary;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: $r-secondary;
    width: 0;
    height: 100%;
    transition: 0.2s ease-in-out;
    z-index: -1;
  }
  &:hover::before {
    width: 100%;
  }
}
</style>
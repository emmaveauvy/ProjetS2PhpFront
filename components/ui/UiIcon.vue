<template>
  <i :class="iconClasses" @mousedown="$emit('down')" @mouseup="$emit('up')">
    {{ name }}
  </i>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      default: "home",
    },
    theme: {
      type: String,
    },
  },
  computed: {
    iconClasses() {
      if (this.theme) {
        return ['material-icons-' + this.theme]
      }
      return ['material-icons'];
    }
  }
});
</script>
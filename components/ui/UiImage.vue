<template>
  <img :src="src" :alt="alt" />
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    file: {
      type: String,
      required: true,
    },
    folder: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: ""
    }
  },
  computed: {
    src() {
      const src = require(`assets/${this.folder}/${this.file}`);
      return src;
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
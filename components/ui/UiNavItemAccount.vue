<template>
  <div class="ui-navitemaccount">
    <UiAvatar />
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      
    };
  },
  methods: {

  },
});
</script>

<style lang="scss" scoped>
.ui-navitemaccount {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: $nav-height;
}
</style>
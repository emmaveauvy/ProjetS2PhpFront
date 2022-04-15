<template>
  <div class="ui-navitemaccount">
    <div class="ui-navitemaccount__avatar"></div>
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
  
  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: $gray;
  }
}
</style>
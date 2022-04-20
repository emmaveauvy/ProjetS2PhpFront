<template>
    <div class="ui-avatar" :style="color">
      <p class="ui-avatar__letter">{{letter}}</p>
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    }
  }, 
  computed: {
    letter() {
      return this.name.charAt(0).toUpperCase();
    },
    color() {
      let colors = ['#c7a21c', '#04d8d1'];
      return {backgroundColor : colors[Math.floor(Math.random() * colors.length)]}
    }
  }
});
</script>

<style lang="scss" scoped>
.ui-avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  &__letter {
    width: 100%;
    height: 100%;
    @include d-flex-center;
    font-weight: $semi-bold-font-weight;
    color: #fff;
  }
}
</style>
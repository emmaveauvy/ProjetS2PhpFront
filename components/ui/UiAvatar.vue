<template>
    <div class="ui-avatar" :style="color">
      <p class="ui-avatar__letter">{{a}}</p>
      <img v-if="!a" src="https://miro.medium.com/max/360/1*W35QUSvGpcLuxPo3SRTH4w.png" alt="avatar">
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    letter: {
      type: String,
      default : ''
    }
  },
  data() {
    return {
      name: ''
    }
  },
  async fetch() {
    let user = await this.$axios.$get(`/api/me`);
    this.name = user.name;
  },
  computed: {
    a() {
      return this.letter == '' ? this.name.charAt(0).toUpperCase() : this.letter;
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
  position: relative;
  overflow: hidden;
  &__letter {
    width: 100%;
    height: 100%;
    @include d-flex-center;
    font-weight: $semi-bold-font-weight;
    color: #fff;
  }
  img {
    width: 200%;
    height: 200%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
  }
}
</style>
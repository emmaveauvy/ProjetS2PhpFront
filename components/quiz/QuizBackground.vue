<template>
  <div class="ui-background" @click="$emit('click')"><slot /></div>
</template>

<style lang="scss" scoped>
  .ui-background {
    width: 100%;
    height: calc(100% - 14px);
    border-radius: 5px;
    background: #fff;
    position: relative;
    box-shadow: 0px 7px 0px 0px $gray;
    overflow: hidden;
    margin-bottom: 14px;
  }
</style>
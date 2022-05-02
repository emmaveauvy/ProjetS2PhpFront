<template>
  <div class="app">
    <header class="app__navigation">
      <div class="container">
        <UiNavigation/>
      </div>
    </header>
    <main class="container app__page">
      <Nuxt/>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app {
  position: relative;
  &__navigation {
    position: fixed;
    top: 0;
    left: 0;
    z-index: $nav-zindex;
    top: 0;
    width: 100%;
    // box-shadow: 0px -1px 1px 1px $r-secondary-3;
    transition: 0.7s background, 0.2s box-shadow, 0.2s padding;
    background-color: rgba($color: #fff, $alpha: 0.05);
    backdrop-filter: blur(12px);
    padding-bottom: 2px;
  }

  padding-top: $nav-height + 30;

  @include background-img('imgs/backF.png');
  height: 100vh;
}
</style>
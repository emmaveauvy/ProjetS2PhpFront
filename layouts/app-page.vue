<template>
  <div class="app" >
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
  padding-top: $nav-height + 30;
  &__navigation {
    z-index: $nav-zindex;
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    // box-shadow: 0px -1px 1px 1px $r-secondary-3;
    transition: 0.7s background, 0.2s box-shadow, 0.2s padding;
    backdrop-filter: blur(12px);
    padding-bottom: 2px;
  }
}
</style>
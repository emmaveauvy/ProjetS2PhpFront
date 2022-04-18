<template>
  <div class="row ui-navigation align-items-center">
    <div class="col-3">
      <p>Logo</p>
    </div>
    <div class="col-6">
      <nav>
        <ol class="ui-navigation__crumbs">
          <li class="ui-navigation__crumb">
            <NuxtLink to="/quiz/add">Create</NuxtLink>
          </li>
          <li class="ui-navigation__crumb">
            <NuxtLink to="/quiz">Play</NuxtLink>
          </li>
          <li class="ui-navigation__crumb">
            <NuxtLink to="/user">Account</NuxtLink>
          </li>
        </ol>
      </nav>
    </div>
    <div class="col-3 ui-navigation__account">
      <UiNavItemAccount />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-navigation {
  height: $nav-height;
  &__crumbs {
    @include d-flex-center;
  }
  &__crumb {
    @include d-flex-center;
    @include font-size(15);
    padding: 0 30px;
    height: $nav-height;
    cursor: pointer;
    font-weight: $semi-bold-font-weight;
  }
  &__account {
    justify-content: flex-end;
  }
}
</style>
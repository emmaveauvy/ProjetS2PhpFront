<template>
  <div class="row ui-navigation align-items-center">
    <div class="col-3 ui-navigation__logo">
      <NuxtLink to="/"><img src="~/assets/imgs/logo.png"  alt="logo le Cami"></NuxtLink>
    </div>
    <div class="col-6">
      <nav>
        <ol class="ui-navigation__crumbs">
          <li class="ui-navigation__crumb">
            <NuxtLink to="/quiz/add">Créer</NuxtLink>
          </li>
          <li class="ui-navigation__crumb">
            <NuxtLink to="/play">Jouer</NuxtLink>
          </li>
          <li class="ui-navigation__crumb">
            <NuxtLink to="/user">Mon compte</NuxtLink>
          </li>
        </ol>
      </nav>
    </div>
    <div class="col-3 ui-navigation__account">
      <NuxtLink to="/user"><UiNavItemAccount /></NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-navigation {
  height: $nav-height;
  &__crumbs {
    @include d-flex-center;
  }
  &__logo {
    height: 80%;
    padding: 5px;
    img {
      height: 100%;
    }
    a {
      height: 100%;
      &:focus {
        border: none;
        box-shadow: none;
      }
      &:active {
        border: none;
        box-shadow: none;
      }
    }
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
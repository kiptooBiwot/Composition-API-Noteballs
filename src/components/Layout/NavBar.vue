<script setup>
/**
 * Imports
 */
import { ref } from 'vue';

/**
 * Mobile Nav
 */
const showMobileNav = ref(false)
</script>

<template>
  <nav aria-label="main navigation" class="navbar is-success" role="navigation">
    <div class="container is-max-desktop px-2">


      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Noteballs
        </div>

        <a @click.prevent="showMobileNav = !showMobileNav" role="button" class="navbar-burger"
          :class="{ 'is-active': showMobileNav }" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div @click="showMobileNav = !showMobileNav" id="navbarBasicExample" class="navbar-menu"
        :class="{ 'is-active': showMobileNav }">
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item" active-class="is-active">Post</RouterLink>
          <RouterLink to="/stats" class="navbar-item" active-class="is-active">Stats</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
<template>
  <div class="app-header">
    <div class="app-header__list">
      <router-link class="app-header__item" :to="{ name: 'list' }">List</router-link>
      <router-link class="app-header__item" :to="{ name: 'converter' }">Converter</router-link>
    </div>
  </div>
</template>

<!-- style-->
<style src="./index.scss" lang="scss"></style>
<!-- scripts-->
<script src="./index.js"></script>

<template>
  <div class="app-header">
    <div class="app-header__list">
      <router-link class="app-header__item" :to="{ name: 'list' }">List</router-link>
      <router-link class="app-header__item" :to="{ name: 'converter' }">Converter</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style lang="scss" scoped>
.app-header{
  background: gray;
  &__list{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  &__item{
    display: flex;
    justify-content: center;
    padding: 20px;
    min-width: 320px;
    color: $black;
    text-decoration-color: transparent;
    transition: text-decoration-color $trans;
    background: white;
    border: 1px solid #cecece;
    @include respondTo(800px){
      min-width: auto;
      width: 50%;
    }
    &.router-link-active{
      font-weight: bold;
    }
  }
}
</style>
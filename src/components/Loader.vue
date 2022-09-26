<template>
  <div class="loader-wrap">
    <div class="loader" :data-size="size" :data-color="color"></div>
  </div>
</template>
<script>
export default {
  name: 'loader',
  props: {
    color: {
      type: String,
      default: 'black'
    },
    size: {
      type: String,
      default: 'large'
    }
  }
}
</script>
<style lang="scss">
.loader {
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  border: 2px solid;
  border-radius: 50%;
  animation: spinner infinite .7s linear both;
  &-wrap{
    background: #cecece;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    animation: fadeOut 1 0.3s 1.1s forwards;
  }
  &[data-size='large'] {
    width: 50px;
    height: 50px;
  }
  &[data-size='normal'] {
    width: 30px;
    height: 30px;
    @include respondTo(580px) {
      width: 25px;
      height: 25px;
    }
  }
  &[data-size='small'] {
    width: 20px;
    height: 20px;
  }
  &[data-color='black'] {
    border-color: transparent transparent $black transparent;
  }
  &[data-color='white'] {
    border-color: transparent transparent $white transparent;
  }
}
</style>

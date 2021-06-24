<template>
  <div id="app" class="app">
    <loader />
    <app-header />
    <div class="app-container">
      <transition name="component-fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<!--// global styles-->
<style src="@/assets/scss/main.scss" lang="scss"></style>

<script>

import appHeader from '@/components/app-header/index.vue'
import loader from '@/components/Loader.vue'
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    appHeader,
    loader
  },
  computed: {
    ...mapGetters({
      valutes: 'list/valutes',
    }),
  },
  created(){
    if( this.valutes.length <= 0){
      this.getList();
    }
  },
  methods: {
    ...mapActions({
      getList: 'list/GET_LIST',
    }),
  }
}
</script>

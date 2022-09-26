<template>
  <div id="app" class="app">
    <Loader />
    <AppHeader />
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

import AppHeader from '@/components/AppHeader.vue'
import Loader from '@/components/Loader.vue'
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
    AppHeader,
    Loader
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
      getList: 'list/getList',
    }),
  }
}
</script>

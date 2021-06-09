<template>
  <div class="converter">
    Currency Converter
    <div class="converter-top">
      <div class="converter-top__left" v-if="valutes">
        <select name="country" id="country" v-model="selected[0]" @change="convert">
          <option :value="item" v-for="(item,id) in countries" :key="id">{{ item }}</option>
        </select>
        <br>
        <br>
        <br>
        <br>
        <input @input="convert" v-model="inputed" type="number">
      </div>
      <div class="converter-top__right">
        <select name="country" id="country1" @change="convert" v-model="selected[1]" :items="countries">
          <option :value="item" v-for="(item,id) in countries" :key="id">{{ item }}</option>
        </select>
        <br>
        <br>
        <br>
        <br>
        <input type="text" v-model="result" readonly>
      </div>
    </div>
  </div>
</template>

<!-- style-->
<style src="./index.scss" lang="scss"></style>
<!-- scripts-->
<script src="./index.js"></script>

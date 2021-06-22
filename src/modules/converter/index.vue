<template>
  <div class="converter">
    <div class="converter-title">
      Currency Converter
    </div>
    <div class="converter-top">
      <div class="converter-top__left" v-if="valutes">
        <v-select :options="countries" v-model="selected[0]" :clearable="false" @input="convert" ></v-select>
<!--        <select name="country" id="country" v-model="selected[0]" @change="convert">-->
<!--          <option :value="item" v-for="(item,id) in countries" :key="id">{{ item }}</option>-->
<!--        </select>-->
        <input @input="convert" v-model="inputed" type="number">
      </div>
      <div class="converter-top__right">
        <v-select :options="countries" v-model="selected[1]" :clearable="false" @input="convert" ></v-select>
<!--        <select name="country" id="country1" @change="convert" v-model="selected[1]" :items="countries">-->
<!--          <option :value="item" v-for="(item,id) in countries" :key="id">{{ item }}</option>-->
<!--        </select>-->
        <input type="text" v-model="result" readonly>
      </div>
    </div>
  </div>
</template>

<!-- style-->
<style src="./index.scss" lang="scss"></style>
<!-- scripts-->
<script src="./index.js"></script>

<template>
  <div class="converter">
    <div class="converter-title">
      Currency Converter
    </div>
    <div class="converter-content">
      <div class="converter-top">
        <div class="converter-top__left" v-if="valutes">
          <v-select :options="countries" v-model="selected[0]" :clearable="false" :transition="'slide-top'"
                    :searchable="false" :readonly="true" @input="convert"></v-select>
          <input @input="convert" v-model="inputed" type="number">
        </div>
        <div class="converter-top__right">
          <v-select :options="countries" v-model="selected[1]" :clearable="false" :transition="'slide-top'"
                    :searchable="false" :readonly="true" @input="convert"></v-select>
          <input type="text" v-model="result" readonly>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- style-->
<style src="./index.scss" lang="scss"></style>
<!-- scripts-->
<script src="./index.js"></script>

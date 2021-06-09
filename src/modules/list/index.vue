<template>
  <div class="list">
    <div class="list-content">
      <div class="list-item" v-for="(item) in valutes" :key="item.id">
        <div class="list-item__top">
          <div class="list-item__name">
            {{ item.Name }}
          </div>
        </div>
        <div class="list-item__bottom">
          <div class="list-item__value">
            {{ item.Nominal }} {{item.CharCode}}
            <span class="list-item__arrow">
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrows-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-arrows-h fa-w-16 fa-2x"><path fill="currentColor" d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z" class=""></path></svg>
            </span>
            {{ item.Value }} RUB
          </div>
          <div class="list-item__indication">
            <span class="list-item__indication-arrow"
                  v-if="item.Value > item.Previous || item.Value < item.Previous"
                  :class="{ 'up': item.Value > item.Previous , 'grown': item.Value < item.Previous}"
            >
               <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-up fa-w-14 fa-2x"><path fill="currentColor" d="M4.465 263.536l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L207 92.113V468c0 6.627 5.373 12 12 12h10c6.627 0 12-5.373 12-12V92.113l178.494 178.493c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-211.05-211.05c-4.686-4.686-12.284-4.686-16.971 0L4.465 246.566c-4.687 4.686-4.687 12.284 0 16.97z" class=""></path></svg>
            </span>
            <span :class="{'up': item.Value > item.Previous}">{{ Math.abs(item.Value - item.Previous).toFixed(2)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- style-->
<style src="./index.scss" lang="scss"></style>
<!-- scripts-->
<script src="./index.js"></script>

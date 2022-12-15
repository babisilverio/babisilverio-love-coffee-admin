<template>
  <main class="main--container">
    <slot name="container"></slot>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class MainContainer extends Vue {}
</script>

<style lang="scss" scoped>
.main--container {
  height: calc(100vh - 38px);
  overflow-x: hidden;
  overflow-y: scroll;
  margin-left: 6%;
  margin-top: 6%;
}
</style>

<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {

  // start() {

  // }

}
</script>

<style scoped>
  #app, .v_app{
    font-family: Roboto;
    overflow: hidden;
  }
</style>

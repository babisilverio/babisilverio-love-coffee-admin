<template>
  <div style="height:100%">
    <v-app-bar
      absolute
      color="#72402D"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title style="color:#fff">Love Coffee</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="#fff">mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="#fff">mdi-account-circle</v-icon>
      </v-btn>

    </v-app-bar>
    
    <v-navigation-drawer
      permanent
      expand-on-hover
      color="#72402D"
      class="mt-12"
    >

      <v-list
        nav
        dense
        class="mt-6"
      >

        <v-list-item link class="my-4" style="color:#fff">
          <v-list-item-icon>
            <v-icon color="#fff">mdi-coffee</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Cafeteria</v-list-item-title>
        </v-list-item>

        <v-list-item link class="my-4" style="color:#fff">
          <v-list-item-icon>
            <v-icon color="#fff">mdi-file</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Produtos</v-list-item-title>
        </v-list-item>

        <v-list-item link class="my-4" style="color:#fff">
          <v-list-item-icon>
            <v-icon color="#fff">mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Agenda</v-list-item-title>
        </v-list-item>

        <v-list-item link class="my-4" style="color:#fff">
          <v-list-item-icon>
            <v-icon color="#fff">mdi-percent-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Cupom de desconto</v-list-item-title>
        </v-list-item>
  
      </v-list>
    </v-navigation-drawer>

  </div>
  
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator'

@Component
export default class HomeIndex extends Vue{
  
}

</script>

<style scoped>

</style>

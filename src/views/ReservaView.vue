<template>
  <section>
    <NavigationBar />

    <MainContainer>
      <div slot="container">
        <v-text-field
          label="Produtos"
          placeholder="Placeholder"
          outlined
          ></v-text-field>
      </div>
    </MainContainer>

  </section>
</template>

<script lang="ts" src="@/controller/Produtos.ts"></script>

<style scoped>

</style>
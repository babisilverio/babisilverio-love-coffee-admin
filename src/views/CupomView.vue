<template>
  <section>
    <NavigationBar />

    <MainContainer>
      <div slot="container">
        <v-text-field
          label="Cupom"
          placeholder="Placeholder"
          outlined
          ></v-text-field>
      </div>
    </MainContainer>

  </section>
</template>

<script lang="ts" src="@/controller/Cupom.ts"></script>

<style scoped>
  div {
    height: 100vh;
  }
</style>
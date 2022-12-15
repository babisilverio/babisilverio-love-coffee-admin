<template>
  <section>
    <NavigationBar />

    <MainContainer>
      <div slot="container">
        <h1>Cafeteria</h1>
        <div>
          <v-row>
            <v-col cols="12">
              <label for="nomeCafeteria">Nome:</label>
              <input class="input-12" id="nomeCafeteria" v-model="nome" />
            </v-col>
          </v-row>

          <v-col cols="12">
            <label for="endereco">Endereço:</label>
            <input class="input-6" id="endereco" v-model="endereco"  />
  
            <label for="numero">Numero:</label>
            <input class="input-1" id="numero" v-model="numero"/>

          </v-col>

          <v-col cols="12">
            <label for="bairro">Bairro:</label>
            <input class="input-6" id="bairro" v-model="bairro"  />
  
            <label for="cidade">Cidade:</label>
            <input class="input-3" id="numero" v-model="cidade"/>

            <label for="uf">UF:</label>
            <input class="input-1" id="uf" v-model="uf"/>

          </v-col>
      </div>
      </div>
    </MainContainer>

  </section>
</template>

<script lang="ts" src="@/controller/Cafeteria.ts"></script>

<style scoped>
  .input-12 {
    margin: 4px;
    border: 1px solid #CCC;
    border-radius: 5px;
    width: 80%;
    height: 40px;
  }

  .input-6 {
    margin: 4px;
    border: 1px solid #CCC;
    border-radius: 5px;
    width: 40%;
    height: 40px;
  }

  .input-3 {
    margin: 4px;
    border: 1px solid #CCC;
    border-radius: 5px;
    width: 20%;
    height: 40px;
  }

  .input-1 {
    margin: 4px;
    border: 1px solid #CCC;
    border-radius: 5px;
    width: 5%;
    height: 40px;
  }
</style>
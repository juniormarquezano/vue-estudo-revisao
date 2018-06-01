<script>
  export default {
    name: 'form-categories',
    data: () => ({
      title: 'Cadastrar Nova Categoria',
      name: ''
    })
  }
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <form class="form-inline">
      <div class="form-group">
        <label for="name">Nome da Categoria</label>
        <input type="text" id="name" placeholder="Nome da Categoria" v-model="name" class="form-control">
      </div>
      <button class="btn btn-primary">Cadastrar</button>
    </form>
    <router-link :to="{ name: 'index-categories' }" class="btn btn-primary">Voltar</router-link>
    <p>{{ name }}</p>
  </div>
</template>

<style scoped>

</style>

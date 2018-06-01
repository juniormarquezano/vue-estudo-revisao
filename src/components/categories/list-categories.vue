<script>
  import { mapState } from 'vuex'
  import Posts from '../posts/index'
  export default {
    components: {
      Posts
    },
    computed: {
      ...mapState({
        lists: state => state.categories.list
      })
    }
  }
</script>

<template>
  <div>
    <h1>Categorias</h1>
    <router-link :to="{ name: 'form-categories' }" class=" btn btn-primary">Nova Categoria</router-link>
    <table class="table table-condensed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lists" :key="item">
          <td>{{ item }}</td>
          <td>Ações</td>
        </tr>
      </tbody>
    </table>
    <posts />
  </div>
</template>

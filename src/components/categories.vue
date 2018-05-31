<script>
  import { mapState } from 'vuex'
  import Posts from './posts'
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
    <ul>
      <li v-for="item in lists" :key="item">{{ item }}</li>
    </ul>
    <posts />
  </div>
</template>

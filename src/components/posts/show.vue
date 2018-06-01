<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'PostsShow',
    props: ['id'],
    methods: {
      ...mapActions({
        getPost: 'blog/getPost'
      })
    },
    mounted () {
      return this.getPost(this.id)
    },
    computed: mapState('blog', {
      post: state => state.post
    })
  }
</script>

<template>
  <div class="jumbotron jumbotron-fluid" v-cloak>
    <div class="container">
      <h2 class="display-4">{{ post.title }}</h2>
      <p class="lead">{{ post.body }}</p>
      <router-link class="btn btn-primary" :to="{name: 'posts-index'}">Voltar</router-link>
    </div>
  </div>
</template>

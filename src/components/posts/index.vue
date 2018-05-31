<template>
  <div>
    <h1>{{ title }}</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
    <table v-else class="table table-condensed">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>
            <router-link :to="{name: 'posts-show', params: {'id': post.id}}">
              <a href="">{{ post.title }}</a>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'PostsIndex',
    data: () => ({
      loading: false,
      title: 'Lista de Posts'
    }),
    methods: {
      ...mapActions('blog', {
        getPosts: 'getPosts'
      }) // Chama uma actions que executa uma mutation
    },
    computed: {
      /* Para não usar this.$store.state
      posts () {
        return this.$store.state.blog.posts
      }
      */
      ...mapState('blog', {
        posts: state => state.posts
      })
    },
    mounted () {
      this.loading = true
      this.getPosts()
        .then((response) => {
          this.loading = false
        })
    }
  }
</script>

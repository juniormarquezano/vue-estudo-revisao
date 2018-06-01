<template>
  <div>
    <h1>{{ title }}</h1>
    <router-view></router-view>
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
    props: {
      title: {
        type: String,
        default: 'Lista de Posts'
      }
    },
    data: () => ({
      // loading: false
      loading: true
      // title: 'Lista de Posts'
    }),
    methods: {
      // ...mapActions('blog', ['getPosts']) // Chama uma actions que executa uma mutation
      ...mapActions('blog', {
        getPosts: 'getPosts'
      })
    },
    computed: {
      /* Para não usar this.$store.state
      posts () {
        return this.$store.state.blog.posts
      }
      */
      /*
      ...mapState('blog', {
        posts: state => state.posts
      })
      */
      ...mapState('blog', ['posts'])
    },
    mounted () {
      // this.loading = true
      this.getPosts()
        .then(() => {
          this.loading = false
        })
    }
  }
</script>

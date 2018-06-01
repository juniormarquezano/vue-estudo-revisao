<script>
  export default {
    data: () => ({
      toggle: false
    })
  }
</script>

<template>
  <div>
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" @click.prevent="toggle = !toggle" class="navbar-toggle collapsed pull-left" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">CYBER</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div :class="['collapse navbar-collapse', { show: toggle }]">
          <ul class="nav navbar-nav">
            <router-link :to="{ name: 'home' }" tag="li" exact>
              <a>HOME</a>
            </router-link>
            <router-link :to="{ name: 'products' }" tag="li">
              <a>PRODUTOS</a>
            </router-link>
            <router-link :to="{ name: 'posts-index' }" tag="li">
              <a>BLOG</a>
            </router-link>
            <router-link :to="{ name: 'index-categories' }" tag="li">
              <a>CATEGORIAS</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

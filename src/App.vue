<script>
import PageHeader from './components/root/header/Main'

export default {
  name: 'app',
  components: { PageHeader }
}
</script>

<template>
  <div id="app">
    <header>
      <page-header />
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style src="./assets/scss/app.scss" lang="scss"></style>

<script>
import Home from './components/Home'
import PageHeader from './components/root/header/Main'

export default {
  name: 'app',
  components: { Home, PageHeader }
}
</script>

<template>
  <div id="app">
    <header>
      <page-header />
    </header>
    <main class="container">
      <home />
    </main>
  </div>
</template>

<style src="./assets/scss/app.scss" lang="scss"></style>

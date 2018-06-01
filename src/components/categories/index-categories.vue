<script>
  import sidebar from './sidebar'
  export default {
    components: {
      sidebar
    }
  }
</script>
<template>
	<div>
    <h1>Categorias</h1>
    <div class="row">
      <div class="col">
        <sidebar />
      </div>
      <div class="col">
        <router-view/>
        <!--<router-view name="helper"/>-->
      </div>
    </div>
  </div>
</template>

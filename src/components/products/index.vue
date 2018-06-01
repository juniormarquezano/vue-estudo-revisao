<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data: () => ({
      formActive: false,
      product: {
        name: ''
      },
      updated: false
    }),
    computed: {
      // ...mapState(['products']) // evita criar um método products () { this.$store.state.products }
      /*
      ...mapState({
        products: state => { return state.products }
      })
      */
      ...mapState('products', {
        products: state => state.products
      })
    },
    methods: {
      ...mapActions('products', ['addProduct', 'removeProduct', 'updateProduct']),
      /*
      ...mapActions({
        add: 'increment'
      }),
      */
      _submit () {
        if (this.updated) {
          this.update()
        } else {
          this.create()
        }
      },

      create () {
        this.addProduct(this.product)
          .then(res => {
            console.log(res)
          })

        this.reset()
        this.formActive = false
      },

      update () {
        this.updateProduct(this.product)
        this.updated = false
        this.formActive = false
        this.reset()
      },

      edit (index) {
        this.formActive = true
        this.updated = true
        // this.product = this.$store.state.products[index]
        this.product = this.products[index]
        // console.log(this.products)
      },

      remove (id) {
        this.removeProduct(id)
      },

      close () {
        this.formActive = false
        this.updated = false
        this.reset()
      },

      reset () {
        this.product = {}
      }
    }
  }
</script>

<template>
  <div>
    {{ updated }}
    <div v-if="formActive">
      <h2>{{ updated ? 'Editar Produto' : 'Cadastrar Produto'}}</h2>
      <form @submit.prevent="_submit">
        <div class="form-group">
          <label for="product">Nome do Produto</label>
          <input type="text" id="product" class="form-control" placeholder="Nome do Produto" v-model="product.name">
        </div>
        <button class="btn btn-primary">Salvar</button>
        <a @click.prevent="close" class="btn btn-danger">Fechar</a>
      </form>
    </div>
    <h1>Lista de Produtos</h1>
    <button @click="formActive = !formActive" :disabled="formActive" class="btn btn-primary mb-5">Novo Produto</button>
    <table class="table table-condensed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.name">
          <td>{{ product.name }}</td>
          <td>
            <button class="btn btn-danger btn-xs" @click="remove(index)">Excluir</button>
            <button class="btn btn-primary btn-xs" @click="edit(index)">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.mb-5 {
  margin-bottom: 5px;
}
</style>


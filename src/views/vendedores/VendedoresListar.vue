<template>
  <div class="container">
    <div class="head right">
      <b-link to="/vendedores/novo">
        <b-button variant="success">
          <b-icon icon="plus-circle-fill" /> Novo Vendedor
        </b-button>
      </b-link>
    </div>
    <h2>Vendedores</h2>
    <div class="table">
      <vue-good-table
          :columns="colunas"
          :rows="vendedores"
          :pagination-options="{
            enabled: true
          }"  >

        <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'acao'">
              <b-button variant="danger" v-on:click="apagar(props.row.id)">
                <b-icon icon="x" />
              </b-button>
              <b-button variant="warning" v-on:click="alterar(props.row.id)">
                <b-icon icon="pencil-square" />
              </b-button>
              <b-button variant="warning" v-on:click="vendas(props.row.id)">
                <b-icon icon="eye-fill" />
              </b-button>
            </span>
        </template>
      </vue-good-table>
    </div>
  </div>
</template>
<script>
import VendedoresService from '../../service/VendedoresService'

export default {
  name: 'VendedoresListar',
  components: {

  },
  data() {
    return {
      colunas: [
        {
          label: 'ID',
          field: 'id',
        },
        {
          label: 'Nome',
          field: 'nome',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'Total Vendas',
          field: 'total_vendas',
          type: 'decimal'
        },
        {
          label: 'Total Comissão',
          field: 'total_comissao',
          type: 'decimal',
        },
        {
          label: 'Acão',
          field: 'acao'
        },
      ],
      vendedores: [],
    }    
  },
  methods: {
      pegarTodos() {
        VendedoresService.listar().then(resposta => {
          this.vendedores = resposta.data
        })
      },
      apagar(id) {
        VendedoresService.apagar(id).then(resposta => {
          if(resposta.data) {
            this.$swal('Vendedor deletado com sucesso!');
            this.pegarTodos();
          }
        })
      },
      alterar(id) {
        this.$router.push('vendedores/atualizar/'+id)
      },
      vendas(id) {
        this.$router.push('vendedores/vendas/'+id)
      }
  },
  mounted() {
   this.pegarTodos();
  }
}
</script>


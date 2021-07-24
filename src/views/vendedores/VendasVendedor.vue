<template>
  <div class="container">
    <div class="head right">
      <b-link to="/vendedores">
        <b-button variant="warning">
          <b-icon icon="arrow-return-left" /> Voltar
        </b-button>
      </b-link>
    </div>
    <h2>Vendas do vendedor: <b>{{ vendedor }}</b></h2>
    <div class="table">
      <vue-good-table
          :columns="colunas"
          :rows="vendas"
          :pagination-options="{
            enabled: true
          }"  >
      </vue-good-table>
    </div>
  </div>
</template>
<script>
import VendedoresService from '../../service/VendedoresService'

export default {
  name: 'VendasVendedor',
  data() {
    return {
      colunas: [
        {
          label: 'ID',
          field: 'id',
        },
        {
          label: 'Data',
          field: 'created_at',
        },
        {
          label: 'Valor Venda',
          field: 'valor_venda',
          type: 'decimal'
        },
        {
          label: 'Valor Comissão',
          field: 'valor_comissao',
          type: 'decimal'
        },
      ],
      vendas: [],
      vendedor: ''
    }    
  },
  methods: {
      pegarVendas() {
        VendedoresService.pegarUm(this.$route.params.id).then(resposta => {
          this.vendas = resposta.data.vendas
          this.vendedor = resposta.data.nome
        })
      },
  },
  mounted() {
   this.pegarVendas();
  }
}
</script>


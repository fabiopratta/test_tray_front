<template>
  <div class="container">
    <div class="head right">
      <b-link to="/vendedores">
        <b-button variant="warning">
          <b-icon icon="arrow-return-left" /> Voltar
        </b-button>
      </b-link>
    </div>
    <h2>Vendas do vendedor: <b>{{ vendedor.nome }}</b></h2>
    <div class="table">
      <vue-good-table
          :columns="colunas"
          :rows="vendas"
          :sort-options="{
            enabled: true,
            initialSortBy: {field: 'created_at', type: 'desc'}
          }"
          :pagination-options="{
            enabled: true,
          }"  >
        <div slot="table-actions-bottom" class="right">
          <h5>Total Vendas: <b>R$ {{ formataValor(vendedor.total_vendas) }}</b></h5>
          <h5>Total Comissão: <b>R$ {{ formataValor(vendedor.total_comissao) }}</b></h5>
        </div>
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
          this.vendedor = resposta.data
        })
      },
      formataValor(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
  },
  mounted() {
   this.pegarVendas();
  }
}
</script>


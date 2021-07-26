<template>
  <div class="container">
    <div class="head right">
      <b-link to="/vendedores">
        <b-button variant="warning">
          <b-icon icon="arrow-return-left" /> Voltar
        </b-button>
      </b-link>
    </div>
    <h2>Nova Venda</h2>
    <div class="form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group id="id_vendedor" label="Vendedor:" label-for="id_vendedor">
          <b-form-select
              id="id_vendedor"
              v-model="form.id_vendedor"
              :options="vendedores"
              class="form-control"
              value-field="id"
              text-field="nome"
              required
          >
            <template #first>
              <b-form-select-option value="" disabled>-- Selecione um vendedor --</b-form-select-option>
            </template>
          </b-form-select>
        </b-form-group>

        <b-form-group id="valor_venda" label="Valor R$:" label-for="valor_venda">
          <b-form-input
              id="valor_venda"
              v-model="form.valor_venda"
              type="text"
              placeholder=""
              v-money="money"
              required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Enviar</b-button>
        <b-button type="reset" variant="danger">Limpar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import VendedoresService from '../../service/VendedoresService'
import VendasService from "@/service/VendasService";
import {VMoney} from 'v-money'

export default {
  name: 'Vendas',
  data() {
    return {
      money: {
        decimal: '.',
        thousands: '',
        precision: 2,
      },
      form: {
        valor_venda: '',
        id_vendedor: '',
      },
      vendedores: [],
      show: true
    }
  },
  methods: {
    pegarTodosVendedores() {
      VendedoresService.listar().then(resposta => {
        this.vendedores = resposta.data
      })
    },
    onSubmit(event) {
      event.preventDefault()
      VendasService.incluir(this.form).then(resultado => {
        if(resultado.data){
          this.$swal('Venda cadastrada com sucesso!');
          this.onReset(event);
        }
      }).catch(err => {
        console.log(err);
        this.$swal('Erro ao cadastrar venda.');
        this.onReset(event);
      });
    },
    onReset(event) {
      event.preventDefault()
      this.form.id_vendedor = ''
      this.form.valor_venda = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  mounted() {
    this.pegarTodosVendedores();
  },
  directives: {money: VMoney}
}
</script>


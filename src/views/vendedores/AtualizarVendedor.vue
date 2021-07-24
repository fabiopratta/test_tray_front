<template>
  <div class="container">
    <div class="head right">
      <b-link to="/vendedores">
        <b-button variant="warning">
          <b-icon icon="arrow-return-left" /> Voltar
        </b-button>
      </b-link>
    </div>
    <h2>Atualizar Vendedor</h2>
    <div class="form">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

          <b-form-group id="nome" label="Nome:" label-for="nome">
            <b-form-input
                id="nome"
                v-model="form.nome"
                placeholder=""
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="email" label="Email:" label-for="email">
            <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder=""
                required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Atualizar</b-button>
          <b-button type="reset" variant="danger">Limpar</b-button>
        </b-form>
      </div>
  </div>
</template>

<script>
import VendedoresService from '../../service/VendedoresService'

export default {
  name: 'AtualizarVendedor',
  data() {
    return {
      form: {
        nome: '',
        email: '',
      },
      show: true
    }
  },
  mounted() {
    VendedoresService.pegarUm(this.$route.params.id).then(resultado => {
      this.form = resultado.data
    })
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      VendedoresService.atualizar(this.form).then(resultado => {
        if(resultado.data){
          this.$swal('Vendedor atualizado com sucesso!');
        }
      }).catch(err => {
        console.log(err);
        this.$swal('Erro ao atualizar.');
        this.onReset(event);
      });
    },
    onReset(event) {
      event.preventDefault()
      this.form.email = ''
      this.form.nome = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>


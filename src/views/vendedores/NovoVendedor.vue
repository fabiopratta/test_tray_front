<template>
  <div class="container">
    <div class="head right">
      <b-link to="/vendedores">
        <b-button variant="warning">
          <b-icon icon="arrow-return-left" /> Voltar
        </b-button>
      </b-link>
    </div>
    <h2>Novo Vendedor</h2>
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

          <b-button type="submit" variant="primary">Enviar</b-button>
          <b-button type="reset" variant="danger">Limpar</b-button>
        </b-form>
      </div>
  </div>
</template>

<script>
import VendedoresService from '../../service/VendedoresService'

export default {
  name: 'NovoVendedor',
  data() {
    return {
      form: {
        nome: '',
        email: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      VendedoresService.incluir(this.form).then(resultado => {
        if(resultado.data){
          this.$swal('Vendedor cadastrado com sucesso!');
          this.onReset(event);
        }
      }).catch(err => {
        console.log(err);
        this.$swal('Email já existe em nosso cadastro.');
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


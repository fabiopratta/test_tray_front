<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-button v-b-toggle.sidebar-no-header variant="dark" size="sm"><b-icon icon="list" /></b-button>
                <b-nav-item href="/">Home</b-nav-item>
                <b-nav-item href="#/vendedores">Vendedores</b-nav-item>
                <b-nav-item href="#/vendas">Nova Venda</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
<script>
export default {
  name: 'NavBarComponent',
}
</script>
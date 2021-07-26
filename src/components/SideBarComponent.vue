<template>
  <div>
    <b-sidebar id="sidebar-no-header" 
    aria-labelledby="sidebar-no-header-title" 
    bg-variant="dark"
    text-variant="light"
    no-header 
    shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Tray E-commerce</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="#/vendedores" @click="hide"><b-icon icon="person-fill" /> Vendedores</b-nav-item>
              <b-nav-item href="#/vendas" @click="hide"><b-icon icon="inbox-fill" /> Nova Venda</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide"><b-icon icon="x" />Fechar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  name: 'SideBarComponent',
}
</script>

<style scoped>
.nav-item > .nav-link {
    color: #fff;
}
.nav-item > .nav-link:hover {
    color: #ccc;
}
</style>
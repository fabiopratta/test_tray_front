import Vendedores from '../views/Vendedores.vue'
import Home from '../views/Home.vue'
import Vendas from '../views/Vendas.vue'

const routes = [
    {
     path: '/',
     component: Home
    },
    {
      path: '/vendedores',
      component: Vendedores
     },
     {
      path: '/vendas',
      component: Vendas
     },
  ];
  
  export default routes;
  
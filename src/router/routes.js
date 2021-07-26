import Vendedores from '../views/vendedores/Vendedores.vue'
import Home from '../views/Home.vue'
import Vendas from '../views/vendas/Vendas.vue'
import NovoVendedor from "@/views/vendedores/NovoVendedor";
import VendedoresListar from "@/views/vendedores/VendedoresListar";
import AtualizarVendedor from "@/views/vendedores/AtualizarVendedor";
import VendasVendedor from "@/views/vendedores/VendasVendedor";

const routes = [
    {
     path: '/',
     component: Home
    },
    {
      path: '/vendedores',
      name: 'vendedores',
      component: Vendedores,
        children: [
            {
                path: '',
                name: 'vendedores.listar',
                component: VendedoresListar
            },
            {
                path: 'novo',
                name: 'vendedores.novo',
                component: NovoVendedor
            },
            {
                path: 'atualizar/:id',
                name: 'vendedores.atualizar',
                component: AtualizarVendedor
            },
            {
                path: 'vendas/:id',
                name: 'vendedores.vendas',
                component: VendasVendedor
            }
        ]
     },
     {
      path: '/vendas',
      component: Vendas
     },
  ];
  
  export default routes;
  
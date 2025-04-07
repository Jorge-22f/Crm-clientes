import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listado-clientes',
      component: Inicio,
      props: { titulo: 'Listado de clientes'}
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import ('../views/NuevoCliente.vue'),
      props: { titulo: 'Agregar cliente'}
    },
  ],
})

export default router

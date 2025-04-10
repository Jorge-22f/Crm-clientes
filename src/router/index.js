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
      component: () => import ('../views/NuevoClienteView.vue'),
      props: { titulo: 'Agregar cliente'}
    },
    {
      path: '/editar-cliente/:id',
      name: 'editar-cliente',
      component: () => import ('../views/editarClienteView.vue'),
      props: { titulo: 'editar cliente'}
    },
  ],
})

export default router

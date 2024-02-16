import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "HomePageChunk" */ '../modules/doIt/pages/HomePage.vue')
  },
  {
    path: '/about',
    component: () =>
      import(/* webpackChunkName: "AboutPageChunk" */ '../modules/doIt/pages/AboutPage.vue')
  },
  // {
  //   path: '/pdf',
  //   name: 'pdf-page',
  //   component: () => import(/* webpackChunkName: "PdfPageChunk" */ '../modules/doIt/pages/PdfPage.vue')
  // },
  {
    path: '/pdf/:id',
    name: 'pdf-id',
    component: () => import(/* webpackChunkName: "pdf" */ '../modules/doIt/pages/PdfPage.vue'),
    props: (route) => {
      const id = Number(route.params.id)
      return isNaN(id) ? { id: 1 } : { id: id }
    }
  },
  {
    path: '/alertHome/:id',
    name: 'alertHome-id',
    component: () =>
      import(/* webpackChunkName: "AlertHome" */ '../modules/doIt/pages/AlertHomePage.vue'),
    props: (route) => {
      const id = Number(route.params.id)
      return isNaN(id) ? { id: 1 } : { id: id }
    }
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('../modules/shared/pages/NoPageFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

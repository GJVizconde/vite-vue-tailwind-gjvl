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

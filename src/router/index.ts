
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/pages/Home.vue'), name: 'Home' },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('to', to);
  next()
})

export default router
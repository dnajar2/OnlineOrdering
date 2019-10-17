

const routes = [
  { path: '/', redirect: 'profile'},
  { path: '/profile', name: 'profile', component: require('pages/auth/profile.vue').default, meta: { requiresAuth: true} },
  { path: '/upload', name: 'upload', component: require('pages/upload.vue').default, meta: { requiresAuth: true} },
  { path: '/login', name: 'login', component: require('pages/auth/login.vue').default, },
  { path: '/register', name: 'register', component: require('pages/auth/register.vue').default, },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

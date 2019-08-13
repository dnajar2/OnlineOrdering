
const routes = [
  {
    path: '/',
    component: () => import('layouts/pageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/menu',
        component: () => import('pages/menu/food-menu.vue'),
        redirect:'menu/categories',
        children: [
          {
            path:'/menu/categories', name:'menu.categories', component: () => import('pages/menu/menuItems/Categories.vue')
          },
          {
            path:'/menu/categories/:id', name:'menu.categories.id', component: () => import('components/category-view.vue')
          },
        ]
      },
      { path: '/user', component: () => import('pages/user.vue') },
      { path: '/checkout', component: () => import('pages/check-out.vue') },

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

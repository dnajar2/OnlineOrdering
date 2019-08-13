
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/menu',
        component: () => import('pages/menu/FoodMenu.vue'),
        redirect:'menu/categories',
        children: [
          {
            path:'/menu/categories', name:'menu.categories', component: () => import('pages/menu/menuItems/Categories.vue')
          },
          {
            path:'/menu/sandwiches', name:'menu.sandwiches', component: () => import('pages/menu/menuItems/Sandwiches.vue')
          }
        ]
      },

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

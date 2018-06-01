// import Home from '@/components/home'
// import Products from '@/components/products'
// import Posts from '@/components/posts'
// import PostsShow from '@/components/posts/show'
// import indexCategories from '@/components/categories/index-categories'
// import listCategories from '@/components/categories/list-categories'
// import formCategories from '@/components/categories/form-categories'

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

const routes = [
  { path: '/', component: loadView('home'), name: 'home' },
  { path: '/products', component: loadView('products/index'), name: 'products' },
  {
    path: '/posts',
    // component: loadView('posts/index'),
    // name: 'posts-index',
    children: [
      {
        path: '/',
        component: loadView('posts/list-posts'),
        name: 'posts-index',
        props: true
      },
      {
        path: ':id',
        component: loadView('posts/show'),
        name: 'posts-show',
        props: true
      }
    ]
  },
  {
    path: '/categories',
    // component: indexCategories,
    // component: () => import(/* webpackChunkName: "group-foo" */ '@/components/categories/index-categories'),
    // component: () => import('@/components/categories/index-categories'),
    component: loadView('categories/index-categories'),
    props: true,
    children: [
      {
        path: '/',
        name: 'index-categories',
        // component: listCategories
        // component: () => import('@/components/categories/list-categories')
        // component: () => import(/* webpackChunkName: "group-foo" */ '@/components/categories/list-categories')
        component: loadView('categories/list-categories')
      },
      {
        path: 'form',
        name: 'form-categories',
        /*
        components: {
          helper: () => import('@/components/categories/form-categories')
        }
        */
        // component: () => import('../components/categories/form-categories')
        // component: formCategories
        // component: () => import(/* webpackChunkName: "group-foo" */ '@/components/categories/form-categories')
        component: loadView('categories/form-categories')
      }
    ]
  }
]

export default routes

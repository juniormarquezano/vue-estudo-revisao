import Home from '../components/Home'
import Products from '../components/Products'
import Posts from '../components/posts'
import PostsShow from '../components/posts/show'
import Categories from '../components/Categories'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/products', component: Products, name: 'products' },
  { path: '/posts', component: Posts, name: 'posts' },
  { path: '/posts/:id', component: PostsShow, name: 'posts-show', props: true },
  { path: '/categories', component: Categories, name: 'categories' }
]

export default routes

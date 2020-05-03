import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateArticle from '../views/CreateArticle.vue'
import EditArticle from '../views/EditArticle.vue'
import ListArticle from '../views/ListArticle.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/article/index'
  },
  {
    path: '/article/create',
    name: 'create-article',
    component: CreateArticle
  },
  {
    path: '/article/index',
    name: 'list-article',
    component: ListArticle
  },
  {
    path: '/article/edit/:id',
    name: 'edit-article',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMain from './components/Main.vue'
import HeroList from './components/HeroList.vue'
import HeroNew from './components/HeroNew.vue'
import HeroEdit from './components/HeroEdit.vue'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    component: AppMain
  },
  {
    path: '/heros',
    component: HeroList
  },
  {
    path: '/heros/new',
    component: HeroNew
  },
  {
    name:"hero-edit",
    path:'/heros/:heroId/edit',
    component:HeroEdit
  }
]
export default new VueRouter({
  linkActiveClass:'active',
  routes
})

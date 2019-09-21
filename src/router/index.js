import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/pages/StartPage'
import Documents from '@/components/pages/SearchResultPage'
import NewCompany from '@/components/pages/NewCompaniesPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'search',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'SearchResult',
      component: Documents
    },
    {
      path: '/companies/new',
      name: 'NewCompany',
      component: NewCompany
    }
  ]
})

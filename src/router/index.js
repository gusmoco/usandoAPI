import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cadastro  from '@/components/Cadastro'
import UsandoAPI from '@/components/UsandoAPI'
import Fotografar from '@/components/Fotografar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
     },
    {
      path: '/axios',
      name: 'UsandoAPI',
      component: UsandoAPI
    },
    {
      path: '/fotografar',
      name: 'Fotografar',
      component: Fotografar
    },
    
  ]
})

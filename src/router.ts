import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Mission from './views/Mission.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About    
    },
    {
      path: '/mission/:missionID',
      component: Mission,
      props: true    
    },
    {
      path: '/mission/',
      component: Mission,
      beforeEnter: (to, from, next) => {
        // todo - figure out if there are any default missions to select
        // otherwise navigate to the mission window with the 'create' parameter - meaning create the patient
        next('/mission/create');
      }
    }
  ]
})

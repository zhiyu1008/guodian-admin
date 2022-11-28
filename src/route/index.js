import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage  from '@/components/login_page.vue'
import AdminPage from '@/components/admin_page.vue'
import MainDiagram from '@/components/admin/monitor/maindiagram_page.vue'
import hall from '@/components/admin/hall_page.vue'
import panorama from '@/components/admin/panorama_page.vue'
import close from '@/components/admin/monitor/closing_page.vue'
import environmental from '@/components/admin/monitor/Environmental_page.vue'
import getaway from '@/components/admin/monitor/gateway_page.vue'
import feeder from '@/components/admin/monitor/feeder_page.vue'
import terminal from '@/components/admin/monitor/terminal_page.vue'
import transformer from '@/components/admin/monitor/transformer_page.vue'
import new_data from '@/components/admin/monitor/new_data.vue'
import stations from '@/components/admin/monitor/stations_page.vue'
import orginazation from '@/components/admin/system/orginazation_page.vue'
import user from '@/components/admin/system/user_page.vue'
import dictionary from '@/components/admin/system/dictionary_page.vue'
import post from '@/components/admin/system/post_page.vue'
import announcement from '@/components/admin/system/announcement_page.vue'
import parameter from '@/components/admin/system/parameter_page.vue'
import resource  from '@/components/admin/system/resource_page.vue'
import Permissions from '@/components/admin/system/Permissions_page.vue'
import serve from '@/components/admin/system/serve_page.vue'
const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage  
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
    children:[
     {
      path: 'panorama',
      name: 'panorama',
      component: panorama,
     },
     {
      path: 'hall',
      name: 'hall',
      component: hall,
     },
     {
      path: 'maindiagram',
      name: 'maindiagram',
      component: MainDiagram,
     },{
      path: 'closing',
      name: 'close',
      component: close,
     },
     {
      path: 'gateway',
      name: 'getaway',
      component: getaway,
     },
     {
      path: 'Environmental',
      name: 'environmental',
      component: environmental,
     },
     {
      path: 'Feeder',
      name: 'feeder',
      component: feeder ,
     },
     {
      path: 'Terminal',
      name: 'terminal',
      component: terminal,
     }
     ,
     {
      path: 'transformer',
      name: 'transformer',
      component: transformer,
     }
     ,
     {
      path: 'new_data',
      name: 'new_data',
      component: new_data,
     }
     ,
     {
      path: 'stations',
      name: 'stations',
      component: stations,
     },
     {
      path: 'organization',
      name: 'organization',
      component: orginazation,
     }
     ,
     {
      path: 'user',
      name: 'user',
      component: user,
     }
     ,
     {
      path: 'dictionary',
      name: 'dictionary',
      component: dictionary,
     }
     ,
     {
      path: 'Posts',
      name: 'Posts',
      component: post,
     }
     ,
     {
      path: 'announcement',
      name: 'announcement',
      component: announcement,
     }
     ,
     {
      path: 'parameter',
      name: 'parameter',
      component: parameter,
     }
     ,
     {
      path: 'resource',
      name: 'resource',
      component: resource ,
     }
     ,
     {
      path: 'Permissions',
      name: 'Permissions',
      component: Permissions,
     }
     ,
     {
      path: 'serve',
      name: 'serve',
      component: serve,
     }
     

    ]
  }
]

const router = createRouter({
  mode: "hash",
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})


export default router
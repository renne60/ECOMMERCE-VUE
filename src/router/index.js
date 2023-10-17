import { createRouter, createWebHistory} from 'vue-router';

import Home from '../views/Home.vue';
import { getFromLocalStorage } from '../utils/utlis';
import roles from '../utils/roles';

// Vue.use(VueRouter);
// Vue.use(VueRouterUserRoles)




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ViewCarrito',
    name:'ViewCarrito',
    component: () => import ('../views/ViewCarrito.vue')  
  }, 
  {
    path: '/Login',
    name: 'Login',
    component:()=> import ('../views/Login.vue')
  },
  {
    path:'/Register',
    name:'Register',
    component: ()=> import ('../views/Register.vue')
  },
  {
    path:'/Historial',
    name:'Historial',
    component: ()=> import ('../views/Historial.vue')
  },
  {
    path:'/RProducto',
    name:'RProducto',
    component: ()=> import ('../views/RProducto.vue')
  },
  {
    path:'/Proovedor',
    name:'Proovedor',
    component: ()=> import ('../views/Proovedor.vue')
  },
  // ADMIN
  {
    path:'/Dashboard',
    name:'Dashboard',
    component: ()=> import ('../views/Dashboard.vue'),
    meta:{
      requiresAuth: true,
      adminAuth: true,
      userAuth: false,
      layout:"k-backend-admin",
      title: 'Area administrador'
    },
  },
  // USERS ONLY
  {
    path:'/Profile',
    name:'Profile',
    component: ()=> import ('../views/Profile.vue'),
   meta:{
    requiresAuth: true,
    adminAuth:false,
    userAuth:true,
    layaout:"",
    title:'View Profile'
   }

  },
  {
    path:'/Editprofile',
    name:'Editprofile',
    component: ()=> import ('../views/Editprofile.vue')
  },
  {
    path:'/ViewFavorito',
    name:'ViewFavorito',
    component: ()=> import ('../views/ViewFavorito.vue')
  },
  {
    path:'/ProductsDetail:id',
    name:'ProductsDetail',
    component: ()=> import ('../views/ProductsDetail.vue')
  },
  
]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  router.beforeEach((to, from, next) => {
    const user = getFromLocalStorage('user');
    const role = user?.role?.type?.toLowerCase() 
    const accessToken = getFromLocalStorage('token');
    console.log(role,user,accessToken);

    if (to.meta.requiresAuth){
      if (!role || !accessToken){
        console.log("texto")
        router.push ({path: '/Login'});
      }else{
        if (to.meta.adminAuth){
          if (role === roles.admin) {
            return next();
          }else{
            router.push({path:'/Login'});
          }
        }else if(to.meta.userAuth){
          if(role === roles.cliente){
            return next();
          } else{
            router.push({path:'/Login'});
          }
        }
      }
    } else{
      return next();
    }
  })





export default router

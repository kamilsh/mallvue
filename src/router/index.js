import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import PwdReset from '../components/pwdReset'

import AdminIndex from '../components/admin/AdminIndex'
import AdminDashboard from '../components/admin/function/dashbordIndex'
import OrderManage from '../components/admin/function/OrderManage'
import ProductManage from '../components/admin/function/ProductManage'
import SalerManage from '../components/admin/function/SalerManage'
import UserManage from '../components/admin/function/UserManage'
import AdminManage from '../components/admin/function/AdminManage'
import AdminRegister from '../components/admin/function/AdminRegister'
import AdminPwdReset from "../components/admin/function/AdminPwdReset";

import SalerIndex from '../components/saler/SalerIndex'
import SalerDashboard from '../components/saler/function/dashboardIndex'
import SalerInfo from '../components/saler/function/SalerInfo'
import SalerOrder from '../components/saler/function/SalerOrder'
import SalerProduct from '../components/saler/function/SalerProduct'
import SalerRegister from '../components/saler/SalerRegister'

import UserRegister from '../components/user/UserRegister'
import Home from '../components/user/Home'
import Index from '../components/user/common/Index'
import Cart from '../components/user/common/Cart'
import Order from '../components/user/common/Order'
import UserInfo from '../components/user/common/UserInfo'
import OrderToPay from "../components/user/common/OrderToPay";
import OrderToSend from "../components/user/common/OrderToSend";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'whitePage',
      redirect: '/login',
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pwdReset',
      name: 'PwdReset',
      component: PwdReset
    },
    {
      path: '/register/user',
      name: 'UserRegister',
      component: UserRegister
    },
    {
      path: '/register/saler',
      name: 'SalerRegister',
      component: SalerRegister
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/index',
      children: [
        {
          path: '/home/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/home/cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/home/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/home/orderToPay',
          name: 'OrderToPay',
          component: OrderToPay
        },
        {
          path: '/home/orderToSend',
          name: 'OrderToSend',
          component: OrderToSend
        },
        {
          path: '/home/userinfo',
          name: 'UserInfo',
          component: UserInfo,
          meta: {
            requireAuth: true
          }
        }
      ]
    },

    {
      path: '/saler',
      name: 'Saler',
      component: SalerIndex,
      redirect: '/saler/dashboard',
      // meta: {
      //   requireAuth: true
      // },
      children: [
        {
          path: '/saler/dashboard',
          name: 'Dashboard',
          component: SalerDashboard
        },
        {
          path: '/saler/order',
          name: 'SalerOrder',
          component: SalerOrder
        },
        {
          path: '/saler/product',
          name: 'SalerProduct',
          component: SalerProduct
        },
        {
          path: '/saler/salerinfo',
          name: 'SalerInfo',
          component: SalerInfo
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminIndex,
      redirect: '/admin/dashboard',
      // meta: {
      //   requireAuth: true
      // },
      children: [
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: AdminDashboard
          // meta: {
          //   requireAuth: true
          // }
        },
        {
          path: '/admin/product',
          name: 'ProductManage',
          component: ProductManage
        },
        {
          path: '/admin/user',
          name: 'UserManage',
          component: UserManage
        },
        {
          path: '/admin/saler',
          name: 'SalerManage',
          component: SalerManage
        },
        {
          path: '/admin/order',
          name: 'OrderManage',
          component: OrderManage
        },
        {
          path: '/admin/admininfo',
          name: 'AdminManage',
          component: AdminManage
        },
        {
          path: '/admin/register',
          name: 'AdminRegister',
          component: AdminRegister
        },
        {
          path: '/admin/pwdreset',
          name: 'AdminPwdReset',
          component: AdminPwdReset
        }
      ]
    }
  ]
})

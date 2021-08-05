import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { guestOnly: true },
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    meta: { guestOnly: true },
    component: Login
  },
  {
    path: '/vijesti/:category',
    name: 'Articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/vijesti/:category/:id',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  {
    path: '/vijesti/:category/:id/komentar/:comment_id',
    name: 'Comment',
    component: () => import('../views/Comment.vue')
  },
  {
    path: '/pretrazivanje',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

function isLoggedIn() {
  return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router

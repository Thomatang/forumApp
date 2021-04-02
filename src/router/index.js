import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import PageThreadShow from '@/pages/ThreadShow'
import PageNotFound from '@/pages/NotFound'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'
import Profile from '@/pages/Profile'
import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/me',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      if (threadExists) {
        next()
      } else {
        next({
          name: 'PageNotFound',
          // preserve current path and remove the first char to avoid the target URL starting with `//`
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash if any
          query: this.$route.query,
          hash: this.$route.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

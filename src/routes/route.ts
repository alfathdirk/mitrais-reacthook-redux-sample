import { lazy } from 'react'

const Home = lazy(() => import('@screens/home'))
const Member = lazy(() => import('@screens/member'))
const NotFound = lazy(() => import('@screens/notFound'))

const routes = [
  {
    path:'/',
    exact: true,
    component: Home,
    name:'Home'
  },
  {
    path:'/home',
    component: Home,
    name:'Home'
  },
  {
    path:'/member',
    component: Member,
    name:'Member'
  },
  {
    path: '/404',
    component: NotFound,
  },
]
export default routes

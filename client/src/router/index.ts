import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Prefectures from "@/pages/Prefectures.vue"
import Employees from "@/pages/EmployeePage.vue"
const routes: RouteRecordRaw[] = [
  {
    path: "/Prefectures",
    component: Prefectures
  },
  {
    path: "/employees",
    component: Employees
  }
]
export default createRouter({
  history: createWebHistory(),
  routes
})

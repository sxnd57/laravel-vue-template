import {createRouter, createWebHistory} from 'vue-router'

import Home from "@/components/pages/Home.vue";
import About from "@/components/pages/About.vue";
import ThemeLayout from "@/components/layouts/theme/index.vue";
import AdminLayout from "@/components/layouts/admin/index.vue";
import UserManagement from "@/components/layouts/admin/UserManagement.vue";
import Dashboard from '@/components/layouts/admin/Dashboard.vue'
import DataManagement from "@/components/layouts/admin/DataManagement.vue";
import Reports from "@/components/layouts/admin/Reports.vue";
import Settings from "@/components/layouts/admin/Settings.vue";

const routes = [
    // {
    //     path: "/",
    //     component: ThemeLayout,
    //     children: [
    //         {
    //             path: "",
    //             name: "home",
    //             component: Home
    //         },
    //         {
    //             path: "about",
    //             name: "about",
    //             component: About
    //         }
    //     ]
    // },
    {
        path: '/',
        component: AdminLayout,
        children: [
            {path: 'dashboard', name: 'Dashboard', component: Dashboard},
            {path: 'users', name: 'Users', component: UserManagement},
            { path: 'data', name: 'Data', component: DataManagement },
            { path: 'reports', name: 'Reports', component: Reports },
            { path: 'settings', name: 'Settings', component: Settings },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;

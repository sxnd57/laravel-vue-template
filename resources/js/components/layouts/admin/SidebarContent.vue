<script setup>
import {useRoute} from 'vue-router';

defineProps({
    isCollapsed: Boolean
});

const route = useRoute();
const menuItems = [
    {name: 'Dashboard', path: '/dashboard', icon: 'pi pi-th-large'},
    {name: 'Người dùng', path: '/users', icon: 'pi pi-users'},
    {name: 'Dữ liệu', path: '/data', icon: 'pi pi-database'},
    {name: 'Báo cáo', path: '/reports', icon: 'pi pi-chart-line'},
    {name: 'Cài đặt', path: '/settings', icon: 'pi pi-cog'},
];
</script>

<template>
    <div class="flex flex-col h-full bg-[#1e293b] text-slate-300">
        <div class="flex items-center gap-3 h-16 px-4 border-b border-slate-700/50 bg-[#0f172a]/30 shrink-0">
            <div
                class="w-8 h-8 rounded bg-indigo-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/30">
                <i class="pi pi-prime text-xl"></i>
            </div>
            <span v-if="!isCollapsed" class="text-xl font-bold text-white tracking-wide">PrimeAdmin</span>
        </div>

        <nav class="flex-1 overflow-y-auto py-6 px-3 space-y-2">
            <div v-if="!isCollapsed" class="px-3 mb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Hệ thống
            </div>

            <router-link v-for="item in menuItems" :key="item.path" :to="item.path"
                         class="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative outline-none"
                         :class="[route.path === item.path ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-inner' : 'hover:bg-slate-800/50 hover:text-white border border-transparent']"
                         :title="isCollapsed ? item.name : ''">
                <i :class="[item.icon, 'text-xl transition-colors', route.path === item.path ? 'text-indigo-400' : 'text-slate-400 group-hover:text-white']"></i>
                <span v-if="!isCollapsed" class="font-medium whitespace-nowrap">{{ item.name }}</span>
                <div v-if="isCollapsed && route.path === item.path"
                     class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full"></div>
            </router-link>
        </nav>
    </div>
</template>

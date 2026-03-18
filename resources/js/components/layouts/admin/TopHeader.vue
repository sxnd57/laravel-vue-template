<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

defineEmits(['toggle-mobile-sidebar', 'toggle-desktop-sidebar']);

const route = useRoute();
const routeName = computed(() => {
    const map = {
        '/auth/dashboard': 'Tổng quan',
        '/auth/users': 'Người dùng',
        '/auth/data': 'Dữ liệu',
        '/auth/reports': 'Báo cáo',
        '/auth/settings': 'Cài đặt'
    };
    return map[route.path] || 'Trang quản trị';
});

const menu = ref();
const userMenuItems = ref([
    { label: 'Hồ sơ cá nhân', icon: 'pi pi-user' },
    { label: 'Cài đặt', icon: 'pi pi-cog' },
    { separator: true },
    { label: 'Đăng xuất', icon: 'pi pi-sign-out' }
]);

const toggleUserMenu = (event) => {
    menu.value.toggle(event);
};
</script>

<template>
    <header class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 z-10 sticky top-0">
        <div class="flex items-center gap-4">
            <!-- Nút cho Mobile -->
            <div class="lg:hidden">
                <Button icon="pi pi-bars" text rounded @click="$emit('toggle-mobile-sidebar')" class="text-slate-600!" />
            </div>

            <!-- Nút thu gọn cho Desktop -->
            <div class="hidden lg:block">
                <Button icon="pi pi-bars" text rounded @click="$emit('toggle-desktop-sidebar')" class="text-slate-600!" />
            </div>

            <h1 class="text-lg font-bold text-slate-800 hidden sm:block">{{ routeName }}</h1>
        </div>

        <div class="flex items-center gap-2 sm:gap-4">
            <!-- Khung tìm kiếm -->
            <span class="relative hidden md:block">
                <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-10"></i>
                <input type="text" placeholder="Tìm kiếm..." class="pl-9 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all">
            </span>

            <!-- Công cụ -->
            <div class="h-8 w-px bg-slate-200 mx-1 hidden sm:block"></div>

            <div
                class="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-colors"
                @click="toggleUserMenu"
                aria-haspopup="true"
                aria-controls="user_menu"
            >
                <Avatar image="https://i.pravatar.cc/150?img=11" shape="circle" />
                <i class="pi pi-angle-down text-slate-500 hidden sm:block"></i>
            </div>

            <Menu ref="menu" id="user_menu" :model="userMenuItems" :popup="true" />

        </div>
    </header>
</template>

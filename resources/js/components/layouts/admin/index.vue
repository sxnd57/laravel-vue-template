<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import SidebarContent from "@/components/layouts/admin/SidebarContent.vue";
import TopHeader from "@/components/layouts/admin/TopHeader.vue";
import {Drawer} from "primevue";

const isMobileOpen = ref(false);
const isDesktopCollapsed = ref(false);
const route = useRoute();

// Đóng sidebar trên mobile khi chuyển trang
watch(() => route.path, () => {
    isMobileOpen.value = false;
});
</script>

<template>
    <div class="flex h-screen bg-slate-50 w-full relative overflow-hidden">

        <!-- Sidebar Mobile -->
        <Drawer v-model:visible="isMobileOpen" :showCloseIcon="false" class="p-0" style="width: 16rem; padding: 0;">
            <template #container>
                <SidebarContent :isCollapsed="false" />
            </template>
        </Drawer>

        <!-- Sidebar Desktop -->
        <aside :class="['hidden lg:block fixed inset-y-0 left-0 z-20 transition-all duration-300 bg-[#1e293b]', isDesktopCollapsed ? 'w-20' : 'w-64']">
            <SidebarContent :isCollapsed="isDesktopCollapsed" />
        </aside>

        <!-- Main Wrapper -->
        <div class="flex flex-col flex-1 min-w-0 transition-all duration-300" :class="[isDesktopCollapsed ? 'lg:ml-20' : 'lg:ml-64']">
            <TopHeader
                @toggle-mobile-sidebar="isMobileOpen = true"
                @toggle-desktop-sidebar="isDesktopCollapsed = !isDesktopCollapsed"
            />

            <main class="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8">
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </main>
        </div>
    </div>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }
</style>

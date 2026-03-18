<script setup>
import { ref } from 'vue';

const stats = ref([
    { title: 'Người dùng', value: '12,450', change: '12%', isUp: true, icon: 'pi pi-users', colorClass: 'bg-indigo-50 text-indigo-600' },
    { title: 'Doanh thu', value: '$45,230', change: '8.5%', isUp: true, icon: 'pi pi-wallet', colorClass: 'bg-emerald-50 text-emerald-600' },
    { title: 'Lượt truy cập', value: '84,302', change: '3.2%', isUp: false, icon: 'pi pi-globe', colorClass: 'bg-orange-50 text-orange-600' },
    { title: 'Tin nhắn mới', value: '142', change: '24%', isUp: true, icon: 'pi pi-envelope', colorClass: 'bg-blue-50 text-blue-600' }
]);

const activities = ref([
    { title: 'Anna đã đăng ký tài khoản mới', time: 'Vài giây trước', icon: 'pi pi-user-plus', bgClass: 'bg-blue-50', textClass: 'text-blue-600' },
    { title: 'Hệ thống đã sao lưu dữ liệu', time: '2 giờ trước', icon: 'pi pi-cloud-download', bgClass: 'bg-emerald-50', textClass: 'text-emerald-600' },
    { title: 'John thay đổi quyền truy cập', time: 'Hôm qua, 14:30', icon: 'pi pi-shield', bgClass: 'bg-orange-50', textClass: 'text-orange-600' },
    { title: 'Cảnh báo máy chủ CPU > 80%', time: 'Hôm qua, 09:15', icon: 'pi pi-exclamation-triangle', bgClass: 'bg-red-50', textClass: 'text-red-600' },
]);
</script>

<template>
    <div>
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div v-for="stat in stats" :key="stat.title" class="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                <div>
                    <span class="text-sm font-medium text-slate-500">{{ stat.title }}</span>
                    <div class="text-2xl font-bold text-slate-800 mt-1">{{ stat.value }}</div>
                    <div class="mt-2 text-sm flex items-center gap-1" :class="stat.isUp ? 'text-green-600' : 'text-red-500'">
                        <i :class="stat.isUp ? 'pi pi-arrow-up' : 'pi pi-arrow-down'" style="font-size: 0.75rem"></i>
                        <span class="font-medium">{{ stat.change }}</span>
                        <span class="text-slate-400 text-xs ml-1">tuần qua</span>
                    </div>
                </div>
                <div class="w-12 h-12 rounded-lg flex items-center justify-center text-xl" :class="stat.colorClass">
                    <i :class="stat.icon"></i>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <!-- Chart Area -->
            <div class="xl:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold text-slate-800">Tổng quan truy cập</h3>
                    <Button icon="pi pi-ellipsis-v" text rounded aria-label="Tùy chọn" />
                </div>
                <div class="h-72 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center flex-col text-slate-400">
                    <i class="pi pi-chart-bar text-5xl mb-3 text-indigo-300"></i>
                    <span>Khu vực tích hợp PrimeVue Chart</span>
                </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 class="text-lg font-semibold text-slate-800 mb-6">Hoạt động mới nhất</h3>
                <div class="space-y-6">
                    <div v-for="(activity, index) in activities" :key="index" class="flex gap-4 relative">
                        <div v-if="index !== activities.length - 1" class="absolute left-4 top-8 -bottom-6 w-px bg-slate-200 -translate-x-1/2"></div>
                        <div class="w-8 h-8 rounded-full flex items-center justify-center z-10 shrink-0" :class="activity.bgClass">
                            <i :class="[activity.icon, activity.textClass, 'text-sm']"></i>
                        </div>
                        <div>
                            <p class="text-sm font-medium text-slate-800">{{ activity.title }}</p>
                            <p class="text-xs text-slate-500 mt-1">{{ activity.time }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

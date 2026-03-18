<script setup>
defineProps({
    title: String,
    icon: String,
    desc: String
});
</script>

<template>
    <div class="p-8 bg-white rounded-xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center h-full min-h-[400px]">
        <i :class="[icon, 'text-6xl text-slate-200 mb-4']"></i>
        <h2 class="text-xl font-bold text-slate-700">{{ title }}</h2>
        <p class="text-slate-500 mt-2 max-w-md">{{ desc }}</p>
        <Button label="Quay lại Dashboard" icon="pi pi-home" class="mt-6" outlined @click="$router.push('/')" />
    </div>
</template>

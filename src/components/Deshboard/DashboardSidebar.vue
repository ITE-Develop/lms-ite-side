<template>
    <aside class="border-start border-end border-2 px-3 py-5 h-100">
        <div class="text-center border-bottom pb-3 mb-3">
            <img
                :src="authStore.userData?.profile_picture"
                height="150px"
                width="150px"
                class="rounded-circle object-fit-cover border border-3 border-primary mb-3"
            />
            <h2 class="fs-4">{{ authStore.userData?.name }}</h2>
        </div>
        <DashboardMenu />
    </aside>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.js";
import DashboardMenu from "./DashboardMenu.vue";
const authStore = useAuthStore();
</script>

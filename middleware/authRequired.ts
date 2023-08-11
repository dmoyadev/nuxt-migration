import { useAuthStore } from "../store/auth.js";

export default defineNuxtRouteMiddleware(() => {
    // If the user is authenticated, redirect to home page
    // This is especially made for /login
    const authStore = useAuthStore();
    if (!authStore.currentUser) {
        return navigateTo('/login');
    }
});

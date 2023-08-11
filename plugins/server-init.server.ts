import { useAuthStore } from "~/store/auth";

export default defineNuxtPlugin(() => {
    if (!process.server) { return; }

    const authStore = useAuthStore();
    authStore.data = {
        user: {
            email: 'contact@thecodeorigin.com',
            fullName: 'thecodeorigin',
            avatar: 'https://avatars.githubusercontent.com/u/60340907?s=200&v=4',
        },
        token: 'ultraSecretToken',
    };
});

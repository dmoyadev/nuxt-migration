import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { AUTH_API_URL } from '~/constants/auth';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		data: null as any,
	}),

	getters: {
		currentUser(state) { return state.data?.user; },
		token(state) { return state.data?.token; },
	},

	actions: {
		async register({ form }) {
			const { data } = await useFetch(AUTH_API_URL.REGISTER(), {
				method: 'POST',
				body: JSON.stringify(form),
			});

			this.data = data;
			Cookies.set('auth', data);

			return data;
		},

		async login({ form }) {
			const { data } = await useFetch(AUTH_API_URL.LOGIN(), {
				method: 'POST',
				body: JSON.stringify(form),
			});
			this.data = data;
			Cookies.set('auth', data);

			return data;
		},

		async getAuth() {
			const { data } = await useFetch(AUTH_API_URL.ME());

			return data;
		},
	},
});

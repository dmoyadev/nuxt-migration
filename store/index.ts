import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		locale: 'en',
	}),

	getters: {
		safeLocale(state) { return state.locale || 'en'; }
	},
});

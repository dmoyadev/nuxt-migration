import { defineStore } from 'pinia';
import { PROJECT_API_URL } from '~/constants/project';

export const useProjectStore = defineStore('project', {
	state: () => ({
		count: 0,
	}),

	actions: {
		getMany() {
			return useFetch(PROJECT_API_URL.GET_MANY());
		},

		getOne({ id }: { id: number }) {
			return useFetch(PROJECT_API_URL.GET_ONE(id));
		},

		createOne({ body }: { body: any }) {
			return useFetch(PROJECT_API_URL.CREATE_ONE(), {
				method: 'POST',
				body: JSON.stringify(body),
			});
		},

		updateOne({ body, id }: { id: number, body: any }) {
			return useFetch(PROJECT_API_URL.UPDATE_ONE(id), {
				method: 'PUT',
				body: JSON.stringify(body),
			});
		},

		deleteOne({ id }: { id: number}) {
			return useFetch(PROJECT_API_URL.DELETE_ONE(id), {
				method: 'DELETE',
			});
		},
	},
});

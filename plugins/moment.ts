import moment from 'moment';
import 'moment/locale/vi';
import { useMainStore } from "~/store";

export default defineNuxtPlugin((_) => {
	const store = useMainStore();
	const currentLocale = store.locale;

	// eslint-disable-next-line import/no-named-as-default-member
	moment.locale(currentLocale);

	return {
		provide: {
			moment: () => moment,
		}
	};
});

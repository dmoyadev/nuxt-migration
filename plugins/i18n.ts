import { dev } from '~/plugins/utils/functions/dev';

export default defineNuxtPlugin((nuxtApp) => {
	// beforeLanguageSwitch called right before setting a new locale
	nuxtApp.hook('i18n:beforeLocaleSwitch', ({ oldLocale, newLocale }) => {
		dev.log(oldLocale, newLocale);
	});
});

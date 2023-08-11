import moment from 'moment';
import slug from 'slug';

export function useFilters() {
    function capitalize(val: string) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }

    function formatCurrency(val: string) {
        val = val + '';

        return val.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }

    function formatDate(val: string, locale = 'vi') {
        // eslint-disable-next-line import/no-named-as-default-member
        moment.locale(locale);

        return moment(val).format('Do MMMM YYYY');
    }

    function formatDateTime(val: string) {
        return val ? moment(val).format('HH:mm DD-MM-YYYY') : '';
    }

    function formatTime(val: string) {
        return val ? moment(val).format('hh:mm') : '';
    }

    function lower(val: string) {
        if (val) {
            return val.toLowerCase() || '';
        }
    }

    function round(val: number, roundLimit: number) {
        return Math.floor(+val * 10 ** (roundLimit + 1)) / 10 ** (roundLimit + 1);
    }

    function slugify(val: string) {
        // For more information, visit https://www.npmjs.com/package/slug
        return slug(val);
    }

    function upper(val: string) {
        return val.toUpperCase();
    }

    return {
        capitalize,
        formatCurrency,
        formatDate,
        formatDateTime,
        formatTime,
        lower,
        round,
        slugify,
        upper,
    };
}

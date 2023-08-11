import { VALIDATION_MESSAGE, VALIDATION_REGEX, VALIDATION_TYPE } from '~/constants/validation';

export function useValidation() {
    const { t } = useI18n();

    // https://github.com/yiminghe/async-validator#validator
    // Use with: <el-form-item :rules="[rules.required, rules.email]">...
    const rules = {
        required: {
            required: true,
            message: t(VALIDATION_MESSAGE.REQUIRED)
        },

        email: {
            trigger: ['change'],
            validator: (_: any, value: any, callback: any) => {
                if (!value) {
                    callback(new Error(t(VALIDATION_MESSAGE.REQUIRED)));
                } else if (!VALIDATION_REGEX.EMAIL.test(value)) {
                    callback(new Error(t(VALIDATION_MESSAGE.EMAIL)));
                }
            },
        },

        phone: {
            trigger: ['change'],
            validator: (_: any, value: any, callback: any) => {
                if (!value) {
                    callback(new Error(t(VALIDATION_MESSAGE.REQUIRED)));
                } else if (!VALIDATION_REGEX.PHONE.test(value)) {
                    callback(new Error(t(VALIDATION_MESSAGE.PHONE)));
                }
            },
        },

        alpha: {
            trigger: ['change'],
            validator: (_: any, value: any, callback: any) => {
                if (!value) {
                    callback(new Error(t(VALIDATION_MESSAGE.REQUIRED)));
                } else if (!VALIDATION_REGEX.ALPHA.test(value)) {
                    callback(new Error(t(VALIDATION_MESSAGE.ALPHA)));
                }
            },
        },

        number: {
            trigger: ['change'],
            validator: (_: any, value: any, callback: any) => {
                if (!value) {
                    callback(new Error(t(VALIDATION_MESSAGE.REQUIRED)));
                } else if (!VALIDATION_REGEX.NUMBER.test(value)) {
                    callback(new Error(t(VALIDATION_MESSAGE.NUMBER)));
                }
            },
        },

        url: {
            trigger: ['change'],
            validator: (_: any, value: any, callback: any) => {
                if (!value) {
                    callback(new Error(t(VALIDATION_MESSAGE.REQUIRED)));
                } else if (!VALIDATION_REGEX.URL.test(value)) {
                    callback(new Error(t(VALIDATION_MESSAGE.URL)));
                }
            },
        },
    };

    return { rules, VALIDATION_TYPE };
}

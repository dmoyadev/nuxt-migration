import { beforeEach, describe, it, expect } from 'vitest';
import { setup } from '@nuxt/test-utils';
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';

import MySidebar from './MySidebar.vue';

describe('MySidebar', async () => {
    await setup();

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('is a Vue instance', () => {
        const wrapper = mount(MySidebar);
        expect(wrapper.vm).toBeTruthy();
    });
});

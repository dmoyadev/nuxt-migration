/* eslint-disable no-console */
export const dev = {
  /**
   * Equivalent to console.error but in dev mode only
   * @param  {...any} args
   */
  error: (...args: any) => {
    if (import.meta.env.MODE !== 'production') {
      console.error('[Dev only]', ...args);
    } else {
      console.error('Something is wrong');
    }
  },

  /**
   * Equivalent to console.log but in dev mode only
   * @param  {...any} args
   */
  log: (...args: any) => {
    if (import.meta.env.MODE !== 'production') {
      console.log('[Dev only]', ...args);
    }
  },

  /**
   * Equivalent to console.warn but in dev mode only
   * @param  {...any} args
   */
  warn: (...args: any) => {
    if (import.meta.env.MODE !== 'production') {
      console.warn('[Dev only]', ...args);
    }
  },
};

export default dev;

import {
  APP_SET_TITLE,
} from 'reducers';

/**
 * Set title
 * @param {string} title тайтл
 */
export const setTitle = title => ({
  type: APP_SET_TITLE,
  title: title,
});

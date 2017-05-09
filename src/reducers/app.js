// Set title
export const APP_SET_TITLE = 'APP_SET_TITLE';

const initialState = {
  /**
   * Page title
   * @type {string}
   */
  title: 'default title'
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case APP_SET_TITLE:
      return Object.assign({}, state, {
        title: action.title
      });

    default:
      return state;
  }
};

export default app;

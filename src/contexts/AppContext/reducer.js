import { ENABLE_DARK_MODE, DISABLE_DARK_MODE } from './actions';

const reducer = (state, action) => {
  // const { type, payload } = action;
  const { type } = action;
  switch (type) {
    case ENABLE_DARK_MODE:
      return { ...state, darkMode: true };
    case DISABLE_DARK_MODE:
      return { ...state, darkMode: false };
    default:
      return state;
  }
};

export default reducer;

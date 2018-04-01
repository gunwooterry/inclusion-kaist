import { combineReducers } from 'redux';

const initialSettings = {
  lang: 'ko',
};

const setting = (state = initialSettings, action) => {
  switch (action.type) {
    case 'LANG':
      return { lang: action.lang };
    default:
      return state;
  }
};

export default combineReducers({ setting });

import { combineReducers } from 'redux';

const INITIAL_STATE = {
  lang: 'ko',
};

const settingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LANG':
      return { lang: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  setting: settingReducer,
});

export const setLanguage = (language) => {
  return dispatch => dispatch({
    type: 'LANG',
    payload: language,
  });
};

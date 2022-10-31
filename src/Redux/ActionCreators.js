import ActionTypes from './ActionTypes';

export const setGetAccount = (data) => ({
  type: ActionTypes.GET_ACCOUNT_LIST,
  payload: data,
});

export const setGetCountries = (data) => ({
  type: ActionTypes.GET_COUNTRY_DATA,
  payload: data,
});

export const setAccountError = () => ({
  type: ActionTypes.FETCH_DATA_ERROR,
});

export const setAccountLoading = () => ({
  type: ActionTypes.FETCH_DATA_LOADING,
});

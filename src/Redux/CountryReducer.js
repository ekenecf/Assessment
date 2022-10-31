import ActionTypes from './ActionTypes';

const initialState = {
  countries: [],
};

const CountriesDataReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ActionTypes.GET_COUNTRY_DATA:
      return {
        ...state, countries: payload.data.data,
      };
    default:
      return state;
  }
};
export default CountriesDataReducer;

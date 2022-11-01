import axios from 'axios';
import { setGetCountries } from './ActionCreators';

const COUNTRYURL = 'https://countriesnow.space/api/v0.1/countries';

const getCountries = () => (dispatch) => {
  axios.get(`${COUNTRYURL}`)
    .then((res) => {
      dispatch(setGetCountries(res));
    });
};
export default getCountries;

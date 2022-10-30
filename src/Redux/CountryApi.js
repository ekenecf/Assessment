import axios from 'axios';
import { setGetCountries, setAccountError } from './ActionCreators';

const COUNTRYURL = 'https://countriesnow.space/api/v0.1/countries';

const getCountries = () => (dispatch) => {
  axios.get(`${COUNTRYURL}`)
    .then((res) => {
      console.log(res);
      dispatch(setGetCountries(res));
    })
    .catch(() => {
      dispatch(setAccountError());
    });
};
export default getCountries;

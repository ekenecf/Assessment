import axios from 'axios';
import {
  setGetAccount, setAccountError, setAccountLoading,
} from './ActionCreators';

const ACCOUNTSURL = 'https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json';

export const getAccount = () => (dispatch) => {
  dispatch(setAccountLoading());
  axios.get(`${ACCOUNTSURL}`)
    .then((res) => {
      dispatch(setGetAccount(res));
      const getFromLocal = JSON.parse(localStorage.getItem('accountData')) || [];
      if (!getFromLocal.length) {
        localStorage.setItem('accountData', JSON.stringify(res.data));
      }
    })
    .catch(() => {
      dispatch(setAccountError());
    });
};
export default getAccount;

import axios from 'axios';
import {
  setCreateAccount, setGetAccount, setAccountError, setAccountLoading, setCreateAccountError,
} from './ActionCreators';

const ACCOUNTSURL = 'https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json';

export const postAccounts = (formInputs) => (dispatch) => {
  fetch(`${ACCOUNTSURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((formInputs)),
  }).then((res) => {
    console.log(res);
  }).catch((error) => {
    dispatch(setCreateAccountError());
    console.log(error);
  });
};

export const getAccount = () => (dispatch) => {
  dispatch(setAccountLoading());
  axios.get(`${ACCOUNTSURL}`)
    .then((res) => {
      dispatch(setGetAccount(res));
    })
    .catch(() => {
      dispatch(setAccountError());
    });
};

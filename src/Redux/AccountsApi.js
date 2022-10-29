import axios from 'axios';
import {
  setCreateAccount, setGetAccount, setAccountError, setAccountLoading,
} from './ActionCreators';

const ACCOUNTSURL = 'https://raw.githubusercontent.com/OtegaOvie/StaticDataset/main/accounts.json';

export const postAccounts = () => (dispatch) => {
  dispatch(setAccountLoading());
  fetch(`${ACCOUNTSURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify((group)),
  }).then((res) => {
    console.log(res);
    // dispatch(addGroup(res));
  }).catch((error) => {
    dispatch(setAccountError());
    console.log(error);
  });
};

export const getAccount = () => (dispatch) => {
  dispatch(setAccountLoading());
  axios.get(`${ACCOUNTSURL}`)
    .then((res) => {
        dispatch(setGetAccount(res));
      console.log(res);
      // dispatch(addGroup(res));
    })
    .catch((error) => {
      dispatch(setAccountError());
      console.log(error);
    });
};

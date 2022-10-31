import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import getAccount from '../Redux/AccountsApi';
import './Home.css';

function AccountList() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.AccountsDataReducer);
  const getFromLocal = JSON.parse(localStorage.getItem('accountData')) || [];
  console.log('Fetched data from local', getFromLocal);

  let pageDetail;
  if (loading) {
    if (getFromLocal === []) {
      pageDetail = <ClipLoader color="#000" size={150} />;
    }
  }

  if (error) {
    pageDetail = 'Kindly refresh the page or contact the site manager';
  }

  useEffect(() => {
    dispatch(getAccount());
  }, [dispatch]);

  return (
    <div className="w-3/4">
      <div className="TableContainer">
        <h1>List of accounts</h1>
        <table className="tableHead">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Email Address</th>
              <th>Mobile Number</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {
                getFromLocal.length ? getFromLocal.map((datum) => (
                  <tr key={datum.mobileNumber}>
                    <td>
                      {datum.firstName}
                      {' '}
                      {datum.lastName}
                    </td>
                    <td>{datum.gender}</td>
                    <td>{datum.emailAddress}</td>
                    <td>{datum.mobileNumber}</td>
                    <td>{datum.nationality}</td>
                  </tr>
                )) : <div>Nothing Added Yet</div>
              }
          </tbody>
        </table>
        <div>{pageDetail}</div>
      </div>
    </div>
  );
}

export default AccountList;

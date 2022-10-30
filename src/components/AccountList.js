import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';

import { getAccount } from '../Redux/AccountsApi';

import './Home.css';

function AccountList() {
  const dispatch = useDispatch();
  const { accounts, loading, error } = useSelector((state) => state.AccountsDataReducer);
  console.log(accounts);

  let pageDetail;
  if (loading) {
    pageDetail = <ClipLoader color="#000" size={150} />;
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
                accounts.map((datum) => (
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
                ))
              }
          </tbody>
        </table>
        <div>{pageDetail}</div>
      </div>
    </div>
  );
}

export default AccountList;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Home.css';

function AccountList() {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.EventDataReducer);


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
            <tr>
              <td>Row 1, Cell 1</td>
              <td>Row 1, Cell 2</td>
              <td>Row 1, Cell 3</td>
              <td>Row 1, Cell 4</td>
              <td>Row 1, Cell 5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountList;

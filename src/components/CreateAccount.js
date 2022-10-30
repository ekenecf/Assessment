import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import getCountries from '../Redux/CountryApi';
import { postAccounts } from '../Redux/AccountsApi';

import './Home.css';

function CreateAccount() {
  const { countries } = useSelector((state) => state.CountriesDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const [formInputs, changeFormInputs] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    mobileNumber: '',
    gender: '',
    nationality: 'Choose a country',
  });

  const updateFirstName = (e) => {
    changeFormInputs({
      ...formInputs,
      name: e.target.value,
    });
  };
  const updateLastName = (e) => {
    changeFormInputs({
      ...formInputs,
      lastName: e.target.value,
    });
  };
  const updateEmail = (e) => {
    changeFormInputs({
      ...formInputs,
      emailAddress: e.target.value,
    });
  };
  const updateNumber = (e) => {
    changeFormInputs({
      ...formInputs,
      phoneNumber: e.target.value,
    });
  };
  const updateGender = (e) => {
    changeFormInputs({
      ...formInputs,
      gender: e.target.value,
    });
  };
  const updateNationality = (e) => {
    changeFormInputs({
      ...formInputs,
      nationality: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAccounts(formInputs));
    console.log('fired');
    const {
      firstName, lastName, emailAddress, mobileNumber, gender, nationality,
    } = e.target.elements;
    formInputs.firstName = '';
    formInputs.lastName = '';
    formInputs.emailAddress = '';
    formInputs.mobileNumber = '';
    formInputs.gender = '';
    formInputs.nationality.value = '';
  };
  console.log(formInputs.nationality);

  return (
    <div className="w-1/4">
      <div className="FormCard">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Create account</h2>
          <input type="text" name="name" placeholder="First Name" required className="Input" onChange={(e) => updateFirstName(e)} />
          <input type="test" name="last name" placeholder="Last Name" onChange={(e) => updateLastName(e)} required className="Input" />
          <div className="radio">
            <input type="radio" name="male" value="m" onChange={(e) => updateGender(e)} />
            <label htmlFor="distance">
              Male:
            </label>
            <input type="radio" name="male" value="f" onChange={(e) => updateGender(e)} />
            <label htmlFor="distance">
              Female:
            </label>
          </div>
          <input type="email" name="emailAddress" placeholder="Email Address" onChange={(e) => updateEmail(e)} required className="Input" />
          <input type="number" name="mobileNumber" placeholder="Mobile Number" onChange={(e) => updateNumber(e)} required className="Input" />
          <select className="Input" onChange={(e) => updateNationality(e)} required>
            <option>{formInputs.nationality}</option>
            {
              countries.map((country) => (
                <option key={uuidv4()}>{country.country}</option>
              ))
            }
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;

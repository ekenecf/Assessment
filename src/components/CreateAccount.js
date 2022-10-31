import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import getCountries from '../Redux/CountryApi';
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
      firstName: e.target.value,
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
      mobileNumber: e.target.value,
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
    const createdAccount = {
      firstName: formInputs.firstName,
      lastName: formInputs.lastName,
      gender: formInputs.gender,
      emailAddress: formInputs.emailAddress,
      mobileNumber: formInputs.mobileNumber,
      nationality: formInputs.nationality,
    };
    const getFromLocal = JSON.parse(localStorage.getItem('accountData'));
    localStorage.setItem('accountData', JSON.stringify(getFromLocal.concat(createdAccount)));
    window.location.reload();
  };

  return (
    <div className="w-1/4">
      <div className="FormCard">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Create account</h2>
          <input type="text" name="firstName" placeholder="First Name" required className="Input" onChange={(e) => updateFirstName(e)} />
          <input type="test" name="lastName" placeholder="Last Name" onChange={(e) => updateLastName(e)} required className="Input" />
          <div className="radio">
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" value="M" onChange={(e) => updateGender(e)} />
              Male:
            </label>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" value="F" onChange={(e) => updateGender(e)} />
              Female:
            </label>
          </div>
          <input type="email" name="emailAddress" placeholder="Email Address" onChange={(e) => updateEmail(e)} required className="Input" />
          <input type="number" name="mobileNumber" placeholder="Mobile Number" onChange={(e) => updateNumber(e)} required className="Input" />
          <select className="Input" name="nationality" onChange={(e) => updateNationality(e)} required>
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

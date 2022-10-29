import React from 'react';

import './Home.css';

function CreateAccount() {
  return (
    <div className="w-1/4">
      <div className="FormCard">
        <form onSubmit={() => console.log('Fired')}>
          <h2>Create account</h2>
          <input type="text" name="name" placeholder="First Name" required className="Input" />
          <input type="test" name="last name" placeholder="Last Name" onChange={() => console.log('Last name')} required className="Input" />
          <div className="radio">
            <input type="radio" name="male" value="m" />
            <label htmlFor="distance">
              Male:
            </label>

            <input type="radio" name="male" value="f" />
            <label htmlFor="distance">
              Female:
            </label>
          </div>
          <input type="email" name="email Address" placeholder="Email Address" onChange={() => console.log('email Address')} required className="Input" />
          <input type="number" name="occupation" placeholder="Mobile Number" onChange={() => console.log('Mobile Number')} required className="Input" />
          <select className="Input">
            <option>Choose a Country</option>
            <option>Nigeria</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;

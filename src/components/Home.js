import React from 'react';

import CreateAccount from './CreateAccount';
import AccountList from './AccountList';
import './Home.css';

function Home() {
  return (
    <div className="HomePage">
      <AccountList />
      <CreateAccount />
    </div>
  );
}

export default Home;

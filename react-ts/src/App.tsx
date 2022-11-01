import React from 'react';
import classes from './App.module.scss';
import Dashboard from './Components/Dashboard/Dashboard';
import FavCoinsLayout from './Components/FavouriteCoins/FavCoinsLayout/FavCoinsLayout';

function App() {
  return (
    <div className={classes.app}>
      {/* <Dashboard /> */}
      <FavCoinsLayout />
    </div>
  );
}

export default App;

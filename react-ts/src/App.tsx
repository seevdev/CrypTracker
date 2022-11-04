import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import FavCoinsLayout from './Pages/FavCoinsLayout/FavCoinsLayout';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route path='/fav'>
        <FavCoinsLayout />
      </Route>
    </div>
  );
}

export default App;

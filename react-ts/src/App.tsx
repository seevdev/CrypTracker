import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './Pages/DashboardLayout/Dashboard';
import FavCoinsLayout from './Pages/FavCoinsLayout/FavCoinsLayout';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Route exact path='/'>
        <Redirect to='/dashboard' />
      </Route>
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

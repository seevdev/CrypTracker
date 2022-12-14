import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MarketPage from './Pages/MarketPage/MarketPage';
import StalkingPage from './Pages/StalkingPage/StalkingPage';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Route exact path='/'>
        <Redirect to='/dashboard' />
      </Route>
      <Route path='/dashboard'>
        <MarketPage />
      </Route>
      <Route path='/fav'>
        <StalkingPage />
      </Route>
    </div>
  );
}

export default App;

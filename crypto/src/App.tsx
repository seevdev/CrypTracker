import React from 'react';
import classes from './App.module.scss';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className={classes.app}>
      <Dashboard />
    </div>
  );
}

export default App;

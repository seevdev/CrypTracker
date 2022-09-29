import React from 'react';
import { PropsChildren } from '../types-general';
import classes from './Dashboard.module.scss';

type Colors = {
  green: string;
};
const Dashboard: React.FC<PropsChildren & Colors> = (props) => {
  return <div>{props.green}</div>;
};

export default Dashboard;

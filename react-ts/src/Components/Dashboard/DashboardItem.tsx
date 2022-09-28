import React from 'react';

type Props = {
  children?: React.ReactNode;
  items: string[];
};
type Colors = {
  green: string;
};
const Dashboard: React.FC<Props & Colors> = (props) => {
  return <div>{props.green}</div>;
};

export default Dashboard;

import React from 'react';

interface CardProps {
  children: React.ReactNode;
}
function Card({ children }: CardProps) {
  return <div className='Card'>{children}</div>;
}

export default Card;

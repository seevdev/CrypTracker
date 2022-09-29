import React from 'react';
import { Props } from '../types-general';

const SidemenuItem: React.FC = (props: any) => {
  return (
    <li>
      <div>
        <span>Icon</span> <a href='#'>{props.children}</a>
      </div>
    </li>
  );
};

export default SidemenuItem;

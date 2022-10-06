import React from 'react';
import { Props } from '../../Utilities/types-general';

const SidemenuItem = (props: any) => {
  return (
    <li>
      <div>
        <span>Icon</span> <a href='#'>{props.children}</a>
      </div>
    </li>
  );
};

export default SidemenuItem;

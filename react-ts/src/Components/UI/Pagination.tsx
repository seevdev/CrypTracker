import React, { useRef, useState } from 'react';

import classes from './Pagination.module.scss';

type PaginationProps = {
  elementsPerPage: number;
  totalElements: number;
  paginate: (num: number) => void;
  children?: React.ReactNode;
};

const Pagination = function <T>({
  elementsPerPage,
  totalElements,
  paginate,
}: T & PaginationProps) {
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const numberOfPages = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {numberOfPages.map((num) => {
          return (
            <li key={num}>
              <button
                onClick={function (e) {
                  
                  const target = e.target as Element;
                  setButtonClicked(true);
                  target.classList.add(classes['pagination-circle-clicked']);

                  paginate(num);
                }}
                data-id={num}
                className={classes['pagination-circle']}
              ></button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;

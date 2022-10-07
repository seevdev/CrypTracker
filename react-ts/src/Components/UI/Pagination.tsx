import React, { useRef } from 'react';
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
  const numberOfPages = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {numberOfPages.map((num) => {
          console.log(num);
          return (
            <li key={num}>
              <button
                onClick={() => {
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

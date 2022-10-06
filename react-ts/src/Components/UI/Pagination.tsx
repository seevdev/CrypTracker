import React from 'react';
import classes from './Pagination.module.scss';

type PaginationProps = {
  elementsPerPage: number;
  totalElements: number;
  paginate: (a: number) => void;
  children?: React.ReactNode;
};

const Pagination = function <T>({
  elementsPerPage,
  totalElements,
  paginate,
}: T & PaginationProps) {
  const numberOfPages = [];

  for (let i = 1; i < Math.ceil(totalElements / elementsPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {numberOfPages.map((num) => {
          return (
            <li>
              <a href='#'>
                <div className={classes['pagination-circle']}></div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;

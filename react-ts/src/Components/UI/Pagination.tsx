import React, { useContext, useState } from 'react';
import themeContext from '../../store/theme-context';

import classes from './Pagination.module.scss';

type PaginationProps = {
  elementsPerPage: number;
  totalElements: number;
  paginate: (num: number) => void;
  currentPage: number;
  children?: React.ReactNode;
};

const Pagination = function <T>({
  elementsPerPage,
  totalElements,
  paginate,
  currentPage,
}: T & PaginationProps) {
 
  const numberOfPages = [];

  const onBtnHandler = (num: number) => {
    paginate(num);
  };
  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {numberOfPages.map((num, index) => {
          const spanClasses = [classes['pagination-circle']];
          if (index === currentPage - 1) {
            spanClasses.push(classes['active-page']);
          }
          return (
            <li key={num}>
              <button
                onClick={() => {
                  onBtnHandler(num);
                }}
                data-id={num}
                className={spanClasses.join(' ')}
              ></button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;

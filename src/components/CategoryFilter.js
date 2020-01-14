import React from 'react';
import PropTypes from 'prop-types';

import { BOOK_CATEGORY } from '../utils/bookObject';

const CategoryFilter = ({ handleFilterChange }) => {
  const filterChange = (event) => {
    handleFilterChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="selectCategory" className="mt-2">
         Books
        <select
          id="category"
          onChange={filterChange}
          className="delete-bgcolor ml-4"
        >
          <option value="Category" defaultValue>CATEGORY</option>
          {
           ['All'].concat(BOOK_CATEGORY).map(category => (
             <option key={category} value={category}>{ category }</option>
           ))
            }
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

import React from 'react';
import PropTypes from 'prop-types';

import { BOOK_CATEGORY } from '../utils/bookObject';

const CategoryFilter = ({ handleFilterChange }) => {
  const filterChange = (event) => {
    handleFilterChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="selectCategory">
         Filter Categories:
        <select
          id="category"
          onChange={filterChange}
        >
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

import React from 'react';

import { BOOK_CATEGORY } from '../utils/bookObject';

const CategoryFilter = () => (
  <div>
    <label htmlFor="selectCategory">
          Filter Categories:
      <select
        id="category"
      >
        <option key="all" value="all">All</option>
        {
          BOOK_CATEGORY.map((category) => (
            <option key={category} value={category}>{ category }</option>
          ))
        }
      </select>
    </label>
  </div>
);
export default CategoryFilter;

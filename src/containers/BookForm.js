/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const BookForm = () => (
  <div>
    <form>
      <div>
        <label>
					Book Title:
          <input type="text" placeHolder="enter book title" name="title" />
        </label>
      </div>
      <div>
        <label> Book Category:</label>
        <select>
          <option value="Action"> Action </option>
          <option value="Biography"> Biography </option>
          <option value="History"> History</option>
          <option value="Horro"> Horror</option>
          <option value="Kids"> Kids </option>
          <option value="Learning"> Learning </option>
          <option value="Sci-Fi"> Sci-Fi </option>
        </select>
      </div>
      <div>
        <button type="submit" value="submit"> Submit </button>
      </div>
    </form>
  </div>
);


export default BookForm;

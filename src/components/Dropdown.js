import React from 'react';

export default function Dropdown({ dropdown, setId }) {
  return (
    <div className="dropdown">
      Select your {dropdown === 'food' && 'Main Item'}
      {dropdown === 'side' && 'Side'}
      {dropdown === 'drink' && 'Drink'}:
      <select onChange={(e) => setId(e.target.value)}>
        <option value="1">
          {dropdown === 'food' && 'Chicken Sandwich'}
          {dropdown === 'side' && 'Hash Browns'}
          {dropdown === 'drink' && 'Mountain Dew'}
        </option>
        <option value="2">
          {dropdown === 'food' && 'Sub Sandwich'}
          {dropdown === 'side' && 'French Fries'}
          {dropdown === 'drink' && 'Coffee'}
        </option>
        <option value="3">
          {dropdown === 'food' && 'Breakfast Burger'}
          {dropdown === 'side' && 'Apple Slices'}
          {dropdown === 'drink' && 'Orange Juice'}
        </option>
      </select>
    </div>
  );
}

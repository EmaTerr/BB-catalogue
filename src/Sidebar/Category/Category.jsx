import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import data from '../../db/data';

// Category component defined as a forwardRef to allow accessing its methods from parent components
const Category = forwardRef((props, ref) => {
  // State to manage selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Expose a method to clear selected categories using useImperativeHandle
  useImperativeHandle(ref, () => ({
    clearSelection() {
      setSelectedCategories([]);
    }
  }));

  // Extract unique category names from data
  const categories = [...new Set(data.map(item => item.category))];

  // Function to handle category selection
  const handleCategoryChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      // If category is already selected, remove it
      setSelectedCategories(selectedCategories.filter(category => category !== categoryName));
    } else {
      // If category is not selected, add it
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  // Function to check if a category is selected
  const isCategorySelected = (categoryName) => {
    return selectedCategories.includes(categoryName);
  };

  return (
    <div className="">
      {/* Heading for categories */}
      <h2 className="flex text-md font-semibold my-4 ml-5 border-t-2 text-gray-950">Categories</h2>
      {/* Render buttons for each category */}
      {categories.map((category, index) => (
        <div key={index} className=" flex flex-col">
          {/* Category button */}
          <button
            key={index}
            className={`inline-flex items-center gap-x-2 px-4 py-2 text-sm font-medium border-b-2 text-gray-950 
              ${index === 0 ? 'first:rounded-t-lg ' : ''} 
              ${index === categories.length - 1 ? 'last:rounded-b-lg ' : ''} 
              ${isCategorySelected(category) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  );
});

export default Category;

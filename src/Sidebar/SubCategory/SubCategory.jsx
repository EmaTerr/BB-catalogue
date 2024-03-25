import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import data from '../../db/data';

const SubCategory = forwardRef((props, ref) => {
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  useImperativeHandle(ref, () => ({
    clearSelection() {
      setSelectedSubCategories([]);
    }
  }));

  const subCategories = [...new Set(data.map(item => item.subCategory))];

  const handleSubCategoryChange = (subCategoryName) => {
    if (selectedSubCategories.includes(subCategoryName)) {
      setSelectedSubCategories(selectedSubCategories.filter(subCategory => subCategory !== subCategoryName));
    } else {
      setSelectedSubCategories([...selectedSubCategories, subCategoryName]);
    }
  };

  const isSubCategorySelected = (subCategoryName) => {
    return selectedSubCategories.includes(subCategoryName);
  };

  return (
    <div className="">
      <h2 className="flex text-md font-semibold my-4 ml-5 border-t-2 text-gray-950">Subcategories</h2>
      {subCategories.map((subCategory, index) => (
        <div key={index} className="flex flex-col">
          <button
            key={index}
            className={`inline-flex items-center gap-x-2 px-4 py-2 text-sm font-medium border-b-2 text-gray-950 
              ${index === 0 ? 'first:rounded-t-lg ' : ''} 
              ${index === subCategories.length - 1 ? 'last:rounded-b-lg ' : ''} 
              ${isSubCategorySelected(subCategory) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleSubCategoryChange(subCategory)}
          >
            {subCategory}
          </button>
        </div>
      ))}
    </div>
  );
});

export default SubCategory;

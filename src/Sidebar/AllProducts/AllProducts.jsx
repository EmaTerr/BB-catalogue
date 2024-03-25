// AllProducts.js
import React from 'react';

function AllProducts({ clearCategorySelection, clearSubCategorySelection, clearBrandSelection, clearSearchTerm }) {
  const handleClick = () => {
    clearCategorySelection();
    clearSubCategorySelection();
    clearBrandSelection();
  };

  return (
    <button onClick={handleClick} className="flex justify-center mx-10 mt-6 border-2 border-gray-700 rounded-md" type="button">
      All Products
    </button>
  );
}

export default AllProducts;

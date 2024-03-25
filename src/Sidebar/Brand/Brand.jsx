import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import data from '../../db/data';

const Brand = forwardRef((props, ref) => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  useImperativeHandle(ref, () => ({
    clearSelection() {
      setSelectedBrands([]);
    }
  }));

  const brands = [...new Set(data.map(item => item.brand))];

  const handleBrandChange = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter(brand => brand !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  const isBrandSelected = (brandName) => {
    return selectedBrands.includes(brandName);
  };

  return (
    <div className="">
      <h2 className="flex text-md font-semibold my-4 ml-5 border-t-2 text-gray-950">Brands</h2>
      {brands.map((brand, index) => (
        <div key={index} className="flex flex-col">
          <button
            key={index}
            className={`inline-flex items-center gap-x-2 px-4 py-2 text-sm font-medium border-b-2 text-gray-950 
              ${index === 0 ? 'first:rounded-t-lg ' : ''} 
              ${index === brands.length - 1 ? 'last:rounded-b-lg ' : ''} 
              ${isBrandSelected(brand) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleBrandChange(brand)}
          >
            {brand}
          </button>
        </div>
      ))}
    </div>
  );
});

export default Brand;

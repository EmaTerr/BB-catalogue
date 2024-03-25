// Card.js
import React, { useState } from 'react';
import foodData from '../db/data';
import { FaCartPlus } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import SearchBar from '../Sidebar/SearchBar/SearchBar';

function Card({ isOpen }) {
  const [quantities, setQuantities] = useState(foodData.map(() => 0));
  const [filteredData, setFilteredData] = useState(foodData); // Initialize with all data

  const increment = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decrement = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  return (
    <div>
      <SearchBar setFilteredData={setFilteredData} />
      <div className='grid sm:justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
        {filteredData.map((item, index) => (
          <div key={item.id} className='flex flex-col items-center py-4 px-2 border-2 border-gray-400 rounded-md'>
            <img src={item.img} alt={item.itemName} className='object-cover mb-2' />
            <h2 className='text-lg font-semibold mb-2'>{item.itemName}</h2>
            <p className='text-sm text-gray-500 mb-4'>{item.category}</p>
            <div className='flex items-center'>
              <button onClick={() => decrement(index)} className='px-3 py-1 border border-gray-600 rounded-l-md text-gray-900'>-</button>
              <span className='px-3 py-1 border-y border-gray-600 text-gray-900'>{quantities[index]}</span>
              <button onClick={() => increment(index)} className='px-3 py-1 border border-gray-600 rounded-r-md text-gray-900'>+</button>
            </div>
            <div className='flex flex-nowrap'>
              <button className='mt-2 px-10 py-1 border border-gray-600 text-white rounded-md'><FaCartPlus className='text-green-600'/></button>
              <button className='mt-2 px-1 py-1 border border-gray-600 text-white rounded-md'><IoHeart className='text-red-600'/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

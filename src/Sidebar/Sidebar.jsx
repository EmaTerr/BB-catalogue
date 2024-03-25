import React, { useState, useEffect, useRef } from 'react';
import { BsLayoutSidebarInsetReverse, BsLayoutSidebarInset } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import Category from './Category/Category';
import SubCategory from './SubCategory/SubCategory';
import Brand from './Brand/Brand';
import AllProducts from './AllProducts/AllProducts';


function Sidebar(handleClick) {
  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [isOpen, setIsOpen] = useState(true);
  const categoryRef = useRef();
  const subCategoryRef = useRef();
  const brandRef = useRef();

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const clearCategorySelection = () => {
    categoryRef.current.clearSelection();
  };

  const clearSubCategorySelection = () => {
    subCategoryRef.current.clearSelection();
  };

  const clearBrandSelection = () => {
    brandRef.current.clearSelection();
  };

  return (
    <div className="">
      <div className={`${isOpen ? 'w-65' : 'w-0'} mx-2 transition-all duration-300 overflow-hidden`}>
        <div className="rounded-lg flex flex-col overflow-y-auto z-0 shadow-gray-700 shadow-2xl">
          <button className={`static ${isOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 overflow-hidden top-0 z-10 bg-gray-200 rounded-md`} onClick={toggleSidebar}>
            {isOpen ? (
              <BsLayoutSidebarInset  className='absolute mt-6 rounded-r-md text-gray-600 w-6 h-6' />
            ) : (
              <BsLayoutSidebarInsetReverse className='absolute mt-6 rounded-r-md  text-gray-600 w-6 h-6' />
            )}
          </button>
          <AllProducts 
            clearCategorySelection={clearCategorySelection} 
            clearSubCategorySelection={clearSubCategorySelection} 
            clearBrandSelection={clearBrandSelection} 
          />
          <Category ref={categoryRef} setSelectedCategories={setSelectedCategories} />
          <SubCategory ref={subCategoryRef} />
          <Brand ref={brandRef} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

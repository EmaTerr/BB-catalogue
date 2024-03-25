import React, { useState } from 'react';
import Card from './components/Card';
// import Nav from './Navigation/Nav';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import data from './db/data';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // //Input FIlter
  // const [isOpen, setIsOpen] = useState(true);

  // const [query, setQuery] = useState 

  // const filteredDataItems = data.filter(data => 
  //   data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1));

  //   // Radio fiter
  // const handleChange = event => {
  //   setSelectedCategory(event.target.value)
  // }
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }


  function filteredData(data, selected) { //'query' is commented
    let filteredData = data

    //Filtering Input Items

    // if(query){
    //   filteredData = filteredDataItems
    // }

    //Selected Filter
    if (selected) {
      filteredData = filteredData.filter(
        ({ category, subCategory, brand }) =>
          category === selected ||
          subCategory === selected ||
          brand === selectedCategory);
    }
    return filteredData.map(({id, img, itemName, category }) => (
      <Card
        key={id}
        img={img}
        name={itemName}
        category={category}
      />
    ));

  }


  const result = filteredData(data, selectedCategory)//'query' to add in case of moving the search bar

  return (
    <>
      <div className='m-2 rounded-lg '>
        <Header></Header>
        <div className="flex">
          <Sidebar handleClick={handleClick}/>
          <div className="flex-grow">
          <Card/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

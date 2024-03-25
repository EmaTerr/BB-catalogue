import Nav from "../Navigation/Nav";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import logo from "../assets/react.svg";
import SearchBar from "../Sidebar/SearchBar/SearchBar";
import data from "../db/data";

function Header() {
  return (
    <>
      <div className="relative">
        {/* Image */}
        <img className="w-screen p-2 rounded-2xl sm:h-[350px] md:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[700px] object-cover object-bottom" src="https://images.pexels.com/photos/6169046/pexels-photo-6169046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        
        {/* Navigation */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex justify-between">
            {/* Left Section */}
            <div className="bg-white py-0 pr-6 pl-5 w-auto flex items-center border-r rounded-tr-2xl">
              <img src='' alt="logo" className=" font-semibold text-blue-500 mr-4 "/> 
              {/* {logo} */}
              
              
            </div>
            
            {/* Right Section */}
            
            <div className="bg-white flex h-12 w-24 justify-evenly items-center rounded-tl-2xl">
            {/* <input 
                type="text"
                className="search-input bg-blue-100 text-blue-700 py-2 mr-4 px-2 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Search for products..."
              /> */}
              <a href="#" className="text-blue-500">
                <AiOutlineShoppingCart className="nav-icons text-xl hover:text-blue-700 transition duration-300" />
              </a>
              <a href="#" className="text-blue-500">
                <AiOutlineUserAdd className="nav-icons text-xl hover:text-blue-700 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

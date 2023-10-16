import React, { useState } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import useSearchProduct from "../Hooks/useSearchProduct";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useSearchProduct(searchQuery);

  // const handleSearch = () => {

  // };

  return (
    <div className=" pt-3 md:flex md:justify-between  ">
      <div className="flex justify-center py-3  md:py-0">
        <h2 className="font-bold  text-3xl">
          <span className="text-pink-500 ">M</span>oBoo
          <span className="text-pink-500">M</span>
        </h2>
      </div>
      <div className=" flex justify-center  mt-1 ml-4">
        <input
          type="text"
          placeholder="What do you want to but today..."
          className="md:w-[32rem] border p-1 border-gray-400 rounded-lg mr-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <button className="bg-gray-400 text-white rounded-lg mx-1 px-2 "  onClick={handleSearch}>Search <BsSearch  className="inline pb-1 text-xl" /></button> */}
      </div>
      <div className="hidden md:flex mr-5 mt-1">
        <ul className="flex text-gray-400 ">
          <li className="mr-6  hover:text-black hover:font-bold">Store</li>
          <li className="mr-6  hover:text-black hover:font-bold">Account</li>
          <li className="mr-6  hover:text-black hover:font-bold">Wish List</li>
          <li className="  hover:text-black hover:font-bold">
            Basket <BsFillBasket2Fill className="inline pb-1 text-2xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

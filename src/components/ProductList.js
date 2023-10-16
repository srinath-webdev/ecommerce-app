import ProductCard from "./ProductCard";
import LoremIpsum from "./LoremIpsum";
import { useState } from "react";
import useProducts from "../Hooks/useProducts";


const ProductList = () => {
  const [selectCategory, setSelectCategory] = useState("Select Categories");
  const categories = [
    "Select Categories",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  
   useProducts();


  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectCategory(category);
  };

  return (
    <div>
      <LoremIpsum />
      <div>
        <select
          className="w-48 border border-gray-400 rounded-md"
          value={selectCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ProductCard selectCategory={selectCategory} />
    </div>
  );
};

export default ProductList;

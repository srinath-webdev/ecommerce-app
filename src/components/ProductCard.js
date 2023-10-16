import React from "react";
import { useSelector } from "react-redux";
import useSelectCategory from "../Hooks/useSelectCategory";
import Shimmer from "./Shimmer";

const ProductCard = ({ selectCategory }) => {
  useSelectCategory(selectCategory);
  const getProducts = useSelector((store) => store.products.allProducts);
  const filteredProducts = useSelector(
    (store) => store.products.allProducts
  );
  const searchedProducts = useSelector(
    (store) => store.products.allProducts
  );
  const newProducts =
    selectCategory === "Select Categories" ? getProducts : filteredProducts;

  // Determine the products to render
  const productsToRender =
    searchedProducts.length >= 1 ? searchedProducts  : newProducts ;


    if (newProducts?.length === 0 )  return <Shimmer /> 

    // if (searchedProducts.length === 0) return <h1>No product Found</h1>;

  return (
    <div className="flex flex-wrap justify-evenly my-4">
      {productsToRender.map((product) => (
        <div
          key={product.id}
          className="w-64 m-2 p-2 border border-gray-400 rounded-lg shadow-lg"
        >
          <img
            className="w-64 h-44 rounded-lg"
            alt={product.title}
            src={product.images[0]}
          />
          <ul>
            <li className="py-2 px-1">
              <h1 className="font-bold">{product.title}</h1>
            </li>
            <li className="py-2 px-1 text-xs">{product.brand}</li>
            <li className="py-2 px-1">${product.price}</li>
            <li className="py-2 px-1">{product.rating}⭐</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;



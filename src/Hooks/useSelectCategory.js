import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newCategory } from "../Utils/appSlice";

const useSelectCategory = (selectCategory) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    if (selectCategory !== "Select Categories") {
      // Fetch data from the API here and update filtered products in the state
      const data = await fetch(
        `https://dummyjson.com/products/category/${selectCategory}`
      );
      const json = await data.json();
      console.log(json.products)
      dispatch(newCategory(json.products));
    }
  };

  useEffect(() => {
    fetchData();
  },
   // eslint-disable-next-line
  [selectCategory]);
};

export default useSelectCategory;

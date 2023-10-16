import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../Utils/appSlice";

const useProducts = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    console.log(json.products);
    dispatch(setProducts(json.products));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
};

export default useProducts;

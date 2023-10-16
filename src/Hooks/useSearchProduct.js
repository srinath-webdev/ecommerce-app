import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterProduct } from "../Utils/appSlice";



const useSearchProduct = (searchQuery) => {
    const dispatch = useDispatch();

    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
      const json = await data.json();
      console.log(json.products);
      dispatch(filterProduct(json.products));
    };

    useEffect(() => {
      fetchData();
      },
       // eslint-disable-next-line
      [searchQuery]);
 

}

export default useSearchProduct
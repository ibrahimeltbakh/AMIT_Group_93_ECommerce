import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Components/cards/ProductCard";
import { v4 as uuidv4 } from "uuid";

export default function Products() {
  let [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     async function fetchProducts() {
  //       let res = await fetch("https://dummyjson.com/products");
  //       let data = await res.json();
  //       console.log(data.products);
  //       setProducts(data.products);
  //     }
  //     fetchProducts();
  //   }, []);
  useEffect(() => {
    async function fetchProducts() {
      try {
        let res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);
      } catch (error) {
        console.log("Error", error.message);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div className="d-flex gap-3 flex-wrap justify-content-center">
      {products.map((p) => (
        <ProductCard key={uuidv4()} product={p} />
      ))}
    </div>
  );
}

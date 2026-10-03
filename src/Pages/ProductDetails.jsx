import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../Components/cards/ProductCard";

export default function ProductDetails() {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  useEffect(() => {
    async function getProduct() {
      try {
        let res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    getProduct();
  }, [id]);
  return <ProductCard product={product} />;
}

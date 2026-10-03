import { useSelector } from "react-redux";
import CartProductCard from "../Components/cards/cartProductCard";
import { v4 as uuidv4 } from "uuid";
export default function Cart() {
  let cartProducts = useSelector((state) => state.cart);
  return (
    <div className="d-flex gap-3 flex-wrap justify-content-center">
      {cartProducts.map((p) => (
        <CartProductCard product={p} key={uuidv4()} />
      ))}
    </div>
  );
}

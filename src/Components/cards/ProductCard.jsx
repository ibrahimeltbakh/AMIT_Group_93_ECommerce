import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../RTK/Slices/cart";
export default function ProductCard({ product }) {
  let dispatch = useDispatch();
  return (
    <Link
      to={`/productDetails/${product.id}`}
      style={{ width: "300px" }}
      className="bg-white border border-success rounded-3 p-3 d-flex flex-column align-items-center justify-content-between gap-3  ">
      <div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <h2 className="text-success text-center">{product.title}</h2>
      <p className="text-secondary">{product.description}</p>
      <p className="text-primary">{product.price}$</p>
      <button
        className="btn btn-outline-success"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(addToCart(product));
        }}>
        Add To Cart
      </button>
    </Link>
  );
}

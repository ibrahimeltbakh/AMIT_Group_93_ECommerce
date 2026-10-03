export default function CartProductCard({ product }) {
  return (
    <div
      style={{ width: "300px" }}
      className="bg-white border border-success rounded-3 p-3 d-flex flex-column align-items-center justify-content-between gap-1  ">
      <div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <h2 className="text-success text-center">{product.title}</h2>
      <p className="text-primary">{product.price}$</p>
      <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
        <button className="btn btn-outline-success">+</button>
        <p className="text-warning fw-bold ">Quantity:{product.quantity}</p>
        <button className="btn btn-outline-danger">-</button>
      </div>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          //   dispatch(addToCart(product));
          console.log("removed");
        }}>
        Remove From Cart
      </button>
    </div>
  );
}

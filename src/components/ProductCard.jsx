import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="card p-3 text-center">
      <img
        src={item.image}
        alt={item.title}
        className="img-fluid mb-3"
        style={{ height: "180px", objectFit: "contain" }}
      />

      <h5 className="fw-bold" style={{ color: "var(--pink-dark)" }}>
        {item.title}
      </h5>

      <p className="fw-bold fs-5" style={{ color: "var(--pink-main)" }}>
        ${item.price}
      </p>

      <Link to={`/product/${item.id}`} className="btn btn-primary mt-2">
        Ver detalles
      </Link>
    </div>
  );
};

export default ProductCard;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(id).then(data => setItem(data));
  }, [id]);

  if (!item) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <div className="container mt-5">
      <div
        className="p-4"
        style={{
          background: "var(--pink-soft)",
          borderRadius: "20px",
        }}
      >
        
        <div
          className="row align-items-center shadow-lg"
          style={{
            borderRadius: "20px",
            background: "white",
            padding: "30px",
          }}
        >
          
          <div className="col-12 col-md-6 text-center">
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid"
              style={{
                maxHeight: "300px",
                objectFit: "contain",
              }}
            />
          </div>

         
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <h2 className="fw-bold" style={{ color: "var(--pink-dark)" }}>
              {item.title}
            </h2>

            <h3 className="fw-bold mt-3" style={{ color: "var(--pink-main)" }}>
              ${item.price}
            </h3>

            <p className="mt-3" style={{ color: "var(--text-dark)" }}>
              {item.description}
            </p>

            <p className="fw-bold text-capitalize">
              Categoría:{" "}
              <span style={{ color: "var(--pink-dark)" }}>{item.category}</span>
            </p>

            <div className="mt-4 d-flex gap-3">
              <Link to="/" className="btn btn-primary px-4">
                ← Volver
              </Link>

              <button className="btn btn-primary px-4">
                Añadir al carrito 💖
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

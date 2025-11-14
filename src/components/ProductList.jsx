import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import ProductCard from "./ProductCard";

const ProductList = ({ search, sortOption }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    getAllProducts().then((data) => setProducts(data));
  }, []);

 
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;

      case "price-desc":
        return b.price - a.price;

      case "name-asc":
        return a.title.localeCompare(b.title);

      case "name-desc":
        return b.title.localeCompare(a.title);

      default:
        return 0;
    }
  });

  return (
    <div className="row mt-4">
      {sortedProducts.map((item) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
          <ProductCard item={item} />
        </div>
      ))}

      {sortedProducts.length === 0 && (
        <p className="text-center mt-5">
          No se encontraron productos con esa búsqueda 🤍
        </p>
      )}
    </div>
  );
};

export default ProductList;

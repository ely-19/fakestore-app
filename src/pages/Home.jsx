import { useState } from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

const Home = () => {
  const [search, setSearch] = useState("");          
  const [sortOption, setSortOption] = useState("");  

  return (
    <div className="container mt-4">
      <Hero />

     
      <input
        type="text"
        placeholder="Buscar producto..."
        className="form-control mt-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

     
      <select
        className="form-control mt-3"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">Ordenar por...</option>
        <option value="price-asc">Precio (menor a mayor)</option>
        <option value="price-desc">Precio (mayor a menor)</option>
        <option value="name-asc">Nombre A-Z</option>
        <option value="name-desc">Nombre Z-A</option>
      </select>

      
      <ProductList search={search} sortOption={sortOption} />
    </div>
  );
};

export default Home;

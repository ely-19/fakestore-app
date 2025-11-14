const SortSelect = ({ sort, setSort }) => {
  return (
    <div className="mb-4">
      <select
        className="form-select"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Ordenar por...</option>
        <option value="price-asc">Precio: menor a mayor</option>
        <option value="price-desc">Precio: mayor a menor</option>
        <option value="alpha-asc">Nombre: A - Z</option>
        <option value="alpha-desc">Nombre: Z - A</option>
      </select>
    </div>
  );
};

export default SortSelect;

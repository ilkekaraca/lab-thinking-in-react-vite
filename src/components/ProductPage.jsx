// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState();

  const filterSearch = (ev) => {
    const search = ev.target.value.toLowerCase();
    setSearchTerm(search);
    const newProducts = jsonData.filter((one) => {
      return one.name.toLowerCase().includes(search);
    });
    setProducts(newProducts);
  };

  const checkStock = (ev) => {
    const checked = ev.target.checked;
    if (checked) {
      const stockControl = products.filter((one) => {
        return one.inStock;
      });
      setProducts(stockControl);
    } else {
      const newProducts = jsonData.filter((one) => {
        return one.name.toLowerCase().includes(searchTerm);
      });
      setProducts(newProducts);
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onSearch={filterSearch} onCheck={checkStock} />
      <ProductTable products={products} />
    </div>
  );
}
export default ProductsPage;

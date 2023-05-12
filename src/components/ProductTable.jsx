import React from "react";
import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {products.map((each) => {
          return <ProductRow product={each} />;
        })}
      </table>
    </div>
  );
}

import React from "react";

export default function ProductRow({ product }) {
  return (
    <tr>
      <td className={product.inStock === false ? "red" : ""}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

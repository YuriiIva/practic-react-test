import React from "react";
import { nanoid } from "nanoid";
import { AiOutlineBars } from "react-icons/ai";

const Products = ({ products }) => {
  console.log(`productsPro`, products);

  return (
    <ul>
      {products.length &&
        products.map(({ name, id }) => (
          <li key={id}>
            <h2>{name}</h2>
            <AiOutlineBars />
            {/* model.id = nanoid() */}
          </li>
        ))}
    </ul>
  );
};

export default Products;

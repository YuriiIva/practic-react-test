import React from "react";
import s from "./Products.module.css";

import { AiOutlineBars } from "react-icons/ai";

const Products = ({ products, handleBtnChange }) => {
  console.log(`productsPro`, products);

  return (
    <ul>
      {products.length &&
        products.map(({ name, id }) => (
          <li key={id} className={s.item}>
            <h2 className={s.title}>Product: {name}</h2>
            <AiOutlineBars onClick={() => handleBtnChange(id)} />
          </li>
        ))}
    </ul>
  );
};

export default Products;

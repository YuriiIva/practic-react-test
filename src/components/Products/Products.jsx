import React from "react";
import s from "./Products.module.css";

import { AiOutlineBars } from "react-icons/ai";

const Products = ({ products, handleBtnChange }) => {
  console.log(`productsPro`, products);

  return (
    <ul className={s.main}>
      {products.length &&
        products.map(({ name, id, count, weight, hight, width, comments }) => (
          <li key={id}>
            <div className={s.item}>
              <h2 className={s.title}>{name}</h2>
              <AiOutlineBars onClick={() => handleBtnChange(id)} />
            </div>
            <ul>
              <li>
                <p>count: {count}</p>
              </li>
              <li>
                <p>weight: {weight}</p>
              </li>
              <li>
                <p>hight: {hight}</p>
              </li>
              <li>
                <p>width: {width}</p>
              </li>
              <li>
                <p>comments: {comments}</p>
              </li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default Products;

import React from "react";
import s from "./Products.module.css";
import { useSelector } from "react-redux";

import { AiOutlineBars } from "react-icons/ai";

const Products = ({ handleBtnChange }) => {
  const allProducts = useSelector((state) => state.products.items);

  return (
    <ul className={s.main}>
      {allProducts.length &&
        allProducts.map(
          ({ name, id, count, weight, hight, width, comments }) => (
            <li key={id} className={s.maimItem}>
              <div className={s.item}>
                <h2 className={s.title}>{name}</h2>
                <AiOutlineBars
                  onClick={() => handleBtnChange(id)}
                  className={s.icon}
                />
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
          )
        )}
    </ul>
  );
};

export default Products;

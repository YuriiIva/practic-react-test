import s from "./Products.module.css";
import { useSelector } from "react-redux";

import { AiOutlineBars } from "react-icons/ai";

const Products = ({ handleBtnChange }) => {
  const allProducts = useSelector((state) => state.products.items);
  const filter = useSelector((state) => state.products.filter);

  const allPro = allProducts.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.main}>
      {!allPro.length && alert("No products")}
      {allProducts.length &&
        allPro.map(({ name, id, count, weight, hight, width, comments }) => (
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
        ))}
    </ul>
  );
};

export default Products;

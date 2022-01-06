import s from "./Filter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/products/productsAction";

const Filter = () => {
  const filter = useSelector((state) => state.products.filter);

  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <label htmlFor="" className={s.label}>
        Find product
        <input
          type="text"
          name="width"
          value={filter}
          placeholder="input name"
          required
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;

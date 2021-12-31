import s from "./Filter.module.css";
import { useState, useEffect } from "react";

const Filter = ({ onSerchProduct }) => {
  const [searchProd, setSearchProd] = useState("");

  const handleSearch = (e) => {
    setSearchProd(e.target.value);
  };
  useEffect(() => {
    onSerchProduct(searchProd);
  }, [onSerchProduct, searchProd]);

  return (
    <div className={s.filter}>
      <label htmlFor="" className={s.label}>
        Find product
        <input
          type="text"
          name="width"
          value={searchProd}
          placeholder="input name"
          required
          onChange={handleSearch}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;

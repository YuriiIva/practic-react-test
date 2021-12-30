import React from "react";
import s from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={s.filter}>
      <label htmlFor="" className={s.label}>
        Find product
        <input
          type="text"
          name="width"
          value=""
          placeholder="input name"
          required
          // onChange={handleChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;

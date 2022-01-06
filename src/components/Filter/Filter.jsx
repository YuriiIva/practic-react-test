import s from "./Filter.module.css";
import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, setProducts } from "../../redux/products/productsAction";

const Filter = () => {
  const filter = useSelector((state) => state.products.filter);
  const allProducts = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  // const filteredProducts = useMemo(
  //   () =>
  //     dispatch(
  //       setProducts(
  //         allProducts.filter((product) =>
  //           product.name.toLowerCase().includes(filter.toLowerCase())
  //         )
  //       )
  //     ),
  //   [allProducts, dispatch, filter]
  // );

  useEffect(() => {
    // if (!filter) return;

    dispatch(
      setProducts(
        allProducts.filter((product) =>
          product.name.toLowerCase().includes(filter.toLowerCase())
        )
      )
    );
  }, [dispatch, filter]);

  useEffect(() => {
    if (allProducts.length === 1) {
      dispatch(changeFilter(""));
    }
  }, [allProducts.length, dispatch]);

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

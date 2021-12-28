import { useState } from "react";
import ModalProduct from "../ModalProduct/ModalProduct";
import Filter from "components/Filter/Filter";
import Products from "components/Products/Products";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prevIsFormopen) => !prevIsFormopen);
  };

  return (
    <div>
      <button type="button" onClick={toggleForm}>
        Add Product
      </button>
      {isFormOpen && <ModalProduct onCloseForm={toggleForm} />}
      <Filter />
      <Products />
    </div>
  );
};

export default App;

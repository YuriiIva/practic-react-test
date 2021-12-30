import React from "react";
import s from "./ModalChange.module.css";

const ModalChange = ({ onDelete, onEdit }) => {
  return (
    <div className={s.item}>
      <button type="button" className={s.btn} onClick={onEdit}>
        Edit
      </button>
      <button type="button" className={s.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default ModalChange;

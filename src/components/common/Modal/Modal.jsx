import React from "react";

import s from "./Modal.module.css";
import { useState, useEffect } from "react";

const Modal = ({ onCloseForm, children }) => {
  useEffect(() => {
    const onEscPress = (e) => {
      if (e.code === "Escape") {
        onCloseForm();
      }
    };

    window.addEventListener("keydown", onEscPress);
    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  }, [onCloseForm]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseForm();
    }
  };

  return (
    <div>
      <div className={s.backdrop} onClick={handleBackdropClick}>
        <div className={s.modal}>
          <div>
            <header className={s.header}>
              <button
                type="button"
                className={s.closeBtn}
                onClick={onCloseForm}
                aria-label="Close"
              >
                &times;
              </button>
            </header>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

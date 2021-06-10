import React from "react";
import "./styles.css";

// customizable modal component - https://github.com/cyril-git-h/react-modal

function Modal(props) {
  let { modalActive, setModalActive } = props;

  return (
    <div
      className={modalActive ? "modal modal--active" : "modal"}
      onClick={() => setModalActive(!modalActive)}
    >
      <div
        className={
          modalActive
            ? "modal__content modal__content--active"
            : "modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {props.children(props)}
      </div>
    </div>
  );
}

export default Modal;

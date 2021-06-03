import React, { useEffect } from "react";
import "./styles.css";

// customizable modal component - https://github.com/cyril-git-h/react-modal

function Modal(props) {
  let {
    modalActive,
    setModalActive,
    background,
    scale = true,
    fade = true,
    closeOnClickOutside = true,
    zIndex,
    transition,
    modalFixed,
  } = props;

  useEffect(() => {
    if (modalActive && modalFixed) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalActive]);

  let { transitionProperty, propertyStart, propertyEnd, transitionTraits } =
    transition || {};

  let camalize = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  };

  let modalStyle = {
    backgroundColor: background,
    transition: !fade && "0s",
    zIndex,
  };
  let contentStyle = {
    transform: !scale && "scale(1)",
    transition: !modalActive
      ? `0.5s all`
      : `${transitionProperty} ${transitionTraits}`,
    [transitionProperty && camalize(transitionProperty)]: !modalActive ? propertyStart : propertyEnd,
  };

  return (
    <div
      className={modalActive ? "modal modal--active" : "modal"}
      style={modalStyle}
      onClick={() => closeOnClickOutside && setModalActive(!modalActive)}
    >
      <div
        className={
          modalActive
            ? "modal__content modal__content--active"
            : "modal__content"
        }
        style={contentStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children(props)}
      </div>
    </div>
  );
}

export default Modal;

// src/PopupCard.js
import React from "react";
import "./PopupCard.css";

const PopupCard = ({ content, position }) => {
  if (!position) return null;

  const style = {
    top: position.top,
    left: position.left,
    // transform: `translate(${position.transformX}, ${position.transformY})`,
  };

  return (
    <div className="popup-card" style={style}>
      <h1> hello </h1>
    </div>
  );
};

export default PopupCard;

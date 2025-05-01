import React from "react";

const Button = ({ colorName, bgColor, onClick, fontColor }) => {
  return (
    <button
      className="py-3 px-6 rounded-full text-white cursor-pointer"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: fontColor }}
    >
      {colorName}
    </button>
  );
};

export default Button;

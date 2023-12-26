import React, { Children } from "react";

const Button = ({ variant, children, ...rest }) => {
  const primary = {
    width: "100px",
    height: "35px",
    flexShrink: 0,
    borderRadius: "30px",
    background: "#000",
    color: "#fff",
  };

  const secondary = {
    width: "146px",
    height: "50px",
    flexShrink: 0,
    borderRadius: "30px",
    background: "#000",
    border: "1px solid #000",
    hover: {
      background: "#fff",
      color: "#000",
    },
  };

  return (
    <button style={primary} {...rest}>
      {children}
    </button>
  );
};

export default Button;

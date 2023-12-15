import React, { Children } from "react";

const Button = ({ variant, children }) => {
  const primary = {
    width: "146px",
    height: "50px",
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

  return <button style={primary}>{children}</button>;
};

export default Button;

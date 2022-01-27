import React from "react";

function Title({ text, colored }) {
  return (
    <p
      style={{
        fontSize: "14px",
        color: colored ? "#D87D4A" : "#8C8C8C",
        lineHeight: "19px",
        textTransform: "uppercase",
        letterSpacing: "10px",
      }}
    >
      {text}
    </p>
  );
}

export default Title;

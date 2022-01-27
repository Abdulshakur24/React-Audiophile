import React from "react";

function SubTitle({ text, colored }) {
  return (
    <p
      style={{
        fontSize: "13px",
        fontWeight: "bold",
        lineHeight: "25px",
        letterSpacing: "0.928571px",
        textTransform: "uppercase",
        color: colored ? "#D87D4A" : "#8C8C8C",
      }}
    >
      {text}
    </p>
  );
}
// font-size: 13px;
// line-height: 25px;
// /* identical to box height, or 192% */

// letter-spacing: 0.928571px;
// text-transform: uppercase;
export default SubTitle;

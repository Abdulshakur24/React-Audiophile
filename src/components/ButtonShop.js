import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ReactComponent as ShopSign } from "../assets/ShopSign.svg";

function ButtonShop({ text, className }) {
  return (
    <ButtonLayout className={`${className || ""}`}>
      <Button>
        {text}
        <ShopSign style={{ marginLeft: "13px" }} />
      </Button>
    </ButtonLayout>
  );
}

const ButtonLayout = styled.div`
  .MuiButton-root {
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgb(125, 125, 125);
    mix-blend-mode: normal;

    &:hover {
      opacity: 1;
      color: var(--text-tertiary);
    }
  }
`;

export default ButtonShop;

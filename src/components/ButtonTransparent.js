import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

function ButtonTransparent({ text, className }) {
  return (
    <ButtonLayout className={`${className || ""}`}>
      <Button>{text}</Button>
    </ButtonLayout>
  );
}

const ButtonLayout = styled.div`
  .MuiButton-root {
    color: var(--text-primary);
    background-color: transparent;
    border: 1px solid var(--background-black);

    &:hover {
      color: var(--text-secondary);
      background-color: var(--background-black);
    }
  }
`;

export default ButtonTransparent;

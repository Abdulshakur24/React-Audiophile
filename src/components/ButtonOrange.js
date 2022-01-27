import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

function ButtonOrange({ text, className }) {
  return (
    <ButtonLayout className={`${className || ""}`}>
      <Button>{text}</Button>
    </ButtonLayout>
  );
}

const ButtonLayout = styled.div`
  .MuiButton-root {
    color: var(--text-secondary);
    background-color: var(--background-orange);

    &:hover {
      background-color: var(--background-whiteorange) !important;
    }
  }
`;

export default ButtonOrange;

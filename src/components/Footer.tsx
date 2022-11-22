import React, { useState } from "react";
import styled from "styled-components";
import { useMode } from "../context";
import { Button } from "../styles/SharedComponents";

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer: React.FC = () => {
  const { mode, handleClick } = useMode();

  return (
    <Container>
      <Button
        onClick={handleClick}
        title={`Switch to ${mode === "Normal" ? "Advanced" : "Normal"} Mode`}
      >
        {mode === "Normal" ? "Advanced" : "Normal"} Mode
      </Button>
      <Button>Rules</Button>
    </Container>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";
import { useMode, useResult } from "../context";
import { Button } from "../styles/SharedComponents";

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer: React.FC = () => {
  const { mode, handleClick } = useMode();
  const { loading } = useResult();

  return (
    <Container>
      <Button
        onClick={handleClick}
        title={`Switch to ${mode === "Normal" ? "Advanced" : "Normal"} Mode`}
        disabled={loading}
      >
        {mode === "Normal" ? "Advanced" : "Normal"} Mode
      </Button>
      <Button disabled={loading}>Rules</Button>
    </Container>
  );
};

export default Footer;

import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/SharedComponents";

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer: React.FC = () => {
  const [advancedMode, setAdvancedMode] = useState<boolean>(false);

  const handleClick = () => {
    setAdvancedMode((prev) => !prev);
  };

  return (
    <Container>
      <Button
        onClick={handleClick}
        title={`Switch to ${advancedMode ? "Advanced" : "Normal"} Mode`}
      >
        {!advancedMode ? "Advanced" : "Normal"} Mode
      </Button>
      <Button>Rules</Button>
    </Container>
  );
};

export default Footer;

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useMode, useSelected } from "../context";
import { NormalMode, AdvancedMode, Result } from ".";

const Container = styled(motion.main)`
  position: relative;
  flex: 1;
  width: 100%;
  place-items: center;
  display: grid;
  margin: 0 auto;
  justify-content: center;
  
  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: calc(var(--tablet) / 2.5);
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: fit-content;
  }
`;

const Image = styled.img`
  width: calc(var(--mobile) / 1.5);
  height: fit-content;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: calc(var(--tablet) / 2.5);
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: fit-content;
  }
`;

const Main: React.FC = () => {
  const { mode } = useMode();
  const { selected } = useSelected();

  return (
    <Container>
      {!selected && (
        <>
          <Image
            src={`/assets/${mode === "Normal" ? "bg-triangle" : "bg-pentagon"}.svg`}
            alt="Main background"
          />
          {mode === "Normal" && <NormalMode />}
          {mode === "Advanced" && <AdvancedMode />}
        </>
      )}

      {selected !== null && <Result />}
    </Container>
  );
};

export default Main;

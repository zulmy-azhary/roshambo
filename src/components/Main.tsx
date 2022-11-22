import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useMode } from "../context";
import { NormalMode, AdvancedMode } from ".";

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
  return (
    <Container>
      <Image
        src={`/assets/${mode === "Normal" ? "bg-triangle" : "bg-pentagon"}.svg`}
        alt="Main background"
      />
      {mode === "Normal" ? <NormalMode /> : <AdvancedMode />}
    </Container>
  );
};

export default Main;

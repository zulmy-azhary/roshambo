import React from "react";
import styled from "styled-components";
import { IconButton } from ".";

const NormalGrid = styled.div`
  position: absolute;
  width: calc(var(--mobile));
  height: 35vh;
  display: grid;
  place-items: center;
  margin: 0 auto;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-areas:
    "Paper Scissors"
    "Rock Rock";

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: calc(var(--tablet) / 1.25);
    height: 50vh;
  }
  
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 2);
    height: 100%;
  }
`;

const NormalMode: React.FC = () => {
  return (
    <NormalGrid>
      <IconButton mode="Normal" variant="Paper" />
      <IconButton mode="Normal" variant="Scissors" />
      <IconButton mode="Normal" variant="Rock" />
    </NormalGrid>
  );
};

export default NormalMode;

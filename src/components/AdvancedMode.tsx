import React from "react";
import styled from "styled-components";
import { IconButton } from ".";

const AdvancedGrid = styled.div`
  position: absolute;
  width: 100%;
  max-width: var(--mobile);
  min-height: 20rem;
  display: grid;
  place-items: center;
  margin: 0 auto;
  grid-column-gap: 2.5rem;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  grid-template-areas:
    "Scissors Scissors"
    "Spock Paper"
    "Lizard Rock";

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: calc(var(--tablet) / 1.5);
    max-width: calc(var(--tablet) / 1.5);
    height: 50vh;
  }
  
  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: calc(var(--desktop) / 2);
    max-width: calc(var(--desktop) / 2);
    height: 100%;
  }
`;

const AdvancedMode: React.FC = () => {
  return (
    <AdvancedGrid>
      <IconButton mode="Advanced" variant="Scissors" placeSelf="end center" />
      <IconButton mode="Advanced" variant="Spock" placeSelf="start center" />
      <IconButton mode="Advanced" variant="Paper" placeSelf="start center" />
      <IconButton mode="Advanced" variant="Lizard" placeSelf="start end" />
      <IconButton mode="Advanced" variant="Rock" placeSelf="start" />
    </AdvancedGrid>
  );
};

export default AdvancedMode;

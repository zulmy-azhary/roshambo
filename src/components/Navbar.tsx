import React from "react";
import styled from "styled-components";
import { useMode } from "../context";

const Header = styled.header`
  width: 100%;
  @media (min-width: ${(props) => props.theme.media.tablet}) {
    max-width: calc(var(--tablet) / 1.25);
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    max-width: calc(var(--desktop) / 2);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid var(--header);
  border-radius: 1rem;
  padding: 1rem 1.25rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    padding: 1.25rem 2rem;
  }
`;

const Image = styled.img`
  width: 80px;
  height: fit-content;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: 100px;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: fit-content;
  }
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    padding: 1rem 3rem;
  }
`;

const ScoreText = styled.p`
  color: var(--score);
  letter-spacing: 0.1rem;
  font-size: 0.75rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    font-size: 1rem;
  }
`;

const ScoreNumber = styled.p`
  color: var(--dark);
  font-weight: 700;
  font-size: 2.75rem;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    font-size: 3rem;
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    font-size: 4rem;
  }
`;

const Navbar: React.FC = () => {
  const { mode } = useMode();
  return (
    <Header>
      <Nav>
        <Image src={`/assets/${mode === "Normal" ? "logo" : "logo-bonus"}.svg`} alt="Logo" />
        <Score>
          <ScoreText>Score</ScoreText>
          <ScoreNumber>11</ScoreNumber>
        </Score>
      </Nav>
    </Header>
  );
};

export default Navbar;

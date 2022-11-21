import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  max-width: calc(var(--desktop) / 2);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid var(--header);
  border-radius: 1rem;
  padding: 1.25rem 2rem;
`;

const Text = styled.li`
  color: white;
  font-size: 1.75rem;
  line-height: 0.825;
  user-select: none;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100%;
  padding: 1rem 3rem;
  border-radius: 10px;
`;

const ScoreText = styled.p`
  color: var(--score);
  letter-spacing: 0.1rem;
`;

const ScoreNumber = styled.p`
  color: var(--dark);
  font-size: 4rem;
  font-weight: 700;
`;

const Navbar: React.FC = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <Text>Rock</Text>
          <Text>Paper</Text>
          <Text>Scissors</Text>
          <Text>Lizard</Text>
          <Text>Spock</Text>
        </ul>
        <Score>
          <ScoreText>Score</ScoreText>
          <ScoreNumber>11</ScoreNumber>
        </Score>
      </Nav>
    </Header>
  );
};

export default Navbar;

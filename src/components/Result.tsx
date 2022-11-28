import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useMode, useResult, useSelected } from "../context";
import { gameLogic } from "../helper/gameLogic";
import { randomInt } from "../helper/randomInt";
import type { ButtonVariants } from "../types";
import { ButtonIcon, Button } from "../styles/SharedComponents";
import { motion } from "framer-motion";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 3rem 1rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    grid-gap: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Player = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  row-gap: 2rem;
  height: 100%;

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    flex-direction: column;
    row-gap: 5rem;
  }
`;

const Text = styled.h2`
  color: white;
  font-size: 0.875rem;
  letter-spacing: 2px;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    font-size: 1.5rem;
  }
`;

const ButtonPlayer = styled(ButtonIcon)<{ variant: ButtonVariants; isWinner: boolean }>`
  background-image: var(--${(props) => props.variant.toLowerCase()});
  position: relative;
  width: 120px;
  height: 120px;
  transition: none;

  ${(props) =>
    !!props.isWinner &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.03), 0 0 0 40px rgba(255, 255, 255, 0.025),
          0 0 0 70px rgba(255, 255, 255, 0.02);

        z-index: -1;
      }
    `}

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: 256px;
    height: 256px;
    ${(props) =>
      !!props.isWinner &&
      css`
        &::after {
          box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.03), 0 0 0 120px rgba(255, 255, 255, 0.025),
          0 0 0 200px rgba(255, 255, 255, 0.02);
        `}
    }
  }
`;

const Image = styled.img`
  width: 35%;
  height: 35%;
`;

const ButtonPlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15);

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: 256px;
    height: 256px;
  }
`;

const PlayAgain = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
  order: 3;
  grid-column: span 2 / span 2;

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    grid-column: span 1 / span 1;
    order: 0;
  }
`;

const ResultText = styled.h1`
  font-size: 3rem;
  color: white;
`;

const ButtonPlayAgain = styled(Button)`
  padding: 0.75rem 3rem;
  border: none;
  background: white;
  color: var(--dark);
  font-family: "Barlow Semi Condensed";

  &:hover {
    background: white;
    color: red;
  }
`;

const selection: ButtonVariants[] = ["Scissors", "Paper", "Rock", "Spock", "Lizard"];

const Result: React.FC = () => {
  const [house, setHouse] = useState<ButtonVariants | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const { selected, setSelected } = useSelected();
  const { mode } = useMode();
  const { result, setResult, setLoading } = useResult();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const houseSelection = selection[randomInt(mode === "Normal" ? 3 : 5)];
      setHouse(houseSelection);
      const finalResult = gameLogic(selected as ButtonVariants, houseSelection);

      setResult(finalResult);
      setShow(true);
      setLoading(false);
    }, 1500);

    return () => {
      setShow(false);
      setResult("Draw");
    };
  }, []);

  return (
    <Container>
      <Player>
        <Text>You Picked</Text>
        <ButtonPlayer
          isWinner={result === "Win"}
          variant={selected as ButtonVariants}
          initial={{ y: 20 }}
          animate={{ y: 0, transition: { repeat: 3 } }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={`/assets/icon-${selected?.toLowerCase()}.svg`}
            alt={`The ${selected} Result Button`}
          />
        </ButtonPlayer>
      </Player>
      <PlayAgain>
        {show && (
          <>
            <ResultText>You {result}</ResultText>
            <ButtonPlayAgain onClick={() => setSelected(null)}>Play Again</ButtonPlayAgain>
          </>
        )}
      </PlayAgain>
      <Player>
        <Text>The House picked</Text>
        {house ? (
          <ButtonPlayer isWinner={result === "Lose"} variant={house as ButtonVariants}>
            <Image
              src={`/assets/icon-${house.toLowerCase()}.svg`}
              alt={`The ${house} Result Button`}
            />
          </ButtonPlayer>
        ) : (
          <ButtonPlaceholder
            as={motion.div}
            initial={{ y: 20 }}
            animate={{ y: 0, transition: { repeat: 3 } }}
            transition={{ duration: 0.5 }}
          />
        )}
      </Player>
    </Container>
  );
};

export default Result;

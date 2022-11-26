import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid hsl(232deg 38% 80%);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: var(--dark);
  }

  &:disabled {
    border-color: hsl(232deg 30% 30%);
    color: hsl(255 100% 100% / 0.3);
    cursor: default;

    &:hover {
      background: transparent;
    }
  }

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    padding: 0.7rem 2.25rem;
    font-size: 1rem;
    border-radius: 8px;
  }
`;

export const ButtonIcon = styled(motion.button)`
  border: none;
  border-radius: 50%;
  position: relative;
  background: white;
  visibility: visible !important;
  cursor: pointer;
  box-shadow: inset 0px -8px rgba(0, 0, 0, 0.25);
  z-index: 2;
  transition: 0.2s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    width: 75%;
    height: 75%;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 0px 8px rgba(0, 0, 0, 0.125);
    z-index: -1;
  }
`;

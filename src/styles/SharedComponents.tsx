import styled from "styled-components";
import type { Mode } from "../types";

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
  
  @media (min-width: ${props => props.theme.media.tablet}) {
    padding: 0.7rem 2.25rem;
    font-size: 1rem;
    border-radius: 8px;
  }

  @media (min-width: ${props => props.theme.media.desktop}) {
  }
`;

export const ButtonIcon = styled.button<{ mode: Mode }>`
  width: ${(props) => (props.mode === "Normal" ? "100px" : "80px")};
  height: ${(props) => (props.mode === "Normal" ? "100px" : "80px")};
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

  &:hover {
    transform: scale(1.15);
  }

  @media (min-width: ${props => props.theme.media.tablet}) {
    width: ${(props) => (props.mode === "Normal" ? "150px" : "100px")};
    height: ${(props) => (props.mode === "Normal" ? "150px" : "100px")};
  }

  @media (min-width: ${props => props.theme.media.desktop}) {
    width: ${(props) => (props.mode === "Normal" ? "200px" : "150px")};
    height: ${(props) => (props.mode === "Normal" ? "200px" : "150px")};
  }
`;

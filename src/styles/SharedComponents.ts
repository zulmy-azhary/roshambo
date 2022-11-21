import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 8px;
  border: 2px solid hsl(232deg 38% 80%);
  color: white;
  padding: 0.7rem 2.25rem;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  outline: none;

  &:hover {
    background-color: var(--dark);
  }
`;

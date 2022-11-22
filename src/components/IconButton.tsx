import React from "react";
import styled from "styled-components";
import { ButtonIcon } from "../styles/SharedComponents";
import type { ButtonVariants, Mode } from "../types";

const Button = styled(ButtonIcon)<{ variant: ButtonVariants; placeSelf?: string }>`
  grid-area: ${(props) => props.variant};
  place-self: ${(props) => props.placeSelf ?? "center"};
  background-image: var(--${(props) => props.variant.toLowerCase()});
`;

const Image = styled.img`
  width: 35%;
  height: 35%;
`;

interface Props {
  variant: ButtonVariants;
  mode: Mode;
  placeSelf?: string;
}

const IconButton: React.FC<Props> = ({ variant, mode, placeSelf }) => {
  return (
    <Button variant={variant} mode={mode} placeSelf={placeSelf}>
      <Image src={`/assets/icon-${variant.toLowerCase()}.svg`} alt={`${variant} Button`} />
    </Button>
  );
};

export default IconButton;

import React from "react";
import styled from "styled-components";
import { useSelected } from "../context";
import { ButtonIcon } from "../styles/SharedComponents";
import type { ButtonVariants, Mode } from "../types";

const Button = styled(ButtonIcon)<{ variant: ButtonVariants; placeSelf?: string; mode: Mode }>`
  grid-area: ${(props) => props.variant};
  place-self: ${(props) => props.placeSelf ?? "center"};
  background-image: var(--${(props) => props.variant.toLowerCase()});
  width: ${(props) => (props.mode === "Normal" ? "100px" : "80px")};
  height: ${(props) => (props.mode === "Normal" ? "100px" : "80px")};

  &:hover {
    transform: scale(1.15);
  }

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: ${(props) => (props.mode === "Normal" ? "150px" : "100px")};
    height: ${(props) => (props.mode === "Normal" ? "150px" : "100px")};
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: ${(props) => (props.mode === "Normal" ? "200px" : "150px")};
    height: ${(props) => (props.mode === "Normal" ? "200px" : "150px")};
  }
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
  const { setSelected } = useSelected();
  return (
    <Button
      onClick={() => setSelected(variant)}
      variant={variant}
      mode={mode}
      placeSelf={placeSelf}
    >
      <Image src={`/assets/icon-${variant.toLowerCase()}.svg`} alt={`${variant} Button`} />
    </Button>
  );
};

export default IconButton;

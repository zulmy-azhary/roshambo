import React from "react";
import styled from "styled-components";
import { useSelected } from "../context";
import { ButtonIcon } from "../styles/SharedComponents";
import type { ButtonVariants, Mode } from "../types";

type ButtonType = {
  variant: ButtonVariants;
  placeSelf?: string;
  difficult: Mode;
};

const Button = styled(ButtonIcon)<ButtonType>`
  grid-area: ${({ variant }) => variant};
  place-self: ${({ placeSelf }) => placeSelf ?? "center"};
  background-image: var(--${({ variant }) => variant.toLowerCase()});
  width: ${({ difficult }) => (difficult === "Normal" ? "100px" : "80px")};
  height: ${({ difficult }) => (difficult === "Normal" ? "100px" : "80px")};

  &:hover {
    transform: scale(1.15);
  }

  @media (min-width: ${(props) => props.theme.media.tablet}) {
    width: ${({ difficult }) => (difficult === "Normal" ? "150px" : "100px")};
    height: ${({ difficult }) => (difficult === "Normal" ? "150px" : "100px")};
  }

  @media (min-width: ${(props) => props.theme.media.desktop}) {
    width: ${({ difficult }) => (difficult === "Normal" ? "200px" : "150px")};
    height: ${({ difficult }) => (difficult === "Normal" ? "200px" : "150px")};
  }
`;

const Image = styled.img`
  width: 35%;
  height: 35%;
`;

interface Props {
  variant: ButtonVariants;
  difficult: Mode;
  placeSelf?: string;
}

const IconButton: React.FC<Props> = ({ variant, difficult, placeSelf }) => {
  const { setSelected } = useSelected();
  return (
    <Button
      onClick={() => setSelected(variant)}
      variant={variant}
      difficult={difficult}
      placeSelf={placeSelf}
    >
      <Image src={`/assets/icon-${variant.toLowerCase()}.svg`} alt={`${variant} Button`} />
    </Button>
  );
};

export default IconButton;

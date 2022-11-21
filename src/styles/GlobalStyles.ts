import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    /* Background */
    --background: ${(props) => props.theme.colors.background};

    /* Primary */
    --scissors: ${(props) => props.theme.colors.primary.scissors};
    --paper: ${(props) => props.theme.colors.primary.paper};
    --rock: ${(props) => props.theme.colors.primary.rock};
    --lizard: ${(props) => props.theme.colors.primary.lizard};
    --cyan: ${(props) => props.theme.colors.primary.cyan};

    /* Neutral */
    --dark: ${(props) => props.theme.colors.neutral.dark};
    --score: ${(props) => props.theme.colors.neutral.score};
    --header: ${(props) => props.theme.colors.neutral.header};

    /* Breakpoints */
    --mobile: ${(props) => props.theme.media.mobile};
    --tablet: ${(props) => props.theme.media.tablet};
    --desktop: ${(props) => props.theme.media.desktop};
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
    background: var(--background);
  }
`;

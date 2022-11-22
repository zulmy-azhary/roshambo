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
    --spock: ${(props) => props.theme.colors.primary.spock};

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

  h1, h2, h3, h4, h5, h6, p, button, li {
    text-transform: uppercase;
  }

  li {
    list-style-type: none;
  }
`;

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme { 
    colors: {
      primary: {
        scissors: string;
        paper: string;
        rock: string;
        lizard: string;
        cyan: string;
      };
      neutral: {
        dark: string;
        score: string;
        header: string;
      };
      background: string
    };
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    }
  }
}
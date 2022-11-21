import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: {
      scissors: "gradient(hsl(39, 89%, 49%) to hsl(40, 84%, 53%))",
      paper: "gradient(hsl(230, 89%, 62%) to hsl(230, 89%, 65%))",
      rock: "gradient(hsl(349, 71%, 52%) to hsl(349, 70%, 56%))",
      lizard: "gradient(hsl(261, 73%, 60%) to hsl(261, 72%, 63%))",
      cyan: "gradient(hsl(189, 59%, 53%) to hsl(189, 58%, 57%))",
    },
    neutral: {
      dark: "hsl(229, 25%, 31%)",
      score: "hsl(229, 64%, 46%)",
      header: "hsl(217, 16%, 45%)",
    },
    background: "radial-gradient(circle at top center, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
  },
  media: {
    mobile: "375px",
    tablet: "768px",
    desktop: "1366px",
  }
}
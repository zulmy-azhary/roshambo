import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: {
      scissors: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
      paper: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
      rock: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
      lizard: "linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
      spock: "linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
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
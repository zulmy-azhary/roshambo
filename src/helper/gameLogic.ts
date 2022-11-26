import type { ButtonVariants, ResultType } from "../types";

export const gameLogic = (player: ButtonVariants, house: ButtonVariants): ResultType => {
  // If the choice of player and opponent are the same, then return "draw"
  if (player === house) {
    return "Draw";
  }

  // If player choose rock, and the opponent are choosing between paper or spock, then return "Lose"
  if (player === "Rock" && (house === "Paper" || house === "Spock")) {
    return "Lose";
  }

  // If player choose paper, and the opponent are choosing between scissors or lizard, then return "Lose"
  if (player === "Paper" && (house === "Scissors" || house === "Lizard")) {
    return "Lose";
  }

  // If player choose scissors, and the opponent are choosing between rock or spock, then return "Lose"
  if (player === "Scissors" && (house === "Rock" || house === "Spock")) {
    return "Lose";
  }

  // If player choose spock, and the opponent are choosing between paper or lizard, then return "Lose"
  if (player === "Spock" && (house === "Paper" || house === "Lizard")) {
    return "Lose";
  }

  // If player choose lizard, and the opponent are choosing between rock or scissors, then return "Lose"
  if (player === "Lizard" && (house === "Rock" || house === "Scissors")) {
    return "Lose";
  }

  return "Win";
};

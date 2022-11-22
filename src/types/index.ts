import React from "react";

export type Mode = "Normal" | "Advanced";
export type ButtonVariants = "Rock" | "Scissors" | "Paper" | "Spock" | "Lizard";
export type Dispatcher<T> = React.Dispatch<React.SetStateAction<T>>;

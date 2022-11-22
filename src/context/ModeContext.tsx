import React, { createContext, useContext, useState } from "react";
import type { Dispatcher, Mode } from "../types";

interface ModeCtx {
  mode: Mode;
  setMode: Dispatcher<Mode>;
  handleClick: () => void;
}

const ModeContext = createContext<ModeCtx>({
  mode: "Normal",
  setMode: () => {},
  handleClick: () => {},
});

export const useMode = (): ModeCtx => useContext(ModeContext);

const ModeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<Mode>("Normal");

  const handleClick = () => {
    setMode((prev) => (prev === "Normal" ? "Advanced" : "Normal"));
  };
  return (
    <ModeContext.Provider value={{ mode, setMode, handleClick }}>{children}</ModeContext.Provider>
  );
};

export default ModeProvider;

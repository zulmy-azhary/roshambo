import React, { createContext, useContext, useEffect, useState } from "react";
import { Dispatcher, ButtonVariants } from "../types";
import { useMode } from ".";

type Selected = ButtonVariants | null;

interface SelectedCtx {
  selected: Selected;
  setSelected: Dispatcher<Selected>;
}

const SelectedContext = createContext<SelectedCtx>({
  selected: null,
  setSelected: () => {},
});

export const useSelected = (): SelectedCtx => useContext(SelectedContext);

const SelectedProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [selected, setSelected] = useState<Selected>(null);
  const { mode } = useMode();

  useEffect(() => {
    setSelected(null);
  }, [mode]);

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectedProvider;

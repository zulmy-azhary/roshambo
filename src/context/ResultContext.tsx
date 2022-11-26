import React, { createContext, useContext, useEffect, useState } from "react";
import type { Dispatcher, ResultType } from "../types";

interface ScoreCtx {
  score: number;
  setScore: Dispatcher<number>;
}

interface ResultCtx {
  result: ResultType;
  setResult: Dispatcher<ResultType>;
  loading: boolean;
  setLoading: Dispatcher<boolean>;
}

const ScoreContext = createContext<ScoreCtx>({
  score: 0,
  setScore: () => {},
});

const ResultContext = createContext<ResultCtx>({
  result: "Draw",
  setResult: () => {},
  loading: false,
  setLoading: () => {},
});

export const useScore = (): ScoreCtx => useContext(ScoreContext);
export const useResult = (): ResultCtx => useContext(ResultContext);

const ResultProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<ResultType>("Draw");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (result === "Win") {
      setScore((prev) => {
        const value = prev + 1;
        localStorage.setItem("Score", JSON.stringify(value));

        return value;
      });
    }

    if (result === "Lose") {
      setScore((prev) => {
        const value = prev > 0 ? prev - 1 : 0;
        localStorage.setItem("Score", JSON.stringify(value));

        return value;
      });
    }
  }, [result]);

  useEffect(() => {
    const local = localStorage.getItem("Score");
    if (local) {
      setScore(JSON.parse(local));
    }
  }, []);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <ResultContext.Provider value={{ result, setResult, loading, setLoading }}>
        {children}
      </ResultContext.Provider>
    </ScoreContext.Provider>
  );
};

export default ResultProvider;

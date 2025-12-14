import { IMedalResult } from "./IMedalResult";

export interface IDisplayScore {
  score: { username: string; score: number };
  result: IMedalResult;
  handleQuitBtn: () => void;
  handleRetry: () => void;
  handleShowHighScores: () => void;
}

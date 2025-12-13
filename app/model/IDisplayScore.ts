import { MedalResult } from "./MedalResult";

export interface IDisplayScore {
    score: {username: string, score: number};
    result: MedalResult;
    handleQuitBtn: () => void;
    handleRetry: () => void;
    handleShowHighScores: () => void;
}
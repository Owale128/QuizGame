import { RankStyle } from "./RankStyle";

export interface IDisplayHighScores {
    highScores: {username: string, score: number}[];
    handleBackBtn: () => void;
    getRankStyle: (index: number) => RankStyle;
}
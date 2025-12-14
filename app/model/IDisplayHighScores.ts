import { IRankStyle } from "./IRankStyle";

export interface IDisplayHighScores {
  highScores: { username: string; score: number }[];
  handleBackBtn: () => void;
  getRankStyle: (index: number) => IRankStyle;
}

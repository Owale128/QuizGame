import { IMedalResult } from "../model/IMedalResult";
import { IRankStyle } from "../model/IRankStyle";

export const getTimerStyle = (timer: number): string => {
  if (timer <= 5) {
    return "text-red-400 animate-pulse";
  } else if (timer <= 10) {
    return "text-orange-400";
  } else {
    return "text-cyan-400";
  }
};

export const getMedalAndMessage = (points: number): IMedalResult => {
  if (points >= 9) {
    return {
      color: "text-yellow-400",
      message: "LEGENDARY!",
      bgGradient: "from-yellow-400/20 to-orange-500/20",
    };
  } else if (points >= 7) {
    return {
      color: "text-emerald-400",
      message: "EXCELLENT!",
      bgGradient: "from-emerald-400/20 to-cyan-500/20",
    };
  } else if (points >= 5) {
    return {
      color: "text-blue-400",
      message: "GOOD JOB!",
      bgGradient: "from-blue-400/20 to-purple-500/20",
    };
  } else if (points >= 3) {
    return {
      color: "text-orange-400",
      message: "NOT BAD!",
      bgGradient: "from-orange-400/20 to-red-500/20",
    };
  } else {
    return {
      color: "text-gray-400",
      message: "KEEP TRYING!",
      bgGradient: "from-gray-400/20 to-slate-500/20",
    };
  }
};

export const getRankStyle = (index: number): IRankStyle => {
  switch (index) {
    case 0:
      return {
        medal: "🏆",
        bgGradient: "from-yellow-500/30 to-orange-500/30",
        textColor: "text-yellow-400",
        borderColor: "border-yellow-500/50",
        glow: "shadow-[0_0_20px_rgba(234,179,8,0.4)]",
      };
    case 1:
      return {
        medal: "🥈",
        bgGradient: "from-gray-300/20 to-gray-400/20",
        textColor: "text-gray-300",
        borderColor: "border-gray-400/50",
        glow: "shadow-[0_0_15px_rgba(209,213,219,0.3)]",
      };
    case 2:
      return {
        medal: "🥉",
        bgGradient: "from-orange-600/20 to-orange-700/20",
        textColor: "text-orange-400",
        borderColor: "border-orange-500/50",
        glow: "shadow-[0_0_15px_rgba(251,146,60,0.3)]",
      };
    default:
      return {
        medal: `${index + 1}`,
        bgGradient: "from-slate-700/20 to-slate-800/20",
        textColor: "text-slate-300",
        borderColor: "border-slate-600/50",
        glow: "",
      };
  }
};

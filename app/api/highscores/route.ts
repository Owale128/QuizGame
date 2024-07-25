import { getHighscore } from "@/app/lib/getHighscore";

export const GET = async () => {
    return getHighscore()
}
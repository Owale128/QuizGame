import { getHighscore } from "@/app/lib/getHighscore";
import { NextRequest} from "next/server";

export const GET = async (req: NextRequest) => {
    return getHighscore(req)
}
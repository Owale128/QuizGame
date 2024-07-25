import { getScore } from "@/app/lib/getScore";
import { postScore } from "@/app/lib/postScore";
import { NextRequest} from "next/server";

export const POST = async (req: NextRequest) => {
    return postScore(req)
}

export const GET = async (req: NextRequest) => {
    return getScore(req)
}

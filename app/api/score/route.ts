import { getScore } from "@/app/lib/getScore";
import { postScore } from "@/app/lib/postscore";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    return postScore(req)
}

export const GET = async (req: NextRequest) => {
    return getScore(req)
}

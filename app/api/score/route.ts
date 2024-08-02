import { NextRequest } from "next/server"
import { getScore } from "@/app/lib/getScore";
import { postScore } from "@/app/lib/postScore";

export const POST = async (req: NextRequest) => {
return postScore(req)   
}

export const GET = async (req: NextRequest) => {
return getScore(req)
}

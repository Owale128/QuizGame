import { getHighscore } from "@/app/lib/getHighscore"

export const dynamic = 'force-dynamic'

export const GET = async () => {
   return getHighscore()
}

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "./supabaseClient";


export const getHighscore = async (req: NextRequest) => {

    try {
        const { data: highScore, error} = await supabase
        .from('QuizGameDB')
        .select('score, username')
        .order('score', {ascending: false})
        .limit(5)
        .single();

        if(error) {
            throw error;
        }

        if (highScore) {
            return NextResponse.json(highScore, { status: 200 });
        } else {
            return NextResponse.json({ message: 'No scores found' }, {status: 404 });
        }

    } catch (error) {
        console.error('Error fetching high score', error);
        return NextResponse.json({ message: 'Internal Server Error'}, { status: 500});
    }
}



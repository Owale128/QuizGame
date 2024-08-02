import { NextResponse } from "next/server";
import { supabase } from "./supabaseClient";


export const getHighscore = async () => {

    try {
        const { data: highScore, error} = await supabase
        .from('QuizDB')
        .select('score, username')
        .order('score', { ascending: false })
        .limit(5)

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



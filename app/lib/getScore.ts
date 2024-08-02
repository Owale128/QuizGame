import { NextRequest, NextResponse } from "next/server";
import { supabase } from "./supabaseClient";


export const getScore = async (req: NextRequest) => {

    try {
        const { searchParams } = new URL(req.url)
        const username = searchParams.get('username');

        const { data: user, error } = await supabase
        .from('QuizDB')
        .select('*')
        .eq('username', username)
        .maybeSingle()

        if (error) {
            throw error;
        }

        if (user) {
            return NextResponse.json(user, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Score not found'}, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching score:', error);
        return NextResponse.json({ message: 'Internal Server Error'}, { status: 500 });
    }
};
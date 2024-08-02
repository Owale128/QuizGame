import { NextRequest, NextResponse } from "next/server";
import { supabase } from "./supabaseClient";


export const postScore = async (req: NextRequest) => {

    try {
        
        const { username, score } = await req.json();
        
        const { data: existingUser, error: fetchError } = await supabase
            .from('QuizDB')  
            .select('*')
            .eq('username', username)
            .maybeSingle()

        if (fetchError) {
            throw fetchError;
        }

        if (existingUser) {
            
            const { error: updateError } = await supabase
                .from('QuizDB')  
                .update({ score })
                .eq('username', username);

            if (updateError) {
                throw updateError;
            }
        } else {
            
            const { error: insertError } = await supabase
                .from('QuizDB')  
                .insert([{ username, score }]);

            if (insertError) {
                throw insertError;
            }
        }

        return NextResponse.json({ message: 'Score saved' }, { status: 200 });
    } catch (error) {
        console.error('Error saving score:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
};



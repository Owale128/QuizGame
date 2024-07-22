import pool from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {

    try {
        const { username, score} = await req.json();

        const existingResult = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if(existingResult.rows.length > 0) {
            await pool.query('UPDATE users SET score = $1 WHERE username = $2', [score, username]);
        } else {
            await pool.query('INSERT INTO users (username, score) VALUES ($1, $2)', [username, score]);
        }

        return NextResponse.json({ message: 'Score saved'}, { status: 200 });
    } catch (error) {
        console.error('Error saving score:', error);
        return NextResponse.json({ message: 'Internal Server Error'}, { status: 500})
    }
}

export const GET = async (req: NextRequest) => {

    try {
        const { searchParams } = new URL(req.url);
        const username = searchParams.get('username');

        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if(result.rows.length > 0) {
            return NextResponse.json(result.rows[0], { status: 200 });
        } else {
            return NextResponse.json({ message: 'Score not found'}, { status: 404 });
            }
        } catch (error) {
            console.error('Error fetching Score:', error)
            return NextResponse.json({ message: 'Internal Server Error'}, { status: 500});
        }
}

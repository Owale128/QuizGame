import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {

    try {
        const result = await pool.query (
            'SELECT username, score FROM users ORDER BY score DESC LIMIT 5'
        );

        return NextResponse.json(result.rows, { status: 200});
        
    } catch (error) {
        console.error('Error fetching high scores:', error);
        return NextResponse.json({ message: 'Internal Server Error'}, { status: 500 });
    }
}
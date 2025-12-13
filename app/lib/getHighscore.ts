import { NextResponse } from "next/server";
import { getDatabase } from "./mongoClient";

export const getHighscore = async () => {
    try {
        const db = await getDatabase();
        const collection = db.collection('scores');

        const highScores = await collection
            .find({})
            .project({ _id: 0, username: 1, score: 1 })
            .sort({ score: -1 })
            .limit(5)
            .toArray();

        if (highScores && highScores.length > 0) {
            return NextResponse.json(highScores, { status: 200 });
        } else {
            return NextResponse.json({ message: 'No scores found' }, { status: 404 });
        }

    } catch (error) {
        console.error('Error fetching high score', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}



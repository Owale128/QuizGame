import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "./mongoClient";

export const postScore = async (req: NextRequest) => {
    try {

        const { username, score } = await req.json();

        if (!username || typeof score !== 'number') {
            return NextResponse.json(
                { message: 'Invalid input: username and score required' },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const collection = db.collection('scores');

        await collection.updateOne(
            { username },
            { $set: { username, score } },
            { upsert: true }
        );

        return NextResponse.json({ message: 'Score saved' }, { status: 200 });
    } catch (error) {
        console.error('Error saving score:', error);

        if ((error as any).code === 11000) {
            return NextResponse.json(
                { message: 'Username already exists' },
                { status: 409 }
            );
        }

        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
};



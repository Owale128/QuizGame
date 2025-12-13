import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "./mongoClient";

export const getScore = async (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        const username = searchParams.get('username');

        if (!username) {
            return NextResponse.json(
                { message: 'Username parameter required' },
                { status: 400 }
            );
        }

        const db = await getDatabase();
        const collection = db.collection('scores');

        const user = await collection.findOne(
            { username },
            { projection: { _id: 0 } }
        );

        if (user) {
            return NextResponse.json(user, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Score not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching score:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
};
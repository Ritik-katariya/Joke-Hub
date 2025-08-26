export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/monogdb";
import Joke from "@/lib/models/Joke";

export async function GET() {
  await connectDB();

  try {
    const jokes = await Joke.aggregate([{ $sample: { size: 1 } }]);
    if (jokes.length === 0) {
      return NextResponse.json({ message: "No jokes found." }, { status: 404 });
    }
    return NextResponse.json(jokes[0]);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching joke.", error },
      { status: 500 }
    );
  }
}

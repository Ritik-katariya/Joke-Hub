
import { NextResponse } from "next/server";
import { connectDB as dbConnect } from "@/lib/monogdb";
import Joke from "@/lib/models/Joke";

export async function POST(request: Request) {
  try {
    const { setup, punchline, type } = await request.json();

    if (!setup || !punchline || !type) {
      return NextResponse.json(
        { message: "Invalid joke data" },
        { status: 400 }
      );
    }
    const id = Date.now(); // Simple unique ID based on timestamp
    await dbConnect();

    const newJoke = new Joke({ setup, punchline, type, id });
    await newJoke.save();

    return NextResponse.json(newJoke, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    await dbConnect();

    const jokes = await Joke.find({ type: type || "programming" });
    if (!jokes.length) {
      return NextResponse.json({ message: "No jokes found" }, { status: 404 });
    }
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    return NextResponse.json(randomJoke);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

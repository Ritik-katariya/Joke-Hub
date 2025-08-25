import { NextResponse } from 'next/server';
import { connectDB as dbConnect } from '@/lib/monogdb';
import Joke from '@/lib/models/Joke';

export async function POST(request: Request) {
  const { setup, punchline, type } = await request.json();

  if (!setup || !punchline || type !== 'programming') {
    return NextResponse.json({ message: 'Invalid joke data' }, { status: 400 });
  }
   const id=new Date().valueOf(); // Simple unique ID based on timestamp
  await dbConnect();

  const newJoke = new Joke({ setup, punchline, type, id });
  await newJoke.save();

  return NextResponse.json(newJoke, { status: 201 });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  await dbConnect();

  const jokes = await Joke.find({ type: type || 'programming' });
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

  return NextResponse.json(randomJoke);
}
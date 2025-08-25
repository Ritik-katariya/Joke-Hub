import mongoose, { Schema, Document } from "mongoose";

export interface IJoke extends Document {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

const JokeSchema = new Schema<IJoke>({
  type: { type: String, required: true },
  setup: { type: String, required: true },
  punchline: { type: String, required: true },
  id: { type: Number, required: true, unique: true },
});

// Prevent recompilation in dev hot-reload
export default mongoose.models.Joke || mongoose.model<IJoke>("Joke", JokeSchema);

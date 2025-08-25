"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import JokeComponent from "./JokeCompo";

export default function JokesPage() {
  const [joke, setJoke] = useState<any>(null);
  const [selectedType, setSelectedType] = useState("programming");
  const [loading, setLoading] = useState(false);
 const apiBaseUrl = process.env.API_BASE_URL|| 'https://official-joke-api.appspot.com/jokes';
  useEffect(() => {
    fetchJoke();
    // eslint-disable-next-line
  }, [selectedType]);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiBaseUrl}/${selectedType}/random`
      );
      setJoke(Array.isArray(response.data) ? response.data[0] : response.data);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke(null);
    }
    setLoading(false);
  };

  const jokeTypes = [
    { value: "general", label: "General" },
    { value: "knock-knock", label: "Knock-Knock" },
    { value: "programming", label: "Programming" },
    { value: "dad", label: "Dad" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[81vh] w-full bg-transparent p-4">
      <div className="mb-8 flex flex-col items-center">
        <label
          htmlFor="joke-type"
          className="mb-2 text-lg font-semibold text-gray-200"
        >
          Select Joke Type
        </label>
        <select
          id="joke-type"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-5 py-3 rounded-xl bg-gray-800 text-white shadow-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          {jokeTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className="text-white text-xl font-semibold mt-8">Loading...</div>
      ) : joke ? (
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="mx-2 w-full max-w-xl">
            <JokeComponent joke={joke} />
          </div>
          <button
            onClick={fetchJoke}
            className="text-lg text-white bg-gray-800 hover:bg-blue-700 px-6 py-2 rounded-xl shadow-lg transition"
          >
            Change Joke
          </button>
        </div>
      ) : (
        <div className="text-white text-lg mt-8">No jokes found.</div>
      )}
    </div>
  );
}

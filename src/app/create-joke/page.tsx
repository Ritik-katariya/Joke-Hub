"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function CreateJoke() {
  const [setup, setSetup] = useState('Why did the developer go broke buying Bitcoin?');
  const [punchline, setPunchline] = useState("He kept calling it bytecoin and didn't get any.");
  const [type, setType] = useState('programming');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/jokes', { setup, punchline, type });
      setMessage('Joke created successfully!');
    } catch (error) {
      setMessage('Error creating joke.');
      console.error(error);
    }
  };

const jokeTypes = [
    { value: "general", label: "General" },
    { value: "knock-knock", label: "Knock-Knock" },
    { value: "programming", label: "Programming" },
    { value: "dad", label: "Dad" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-6">Create a New Joke</h1>
      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <div>
          <label className="block text-lg font-semibold mb-2">Setup</label>
          <input
            type="text"
            value={setup}
            onChange={(e) => setSetup(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
            required
            placeholder="Enter the setup for your joke"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Punchline</label>
          <input
            type="text"
            value={punchline}
            onChange={(e) => setPunchline(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
            required
            placeholder="Enter the punchline for your joke"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-2">Joke Type</label>
          <select
          title='Select Joke Type'
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none"
          >
            {jokeTypes.map((j) => (
              <option key={j.value} value={j.value}>
                {j.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Submit Joke
        </button>
      </form>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
}

import JokesPage from "@/components/jokes-page/JokesPage";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-4xl font-bold bg-gray-900 text-white pt-4">
      <h1>Welcome to Jokes Hub! 😂</h1>
      <JokesPage />

    </div>
  );
}

import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-900 text-white px-20 shadow-sm hover:shadow-blue-300 border-b border-gray-700">
     <Link href={"/"}>
      <h1 className="text-2xl font-bold font-mono pointer cursor-pointer">
        Jokes Hub
      </h1>
      </Link>
      <ul className="flex space-x-12 justify-around items-center mr-20">
        <Link href={"/"}>
          <li className="w-24 hover:border hover:border-gray-700  hover:scale-105 text-center h-10 pt-1 hover:bg-gray-800 cursor-pointer">
            Home
          </li>
        </Link>
        <Link href={"/create-joke"}>
          <li className="w-24 hover:border hover:border-gray-700  hover:scale-105 text-center h-10 pt-1 hover:bg-gray-800 cursor-pointer">
            Create Joke
          </li>
        </Link>
        <Link href={"/my-joke"}>
          <li className="w-24 hover:border hover:border-gray-700  hover:scale-105 text-center h-10 pt-1 hover:bg-gray-800 cursor-pointer">
            My Joke
          </li>
        </Link>
      </ul>
    </div>
  );
}

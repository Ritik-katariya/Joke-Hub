import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6  border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side */}
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>

        {/* Right side links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link href="/" className="hover:underline">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Terms
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

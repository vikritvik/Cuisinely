
"use client";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">🥗 Cuisinely</h2>
          <p className="text-sm leading-relaxed">
            Discover delicious recipes, AI meal plans, and bite-sized cooking videos. 
            Cook smarter, live healthier.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/recipes" className="hover:text-white">Recipes</Link>
            </li>
            <li>
              <Link href="/aimeal" className="hover:text-white">Meal Planner</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">Blog</Link>
            </li>
            
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get Updates</h3>
          <p className="text-sm mb-3">Subscribe to receive healthy recipes weekly.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="p-2 mx-1 rounded-l-md w-full text-white border border-b-neutral-100"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-r-md cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Cuisinely. All rights reserved.
      </div>
    </footer>
  );
}

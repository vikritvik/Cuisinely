
"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // Adjust path if needed
import { UserCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle logout and redirect
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/signin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[98%] lg:w-[90%] bg-white/80 backdrop-blur-md shadow-md rounded-xl px-6 py-3">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="font-bold text-2xl text-black tracking-tight">
            🥗 Cuisinely
          </a>
        </div>

        {/* Search Bar Desktop */}
        <div className="hidden md:flex px-5 rounded search-bar">
          <input
            type="text"
            placeholder="Search Dishes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded py-2 px-4 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600 active:bg-blue-300 mx-1 cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="p-2 text-gray-700 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-bold">
          <a href="/" className="hover:text-black transition">Home</a>
          <Link href="/recipes" className="hover:text-black transition">Recipes</Link>
          <Link href="/aimeal" className="hover:text-black transition">Cuisinely Ai</Link>
          <Link href="/blog" className="hover:text-black transition">Blog</Link>
        </ul>

        {/* Sign In / Profile */}
        <div className="hidden md:flex gap-4 items-center px-4 cursor-pointer">
          {!user ? (
            <Link
              href="/signin"
              className="bg-green-300 active:bg-green-100 border-2 border-blue-200 text-teal-600 font-semibold px-4 py-2 rounded-sm shadow-sm hover:text-teal-800 transition hover:underline"
            >
              Sign In
            </Link>  
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
              >
                <UserCircleIcon className="w-9 h-9 text-red-500 hover:text-red-600" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search Dishes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[250px] px-4 py-2 border rounded"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-300 mx-1"
            >
              Search
            </button>
          </div>
          <Link href="/home" className="block font-bold hover:text-black" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/recipes" className="block font-bold hover:text-black" onClick={() => setMenuOpen(false)}>Recipes</Link>
          <Link href="/aimeal" className="block font-bold hover:text-black" onClick={() => setMenuOpen(false)}>Cuisinely Ai</Link>
          <Link href="/blog" className="block font-bold hover:text-black" onClick={() => setMenuOpen(false)}>Blog</Link>
          {!user ? (
            <Link
              href="/signin"
              className="block bg-white border-2 border-blue-200 text-teal-600 font-semibold px-4 py-2 rounded-sm hover:bg-green-200"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          ) : (
            <button
              onClick={() => { handleLogout(); setMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}

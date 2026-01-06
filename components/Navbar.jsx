
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
  const dropdownRef = useRef(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const [isOpenS, setIsOPenS] = useState(false);
  const [isOpenN, setIsOpenN] = useState(false);
  const [isOpenW, setIsOpenW] = useState(false);
  const [isOpenK, setIsOpenK] = useState(false);

  // code concept for breakfast
  let timeoutId1;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId1);
    setIsOpen(true)
  };

  const handleMouseLeave = () => {
    timeoutId1 = setTimeout(() => {
      setIsOpen(false);
    }, 50); // delay in ms
  }



  // code concept for Briyani dropdown
  let timeoutId2;

  const handleMouseEnterB = () => {
    clearTimeout(timeoutId2);
    setIsOpenB(true)
  }


  const handleMouseLeaveB = () => {
    timeoutId2 = setTimeout(() => {
      setIsOpenB(false);
    }, 50); // delay time
  }




  // code concept for sbji dropdown
  let timeoutId3;

  const handleMouseEnterS = () => {
    clearTimeout(timeoutId3);
    setIsOPenS(true)
  }

  const handleMouseLeaveS = () => {
    timeoutId3 = setTimeout(() => {
      setIsOPenS(false);
    }, 50)
  }

  // code concept for Snacks Dropdown
  let timeoutId4;

  const handleMouseEnterN = () => {
    clearTimeout(timeoutId4);
    setIsOpenN(true)
  }

  const handleMOuseLeaveN = () => {
    timeoutId4 = setTimeout(() => {
      setIsOpenN(false)
    }, 50);
  }

  // Code concept for Sweets Dropdown
  let timeoutId5;

  const handleMouseEnterW = () => {
    clearTimeout(timeoutId5)
    setIsOpenW(true)
  }

  const handleMouseLeaveW = () => {
    timeoutId5 = setTimeout(() => {
      setIsOpenW(false)
    }, 50);
  }

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



  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[100%] md:w-[98%] lg:w-[100%] bg-white/80 backdrop-blur-md shadow-md rounded-xl px-6 py-3">
      <nav className="flex justify-between mx-15">
        {/* Logo */}
        <div className="flex ">
          <a href="/" className="font-bold text-2xl text-black tracking-tight">
            🥗 Cuisinely
          </a>
        </div>



        {/* Mobile Hamburger */}
        <button className="p-2 text-gray-700 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-bold">
          <a href="/" className="hover:text-black transition">Home</a>

        </ul>




        {/* dropdown Wrapper */}
        <div className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="cursor-pointer hover:border-b-2 border-black flex items-center gap-1">

            Breakfast <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
          </span>

          {/* Dropdown Menu */}

          {isOpen && (
            <div className=" absolute mt-2 bg-white border rounded shadow-lg w-40 p-2 z-[999] animate-fade-slide">
              <Link href="/recipes/dosa" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Dosa
              </Link>

              <Link href="/recipes/idli" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Idli
              </Link>

              <Link href="/recipes/sandwich" className="block px-3 py-2 hover:bg-gray-100 rounded"  >
                Sandwitch
              </Link>

            </div>
          )}


        </div>


        {/* dropdown Wrapper */}
        <div className="relative group"
          onMouseEnter={handleMouseEnterB}
          onMouseLeave={handleMouseLeaveB}
        >
          <span className="cursor-pointer hover:border-b-2 border-black flex items-center gap-1">

            Biryani <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
          </span>

          {/* Dropdown Menu */}
          {isOpenB && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-40 p-2 z-[999] animate-fade-slide">
              <Link href="/recipes/veg-biryani" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Veg Biryani
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Paneer Biryani
              </Link>

              <Link href="/recipes/matka" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Matka Biryani
              </Link>

              <Link href="/recipes/hyderabadi" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Hyderabadi Biryani
              </Link>

              <Link href="/recipes/mughlai" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Mughlai Biryani
              </Link>

              <Link href="/recipes/nawabi" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Nawabi Biryani
              </Link>

              <Link href="/recipes/calicut" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Calicut Biryani
              </Link>

              <Link href="/recipes/kashmiri" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Kashmiri Biryani
              </Link>
            </div>
          )}
        </div>

        {/* dropdown Wrapper */}
        <div className="ralative group"
          onMouseEnter={handleMouseEnterS}
          onMouseLeave={handleMouseLeaveS}
        >
          <span className="cursor-pointer hover:border-b-2 border-black flex items-center gap-1">
            Sabji <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
          </span>


          {/* Dropdown Menu */}
          {isOpenS && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-40 p-2 z-[999] animate-fade-slide">
              <Link href="/recipes/paneer-sbji" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Paneer Butter Masala
              </Link>

              <Link href="/recipes/kadhai_paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Kadhai Paneer
              </Link>

              <Link href="/recipes/matar_paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Matar Paneer
              </Link> 

               <Link href="/recipes/shahi_paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Shahi Paneer
              </Link>    
              
               <Link href="/recipes/palak_paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Palak Paneer
              </Link>   
              
              <Link href="/recipes/paneer_do_pyaja" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Paneer Do Pyaja
              </Link> 
                
              <Link href="/recipes/paneer_bhurji" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Paneer bhurji
              </Link> 
              
              <Link href="/recipes/malai_kofta" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Malai Kofta
              </Link>   
              
              <Link href="/recipes/aloo_gobi" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Aloo Gobi
              </Link>  
              
               <Link href="/recipes/malai_kofta" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Malai Kofta
              </Link>  
              
               <Link href="/recipes/malai_kofta" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Malai Kofta
              </Link>  
              
               <Link href="/recipes/malai_kofta" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Malai Kofta
              </Link>  
              
               <Link href="/recipes/malai_kofta" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Malai Kofta
              </Link>  
              
               <Link href="/recipes/malai_kofta" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Malai Kofta
              </Link>

              <Link href="/recipes/lauki_sbji" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Lauki Sbji
              </Link>

              <Link href="/recipes/baingan_bharta" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Baingan bharta
              </Link>

              <Link href="/recipes/bhindi_masala" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Bhindi Sbji
              </Link>
            </div>
          )}
        </div>


        {/* dropdown Wrapper */}
        <div className="relative group"
          onMouseEnter={handleMouseEnterN}
          onMouseLeave={handleMOuseLeaveN}
        >
          <span className="cursor-pointer hover:border-b-2 border-black flex items-center gap-1">
            Snacks <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
          </span>

          {/* Dropdown Menu */}
          {isOpenN && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-40 p-2 z-[999] animate-fade-slide">
              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Paneer
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>
            </div>
          )}
        </div>


        {/* dropdown Wrapper */}
        <div className="relative group"
          onMouseEnter={handleMouseEnterW}
          onMouseLeave={handleMouseLeaveW}
        >
          <span className="cursor-pointer hover:border-b-2 border-black flex items-center gap-1">
            Sweets <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
          </span>

          {/* Dropdown Menu */}
          {isOpenW && (
            <div className="absolute mt-2 bg-white border rounded shadow-lg w-40 p-2 z-[999] animate-fade-slide">
              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                Paneer
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>

              <Link href="/recipes/paneer" className="block px-3 py-2 hover:bg-gray-100 rounded" >
                veg
              </Link>
            </div>
          )}
        </div>


        {/* Sign In / Profile
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
        </div> */}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div>
          <Link href="/home" className="block font-bold hover:text-black" onClick={() => setMenuOpen(false)}>Home</Link>

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

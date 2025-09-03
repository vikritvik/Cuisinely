 "use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import MultiColumnSlider from "@/components/ImageSlider";
import MealPlanner from "@/components/MealPlanner";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
 
// import MealPlanner from "@/components/AiMealPlanner"; // uncomment if it exists

const Dishes = [
  { title: "Creamy Garlic Pasta", img: "/images/pasta.jpg" },
  { title: "Cheesy regular Pizza", img: "/images/pizza.jpg" },
  { title: "Are you Vegan lover?", img: "/images/vegan.jpg" },
];

export default function Home() {

  const router = useRouter();
  const auth = getAuth();

   const handleClick = () => {
    if (auth.currentUser) {
      router.push("/aimeal");  // ✅ logged in
    } else {
      router.push("/signup");     // ❌ not logged in
    }
  };


  return (
    <div className="min-h-screen font-sans bg-[url('/images/grid.svg')] bg-repeat text-gray-900">
      {/* Hero Section */}
      <section className="pt-40 text-center px-6">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
          Cuisinely: The Smart Way to Cook
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Discover personalized recipes, AI meal planning, and nutrition tracking — all in one place.
        </p>
        <div className="mt-8">
          <button
            onClick={handleClick}
            className="bg-black text-white px-2 py-2 rounded-full hover:bg-gray-800 transition-all cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Showcase Icons */}
      <section className="relative flex justify-center flex-wrap gap-10 mt-20 px-10">
        <Image src="/images/frying-pan.png" alt="Pan" width={80} height={80} />
        <Image src="/images/recipe.png" alt="Recipe" width={80} height={80} />
        <Image src="/images/vegetable.png" alt="Veggie" width={80} height={80} />
        <Image src="/images/balance.png" alt="Scale" width={80} height={80} />
        <Image src="/images/aiplanner-icon.jpg" alt="AI" width={100} height={88} />
      </section>

      {/* Backed By Section */}
      <section className="text-center mt-10">
        <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-medium text-sm shadow-sm">
          🔥 Featured by FoodTech Summit 2025
        </span>
      </section>

      {/* Feature Highlights */}
      <section className="py-15 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Why Use Cuisinely?</h2>
        <MultiColumnSlider />
      </section>
      
      {/* Meal Planner Section */}
      
       <MealPlanner />
     
    </div>
  );
}

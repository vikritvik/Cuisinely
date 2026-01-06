"use client";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import MultiColumnSlider from "@/components/ImageSlider";
import MealPlanner from "@/components/MealPlanner";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Desert from '@/components/Desert&Media';


// import MealPlanner from "@/components/AiMealPlanner"; // uncomment if it exists

// const Dishes = [
//   { title: "Creamy Garlic Pasta", img: "/images/pasta.jpg" },
//   { title: "Cheesy regular Pizza", img: "/images/pizza.jpg" },
//   { title: "Are you Vegan lover?", img: "/images/vegan.jpg" },
// ];


const trendingText = [
  "Rava Kajjikayalu Recipe | Suji Karanji – Gujiya",
  "Masala Dosa Recipe | How…",
  "Paneer Butter Masala Recipe",
  "Dal Makhani Restaurant Style",
];

const topRow = [
  {
    img: "/images/dal-makhani.webp",
    title: "Dal Makhani Recipe Restaurant Style...",
    link: "/recipes/dal-makhani",
  },
  {
    img: "/images/dosa.img.jpg",
    title: "Masala Dosa Recipe | How...",
    link: "/recipes/dosa",
  },
  {
    img: "/images/palak-paneer.webp",
    title: "Palak Paneer Recipe | Spinach...",
    link: "/recipes/palak-paneer",
  },
];

const bottomRow = [
  {
    img: "/images/paneer-masala.jpg",
    title: "Paneer Butter Masala Recipe — Restaurant Style",
    link: "/recipes/paneer",
  },
  {
    img: "/images/masala-pav.jpg",
    title: "Masala Pav Recipe | Street Style Bhaji Pav...",
    link: "/recipes/masala-pav",
  },
  {
    img: "/images/Tomato_Chutney.webp",
    title: "Tomato Chutney Recipe — 2 In 1 Tomato Chutney",
    link: "/recipes/chutney",
  },
  {
    img: "/images/idli-batter.jpg",
    title: "Idli Dosa Batter Recipe | 2 In 1 Multipurpose",
    link: "/recipes/idli-batter",
  },
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

  const [tickerIndex, setTickerIndex] = useState(0);

  const prevTicker = () =>
    setTickerIndex((tickerIndex - 1 + trendingText.length) % trendingText.length);
  const nextTicker = () =>
    setTickerIndex((tickerIndex + 1) % trendingText.length);


  return (
    <main className="min-h-screen font-sans bg-[url('/images/grid.svg')] bg-repeat text-gray-900">


      {/* 🔥 Trending Now Ticker */}
      <div className="flex items-center gap-3 px-6 py-4 mt-30 w-[90%] pl-30">
        <span className="bg-black text-white px-3 py-1 text-sm font-bold rounded">
          TRENDING NOW
        </span>

        <p className="font-semibold text-gray-800">
          {trendingText[tickerIndex]}
        </p>

        <button
          onClick={prevTicker}
          className="ml-auto border px-2 py-1 rounded hover:bg-gray-200"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={nextTicker}
          className="border px-2 py-1 rounded hover:bg-gray-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className='flex flex-col w-[90%] pl-30 '>
        {/* Top Row — 3 Big Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
          {topRow.map((item, idx) => (
            <Link key={idx} href={item.link} className="relative group h-[320px] overflow-hidden">
              <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
              <h3 className="absolute bottom-3 left-4 right-4 font-bold text-white text-lg leading-tight">
                {item.title}
              </h3>
            </Link>
          ))}
        </section>

        {/* Bottom Row — 4 Medium Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 mt-4 ">
          {bottomRow.map((item, idx) => (
            <Link key={idx} href={item.link} className="relative group h-[250px] overflow-hidden">
              <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
              <h3 className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm leading-tight">
                {item.title}
              </h3>
            </Link>
          ))}
        </section>
      </div>

      {/* ⭐ Popular Recipes Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-3xl font-extrabold text-black mb-2">
          POPULAR RECIPES
        </h2>
        <div className="w-24 h-[3px] bg-gray-800 mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Recipe Card */}
          {[
            { title: "Paneer Butter Masala", img: "/images/paneer-masala.jpg", cat: "Curry", link: "/recipes/paneer" },
            { title: "Chicken Biryani", img: "/images/chicken-biryani.jpg", cat: "Biryani", link: "/recipes/chicken-biryani" },
            { title: "Masala Dosa", img: "/images/masala-dosa.jpg", cat: "Breakfast", link: "/recipes/dosa" },
            { title: "Samosa", img: "/images/samosa-img.jpg", cat: "Snacks", link: "/recipes/samosa" },
            { title: "Gulab Jamun", img: "/images/Gulab-jamun.webp", cat: "Sweets", link: "/recipes/gulab-jamun" },
            { title: "Poha", img: "/images/indori-poha.jpg", cat: "Breakfast", link: "/recipes/poha" },
            { title: "Chole Bhature", img: "/images/chhole-bhature.jpg", cat: "North Indian", link: "/recipes/chole" },
            { title: "Upma", img: "/images/momos.avif", cat: "Breakfast", link: "/recipes/upma" },
          ].map((item, i) =>
            <Link key={i} href={item.link} className="overflow-hidden rounded-lg shadow-md border group cursor-pointer">

              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Text */}
              <div className="p-3">
                <span className="text-xs bg-black text-white px-2 py-[2px] rounded-sm">
                  {item.cat} Recipes
                </span>
                <h3 className="mt-2 font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
              </div>

            </Link>
          )}

        </div>

      </section>




      {/* 📌 Latest Articles Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-3xl font-extrabold text-black mb-2">
          LATEST ARTICLES
        </h2>
        <div className="w-24 h-[3px] bg-gray-800 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Article Card */}
          <Link href="/recipes/paneer" className="flex gap-6 group">
            <div className="w-[45%] min-h-[200px] relative rounded-lg overflow-hidden">
              <Image src="/images/protein-food.png" alt="Paneer" fill className="object-cover group-hover:scale-105 transition" />
            </div>
            <div className="flex flex-col justify-between w-150">
              <h2 className="text-2xl font-semibold text-gray-900 leading-snug">
               Top 10 Protein Rich Veg Food
              </h2>
              <p>
                Protein is one of the most important nutrients our body needs — especially for muscle growth, weight management,
                <p> and strong immunity. Many people believe that only non-vegetarian food contains enough protein, </p>
 
              </p>
              <a href='' className="inline-block text-xs bg-black text-white px-2 py-2 hover:bg-blue-500 mt-2 rounded-sm">
                Read More
              </a>
            </div>
          </Link>

          {/* Article Card */}
          <Link href="/recipes/handvo" className="flex gap-6 group">
            <div className="w-[45%] min-h-[200px] relative rounded-lg overflow-hidden">
              <Image src="/images/easy-breakfast.jpg" alt="Handvo" fill className="object-cover group-hover:scale-105 transition" />
            </div>
            <div className="flex flex-col justify-between w-150">
              <h3 className="text-xl font-semibold leading-snug">
                Easy Tips to make Healthy Breakfast
              </h3>
              <p>
                Breakfast is the first fuel your body gets in the morning <p></p> — so it should be healthy,
                energizing, and tasty! But with a busy schedule, many people either skip breakfast or grab something unhealthy in a   </p>
              <a href='' className="inline-block text-xs bg-black text-white px-2 py-2 hover:bg-blue-500  mt-2 rounded-sm">
               Read More
              </a>
            </div>
          </Link>

          {/* Article Card */}
          <Link href="/recipes/cabbage-vada" className="flex gap-6 group">
            <div className="w-[45%] min-h-[200px] relative rounded-lg overflow-hidden">
              <Image src="/images/healthy-meal.jpg" alt="Cabbage Vada" fill className="object-cover group-hover:scale-105 transition" />
            </div>
            <div className="flex flex-col justify-between w-150">
              <h3 className="text-xl font-semibold leading-snug">
                Cabbage Vada Recipe | Cabbage Bites
              </h3>
              <p className='p-2'>
                Eating healthy doesn’t have to be complicated!
                 <p></p>With a little planning, you can enjoy fresh and nutritious meals every day — even when life gets super busy. 
              </p>
              <a href='' className="inline-block text-xs bg-black text-white px-2 py-2 hover:bg-blue-500  mt-2 rounded-sm">
               Read More
              </a>
            </div>
          </Link>

          {/* Article Card */}
          <Link href="/recipes/masala-pulao" className="flex gap-6 group">
            <div className="w-[45%] min-h-[200px] relative rounded-lg overflow-hidden">
              <Image src="/images/masala-pullav.jpg" alt="Masala Rice Pulao" fill className="object-cover group-hover:scale-105 transition" />
            </div>
            <div className="flex flex-col justify-between w-150">
              <h3 className="text-xl font-semibold leading-snug">
                Masala Rice Pulao Recipe – Lunch Box Special
              </h3>
              <p>
                Masala Pulao is one of the easiest and most comforting Indian meals — packed with vegetables, aroma, and delicious spices. It’s perfect for lunch, dinner, or even a lunchbox meal for school and work. The best part?
              </p>
               <a href='' className="inline-block text-xs bg-black text-white px-2 py-2 hover:bg-blue-500  mt-2 rounded-sm">
               Read More
              </a>
            </div>
          </Link>

        </div>

      </section>




      {/* 🎉 New Year Special Dishes Section */}
      <section className="max-w-7xl mx-auto px-6 py-14 bg-gray-50">

        <h2 className="text-3xl font-extrabold text-black mb-2">
          NEW YEAR DISHES 🎉
        </h2>
        <div className="w-24 h-[3px] bg-gray-800 mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {[
            { title: "Veg Pizza", img: "/images/veg-pizza.jpg", cat: "Party Snack", link: "/recipes/pizza" },
            { title: "Peri Peri French Fries", img: "/images/peri-fries.webp", cat: "Snacks", link: "/recipes/fries" },
            { title: "Chocolate Lava Cake", img: "/images/chocolate-lava-cake.jpg", cat: "Desserts", link: "/recipes/lava-cake" },
            { title: "Dry Manchurian", img: "/images/manchurian.jpg", cat: "Indo-Chinese", link: "/recipes/manchurian" },
            { title: "Veg Cutlet", img: "/images/veg-cutlet.jpg", cat: "Starter", link: "/recipes/cutlet" },
            { title: "Tandoori Paneer Tikka", img: "/images/tandoori-paneer-tikka.jpg", cat: "Starter", link: "/recipes/tikka" },
            { title: "Fruit Punch", img: "/images/fruit-punch.jpg", cat: "Mocktail", link: "/recipes/fruit-punch" },
            { title: "Party Style Pasta", img: "/images/pasta.avif", cat: "Main", link: "/recipes/pasta" },
          ].map((item, i) => (
            <Link key={i} href={item.link} className="overflow-hidden rounded-lg shadow-md border group cursor-pointer">

              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Text */}
              <div className="p-3">
                <span className="text-xs bg-black text-white px-2 py-[2px] rounded-sm">
                  {item.cat}
                </span>
                <h3 className="mt-2 font-semibold text-gray-900 leading-tight group-hover:text-red-600 transition">
                  {item.title}
                </h3>
              </div>

            </Link>
          ))}
        </div>

      </section>

      <Desert />
    </main>


  );
}

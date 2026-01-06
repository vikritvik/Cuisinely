"use client";
import Image from "next/image";
import Link from "next/link";

export default function Desert() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-14">

            {/* Page Title */}
            <h1 className="text-4xl font-extrabold text-black mb-2">
                Sweets & Dessert Recipes 🍬
            </h1>
            <div className="w-40 h-[3px] bg-gray-800 mb-10"></div>

            {/* GRID: Left Cards + Right Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

                {/* LEFT SIDE — RECIPE GRID */}
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {[
                            { title: "Gulab Jamun", img: "/images/Gulab-jamun.webp", link: "/recipes/gulab-jamun" },
                            { title: "Rasgulla", img: "/images/Rasgula-image.jpg", link: "/recipes/rasgulla" },
                            { title: "Kaju Katli", img: "/images/kaju-katli.webp", link: "/recipes/kaju-katli" },
                            { title: "Besan Ladoo", img: "/images/besan-ladoo.webp", link: "/recipes/besan-ladoo" },
                            { title: "Jalebi", img: "/images/jalebi.jpeg", link: "/recipes/jalebi" },
                            { title: "Rava Kesari", img: "/images/rava-kesari.jpg", link: "/recipes/rava-kesari" },
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href={item.link}
                                className="overflow-hidden rounded-lg shadow-md border group"
                            >
                                {/* Image */}
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-300"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="mt-2 p-3 font-semibold leading-tight group-hover:text-pink-600 transition">
                                    {item.title}
                                </h3>
                            </Link>
                        ))}

                    </div>
                   <a href="#" className="my-5 py-5 text-black  hover:text-blue-600">
                     See More
                   </a>
                </div>

                {/* RIGHT SIDE — Sidebar */}
                <div className="space-y-6">

                    {/* Social Follow Box */}
                    <div className="border shadow-md rounded-lg p-5 bg-white">
                        <h3 className="text-lg font-bold mb-3">Follow Us</h3>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="bg-blue-600 text-white py-2 rounded text-center font-semibold">Facebook</a>
                            <a href="#" className="bg-pink-600 text-white py-2 rounded text-center font-semibold">Instagram</a>
                            <a href="#" className="bg-blue-400 text-white py-2 rounded text-center font-semibold">Twitter</a>
                            <a href="#" className="bg-red-600 text-white py-2 rounded text-center font-semibold">YouTube</a>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="border shadow-md rounded-lg p-5 bg-gray-50">
                        <h3 className="text-lg font-bold mb-2">Don’t Miss New Recipes!</h3>
                        <p className="text-sm text-gray-700 mb-3">
                            Subscribe to get new sweet recipes every week 🎂✨
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border px-3 py-2 rounded mb-3 text-sm"
                        />
                        <button className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-800">
                            Subscribe
                        </button>
                    </div>

                </div>

            </div>
        </main>
    );
}

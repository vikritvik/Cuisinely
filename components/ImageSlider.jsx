
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const slot1Images = [
  "/images/smart-image1.webp",
  "/images/smart-image2.webp",
  "/images/smart-image3.webp",
];
const slot2Images = [
  "/images/meal-plan1.jpg",
  "/images/meal-plan3.jpg",
  "/images/meal-plan2.avif",
];
const slot3Images = [
  "/images/nutrition-insight1.jpg",
  "/images/nutrition-insight2.webp",
  "/images/nutrition-insight3.png",
];

const AutoImageColumn = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="w-full h-[270px] overflow-hidden rounded shadow">
      <div
        className="transition-transform duration-1000"
        style={{ transform: `translateY(-${index * 270}px)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-[270px] object-cover"
            alt={`slot-img-${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function MultiColumnSlider() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="bg-emerald-50 p-6 rounded-lg shadow text-center h-full">
        <AutoImageColumn images={slot1Images} />
        <h3 className="text-xl font-semibold mb-2">Smart Recipe Engine</h3>
        <p className="text-sm">
          Get AI-curated recipes based on your ingredients and preferences.
        </p>
        <Link
          href="/recipes"
          className="mt-3 inline-block text-green-800 font-semibold hover:underline"
        >
          see more →
        </Link>
      </div>

      <div className="bg-emerald-50 p-6 rounded-lg shadow text-center h-full">
        <AutoImageColumn images={slot2Images} />
        <h3 className="text-xl font-semibold mb-2">Meal Planner</h3>
        <p className="text-sm">
          Plan your week’s meals with drag-and-drop simplicity and calorie
          tracking.
        </p>
        <Link
          href="/aimeal"
          className="mt-3 inline-block text-green-800 font-semibold hover:underline"
        >
          Let's try →
        </Link>
      </div>

      <div className="bg-emerald-50 p-6 rounded-lg shadow text-center h-full">
        <AutoImageColumn images={slot3Images} />
        <h3 className="text-xl font-semibold mb-2">Nutrition Insights</h3>
        <p className="text-sm">
          Break down every meal’s macros and get healthier every day.
        </p>
        <Link
          href="/blog"
          className="mt-3 inline-block text-green-800 font-semibold hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}

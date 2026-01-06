import Image from "next/image";
import sandwichImg from "@/public/images/sandwich.jpg"; // Ensure image exists

export const metadata = {
  title: "Veg Sandwich Recipe | Easy Breakfast Snack - Cuisinely",
  description:
    "Quick Veg Sandwich recipe made with fresh vegetables and butter-toasted bread. A perfect breakfast or evening snack loved by kids!",
  keywords:
    "veg sandwich recipe, aloo sandwich, easy breakfast recipes, sandwich chutney, kid friendly snacks",
};

export default function SandwichRecipe() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Easy Veg Sandwich Recipe 🥪
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        Veg Sandwich is a simple and delicious breakfast or snack made using 
        fresh vegetables, bread, butter, and chutney. It is a favorite of kids 
        and a perfect option for lunch box meals!
      </p>

      {/* Image */}
      <div className="mb-6">
        <Image
          src={sandwichImg}
          alt="Veg Sandwich served with chutney"
          className="rounded-lg shadow-md"
          width={700}
          height={450}
        />
      </div>

      {/* Ingredients */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 text-gray-800">
          <li>8 slices White / Wheat Bread</li>
          <li>1 medium Cucumber – thin slices</li>
          <li>1 Tomato – thin slices</li>
          <li>1 Onion – optional</li>
          <li>2-3 tbsp Butter</li>
          <li>Green Chutney (Mint & Coriander)</li>
          <li>Salt & Pepper – to taste</li>
        </ul>
      </section>

      {/* Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">How to Make Veg Sandwich</h2>
        <ol className="list-decimal ml-6 space-y-2 text-gray-800">
          <li>Spread butter on bread slices.</li>
          <li>Apply a layer of green chutney.</li>
          <li>Place cucumber, tomato & onion slices.</li>
          <li>Sprinkle salt and pepper.</li>
          <li>Cover with another bread slice.</li>
          <li>Toast on tawa or toaster until golden.</li>
        </ol>
      </section>

      {/* Tips */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Tips & Variations</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Add cheese slices for a cheesy sandwich.</li>
          <li>Use boiled potato stuffing for Mumbai-style sandwich.</li>
          <li>Serve with tomato ketchup or extra chutney.</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="mt-10 p-4 bg-gray-100 border rounded-lg">
        <p className="font-medium text-gray-800">Try more breakfast recipes:</p>
        <a
          href="/recipes/dosa"
          className="text-blue-600 font-semibold underline hover:text-blue-800"
        >
          Dosa Recipe →
        </a>
      </div>
    </main>
  );
}

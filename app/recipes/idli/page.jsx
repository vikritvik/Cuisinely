import Image from "next/image";
import idliImg from "@/public/images/idli1.jpg"; // <-- Add an image in public folder

export const metadata = {
  title: "Idli Recipe | Soft & Fluffy Idli at Home - Cuisinely",
  description:
    "Learn how to make soft and fluffy Idli at home with this step-by-step recipe. Perfect South Indian breakfast.",
  keywords:
    "idli recipe, how to make idli, south indian breakfast, rice idli, dosa batter idli",
};

export default function IdliRecipe() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Soft & Fluffy Idli Recipe 🍚
      </h1>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        Idli is a traditional South Indian steamed breakfast made using fermented rice
        and urad dal batter. Soft, fluffy, and easy to digest — idli is loved by all ages!
      </p>

      {/* Image */}
      <div className="mb-6">
        <Image
          src={idliImg}
          alt="Idli served with chutney"
          className="rounded-lg shadow-md"
          width={700}
          height={450}
        />
      </div>

      {/* Ingredients */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 text-gray-800">
          <li>2 cups Idli Rice</li>
          <li>1 cup Urad Dal</li>
          <li>1 teaspoon Fenugreek seeds (Methi)</li>
          <li>Salt to taste</li>
          <li>Water (as needed)</li>
        </ul>
      </section>

      {/* Instructions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">How to Make Idli</h2>
        <ol className="list-decimal ml-6 space-y-2 text-gray-800">
          <li>Wash and soak rice + dal separately for 4-6 hours.</li>
          <li>Grind urad dal to a smooth fluffy batter.</li>
          <li>Grind rice to a slightly coarse batter.</li>
          <li>Mix both, add salt, and let ferment overnight.</li>
          <li>Grease idli plates and pour batter.</li>
          <li>Steam for 10-12 minutes and serve hot!</li>
        </ol>
      </section>

      {/* Tips */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Tips for Soft Idli</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Fermentation is key — keep batter in warm place.</li>
          <li>Use idli rice (not regular rice) for best texture.</li>
          <li>Don’t over-steam — idlis become hard.</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="mt-10 p-4 bg-gray-100 border rounded-lg">
        <p className="font-medium text-gray-800">Want more breakfast ideas?</p>
        <a
          href="/recipes"
          className="text-blue-600 font-semibold underline hover:text-blue-800"
        >
          Browse Recipes →
        </a>
      </div>
    </main>
  );
}

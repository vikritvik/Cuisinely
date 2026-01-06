import Image from "next/image";
import dosaImg from "@/public/images/dosa.img.jpg"; // Add an image in public folder

export const metadata = {
  title: "Crispy Dosa Recipe | South Indian Breakfast - Cuisinely",
  description:
    "Learn how to make crispy dosa at home with a perfectly fermented dosa batter. Classic South Indian breakfast with chutney & sambar.",
  keywords:
    "dosa recipe, crispy dosa, how to make dosa, dosa batter, south indian breakfast, masala dosa",
};

export default function DosaRecipe() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Crispy Dosa Recipe 🥞
      </h1>

      {/* Introduction */}
      <p className="text-gray-700 mb-6">
        Dosa is a thin, crispy, and delicious South Indian crepe made using fermented
        rice and urad dal batter. It is served with chutney and sambar, and enjoyed
        for breakfast, lunch, or dinner!
      </p>

      {/* Image */}
      <div className="mb-6">
        <Image
          src={dosaImg}
          alt="Crispy South Indian Dosa"
          className="rounded-lg shadow-md"
          width={700}
          height={450}
        />
      </div>

      {/* Ingredients */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 text-gray-800">
          <li>2 cups Rice (preferably idli/dosa rice)</li>
          <li>1/2 cup Urad Dal</li>
          <li>2 tbsp Poha (flattened rice)</li>
          <li>Salt to taste</li>
          <li>Water (as needed)</li>
          <li>Oil or ghee for cooking dosa</li>
        </ul>
      </section>

      {/* Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">How to Make Dosa</h2>
        <ol className="list-decimal ml-6 space-y-2 text-gray-800">
          <li>Wash and soak rice + dal + poha separately for 4-5 hours.</li>
          <li>Grind the dal to a smooth paste. Grind rice slightly coarse.</li>
          <li>Mix both, add salt, and ferment overnight.</li>
          <li>Heat a tawa, spread batter thin in circular motion.</li>
          <li>Drizzle oil or ghee around edges.</li>
          <li>Fold and serve when golden and crispy!</li>
        </ol>
      </section>

      {/* Tips */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Tips for Crispy Dosa</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Tawa must be hot before adding batter.</li>
          <li>Don’t make batter too thick — it should spread easily.</li>
          <li>Use cast iron tawa for restaurant-style crispiness.</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="mt-10 p-4 bg-gray-100 border rounded-lg">
        <p className="font-medium text-gray-800">Love Breakfast Recipes?</p>
        <a
          href="/recipes/idli"
          className="text-blue-600 font-semibold underline hover:text-blue-800"
        >
          Try Idli Recipe →
        </a>
      </div>
    </main>
  );
}

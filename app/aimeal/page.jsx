
"use client";
import { useState } from "react";
// import MealPlanner from "../components/AiMealPlanner";
import Fuse from "fuse.js";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import Head from "next/head";
import MealPlanner from "@/components/MealPlanner";

export default function AiRecipePage() {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const [user] = useAuthState(auth);
  const router = useRouter();

  const fetchRecipeByName = async (name) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`
    );
    return res.json();
  };

  const fetchRecipeByIngredient = async (ingredient) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
    );
    return res.json();
  };

  const extractRecipe = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    const steps = meal.strInstructions
      ? meal.strInstructions.split(". ").filter((s) => s.trim() !== "")
      : [];
    return {
      title: meal.strMeal,
      ingredients,
      steps,
      image: meal.strMealThumb,
      video: meal.strYoutube,
    };
  };

  const handleGenerate = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setRecipe(null);

    try {
      const cleanedQuery = query
        .toLowerCase()
        .replace(/\?/g, "")
        .replace(/how to make|recipe|prepare|cook|make/gi, "")
        .trim();

      let data = await fetchRecipeByName(cleanedQuery);

      if (!data.meals && cleanedQuery.includes(" ")) {
        const firstWord = cleanedQuery.split(" ")[0];
        data = await fetchRecipeByName(firstWord);
      }

      if (!data.meals) {
        const ingredientData = await fetchRecipeByIngredient(cleanedQuery);
        if (ingredientData.meals?.length > 0) {
          const firstMealId = ingredientData.meals[0].idMeal;
          const detailRes = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${firstMealId}`
          );
          const detailData = await detailRes.json();
          if (detailData.meals?.[0]) {
            setRecipe(extractRecipe(detailData.meals[0]));
            setLoading(false);
            return;
          }
        }
      }

      if (!data.meals) {
        const allMealsRes = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        );
        const allMealsData = await allMealsRes.json();

        if (allMealsData.meals) {
          const fuse = new Fuse(allMealsData.meals, {
            keys: ["strMeal"],
            threshold: 0.4,
          });

          const result = fuse.search(cleanedQuery);
          if (result.length > 0) {
            setRecipe(extractRecipe(result[0].item));
            setLoading(false);
            return;
          }
        }
      }

      if (data.meals?.[0]) {
        setRecipe(extractRecipe(data.meals[0]));
      }
    } catch (err) {
      console.error("Error fetching recipe:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateRecipe = () => {
    if (!user) {
      router.push("/signin?from=/aimeal");
    } else {
      handleGenerate();
    }
  };

  return (
    <>
      <Head>
        <title>AI Cuisine Generator - Cuisinely</title>
        <meta
          name="description"
          content="Generate recipes using AI with Cuisinely. Enter any dish or ingredient and get step-by-step instructions, ingredients list, and video tutorials."
        />
        <meta
          name="keywords"
          content="AI recipes, recipe generator, meal planner, cooking tips, Cuisinely"
        />
      </Head>

      <div className="min-h-screen bg-gray-100  mt-20">

      
        <h2 className="text-3xl font-bold text-center my-6 pt-20">🤖 AI Cuisine Generator</h2>

        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow space-y-4">
          <input
            type="text"
            placeholder="e.g. Paneer Pizza"
            className="w-full border rounded px-4 py-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleGenerateRecipe}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full cursor-pointer"
          >
            {loading ? "Generating..." : "Generate Recipe"}
          </button>

          {recipe && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold">{recipe.title}</h3>

              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}

              {recipe.video && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2">📺 Watch Tutorial:</h4>
                  <iframe
                    width="100%"
                    height="315"
                    src={recipe.video.replace("watch?v=", "embed/")}
                    title="Recipe Video"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              )}

              <div>
                <h4 className="font-medium">🧂 Ingredients:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {recipe.ingredients.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium">👨‍🍳 Steps:</h4>
                <ol className="list-decimal list-inside text-gray-700">
                  {recipe.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {!loading && !recipe && query && (
            <p className="text-red-500 text-center">No recipe found!</p>
          )}
        </div>

      </div>
    </>
  );
}

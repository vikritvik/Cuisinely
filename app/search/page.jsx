 "use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const router = useRouter();
  const [user] = useAuthState(auth);

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRecipeByName = async (name) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
        name
      )}`
    );
    return res.json();
  };

  const fetchRecipeByIngredient = async (ingredient) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        ingredient
      )}`
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

  useEffect(() => {
    if (!query.trim()) return;

    const handleSearch = async () => {
      if (!user) {
        router.push(`/signin?from=/search?query=${query}`);
        return;
      }

      setLoading(true);
      setRecipe(null);

      try {
        const cleanedQuery = query
          .toLowerCase()
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

    handleSearch();
  }, [query, user, router]);

  return (
    <div className="bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-8 sm:py-12 mt-15 mb-5">
      {loading && <p className="text-center text-lg">Loading...</p>}

      {recipe && (
        <div className="mt-6 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center">
            {recipe.title}
          </h3>

          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-md"
            />
          )}

          {recipe.video && (
            <div className="mt-4">
              <h4 className="font-medium mb-2 text-lg">📺 Watch Tutorial:</h4>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={recipe.video.replace("watch?v=", "embed/")}
                  title="Recipe Video"
                  className="w-full h-64 sm:h-96 rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          <div>
            <h4 className="font-medium text-lg mb-2">🧂 Ingredients:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-2">👨‍🍳 Steps:</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {!loading && !recipe && query && (
        <p className="text-red-500 text-center text-lg">No recipe found!</p>
      )}
    </div>
  );
}

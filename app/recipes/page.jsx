 "use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RecipesPageClient() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth() || {};
  const router = useRouter();

  useEffect(() => {
    async function loadMeals() {
      const categories = [
        "Beef",
        "Chicken",
        "Dessert",
        "Lamb",
        "Pasta",
        "Pork",
        "Seafood",
        "Vegetarian",
      ];
      let all = [];
      for (const c of categories) {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`
        );
        const data = await res.json();
        if (data.meals) all = all.concat(data.meals);
      }
      setMeals(all.sort(() => 0.5 - Math.random()).slice(0, 40));
      setLoading(false);
    }
    loadMeals();
  }, []);

  // Fetch meal details by ID
  const viewDetails = async (idMeal) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = await res.json();
    setSelectedMeal(data.meals[0]);
  };

  // Extract ingredients + measures
  const getIngredients = (meal) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="p-8 mt-25 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">World Recipes</h1>

      {loading ? (
        <p>Loading...</p>
      ) : !selectedMeal ? (
        <div className="grid md:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-lg p-1 border border-blue-100 "
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-md w-full h-55 object-cover"
              />
              <p className="my-3 font-medium ">{meal.strMeal}</p>
              <button
                className="mx-1 my-1 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 text-black font-medium rounded-md px-4 py-1.5 cursor-pointer"
                onClick={() => viewDetails(meal.idMeal)}
              >
                Recipe
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-2xl text-left">
          <button
            className="mb-4 px-2 py-1 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 cursor-pointer border border-blue-300 rounded-md "
            onClick={() => setSelectedMeal(null)}
          >
            ← Back
          </button>
        
          <h2 className="text-2xl font-bold mb-4">{selectedMeal.strMeal}</h2>

          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="rounded-lg  mb-4 w-120 h-80"
          />

          <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside mb-4">
            {getIngredients(selectedMeal).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
          <p className="whitespace-pre-line mb-4">
            {selectedMeal.strInstructions}
          </p>

          {selectedMeal.strYoutube && (
            <div className="my-3">
              <h3 className="text-xl font-semibold mb-2">Video Tutorial:</h3>
              <iframe
                className="w-full h-64 rounded-lg"
                src={`https://www.youtube.com/embed/${
                  selectedMeal.strYoutube.split("v=")[1]
                }`}
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

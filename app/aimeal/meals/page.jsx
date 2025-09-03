
"use client";
import { useState } from "react";

export default function MealsPage() {
  const [meals, setMeals] = useState([
    { id: 1, name: "Oatmeal", type: "Breakfast", calories: 250 },
    { id: 2, name: "Paneer Curry", type: "Lunch", calories: 450 },
    { id: 3, name: "Veg Pasta", type: "Dinner", calories: 400 },
  ]);

  const [newMeal, setNewMeal] = useState({ name: "", type: "", calories: "" });

  const handleAddMeal = () => {
    if (!newMeal.name || !newMeal.type) return;
    setMeals([...meals, { ...newMeal, id: Date.now() }]);
    setNewMeal({ name: "", type: "", calories: "" });
  };

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">🍽️ Meals Database</h1>

      {/* Add new meal form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Meal</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Meal Name"
            value={newMeal.name}
            onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
            className="border p-2 rounded"
          />
          <select
            value={newMeal.type}
            onChange={(e) => setNewMeal({ ...newMeal, type: e.target.value })}
            className="border p-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <input
            type="number"
            placeholder="Calories"
            value={newMeal.calories}
            onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddMeal}
          className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg"
        >
          Add Meal
        </button>
      </div>

      {/* Meal List */}
      <div className="grid md:grid-cols-2 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="bg-emerald-50 p-4 rounded-xl border shadow-sm"
          >
            <h3 className="text-xl font-bold">{meal.name}</h3>
            <p className="text-gray-600">{meal.type}</p>
            <p className="text-gray-700">{meal.calories} kcal</p>
          </div>
        ))}
      </div>
    </main>
  );
}

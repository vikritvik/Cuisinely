import React from 'react';

const VegBiryani = () => {
  const ingredients = [
    "2 cups Basmati Rice (soaked for 30 mins)",
    "2 cups mixed vegetables (carrots, peas, beans, potatoes)",
    "1 large onion, thinly sliced",
    "1/2 cup thick yogurt (curd)",
    "1 tsp Ginger-Garlic paste",
    "Spices: 1 bay leaf, 2 cardamom pods, 1-inch cinnamon, 3 cloves",
    "1 tsp Shahi Biryani Masala",
    "Fresh coriander and mint leaves",
    "2 tbsp Ghee or oil",
    "Saffron strands soaked in 2 tbsp warm milk"
  ];

  const steps = [
    "Parboil the rice with whole spices (bay leaf, cinnamon, cloves) until it is 70% cooked. Drain and set aside.",
    "In a large pot, heat ghee and sauté onions until golden brown. Remove half for garnishing.",
    "Add ginger-garlic paste and mixed vegetables. Sauté for 5 minutes.",
    "Whisk the yogurt with biryani masala and add it to the vegetables. Cook until the oil separates.",
    "Layer the parboiled rice over the vegetable gravy. Sprinkle mint, coriander, fried onions, and saffron milk.",
    "Seal the pot with a tight lid (Dum process) and cook on low heat for 15-20 minutes.",
    "Fluff gently and serve hot with Raita."
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-orange-600 p-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Hyderabadi Veg Biryani</h1>
          <p className="italic text-orange-100">A fragrant, slow-cooked aromatic rice dish</p>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sidebar: Info & Ingredients */}
          <div className="md:col-span-1 border-r border-gray-100 pr-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Details</h3>
            <div className="text-sm text-gray-600 space-y-2 mb-8">
              <p>⏱ **Prep:** 20 mins</p>
              <p>🔥 **Cook:** 40 mins</p>
              <p>🍽 **Serves:** 4 People</p>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-800">Ingredients</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {ingredients.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>

          {/* Main Content: Instructions */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-orange-200 pb-2">
              Instructions
            </h3>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-none w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
            
            <div className="mt-10 p-4 bg-yellow-50 rounded-md border-l-4 border-yellow-400">
              <p className="text-sm text-yellow-800">
                <strong>Pro Tip:</strong> Always use long-grain Basmati rice for the best texture. Avoid over-stirring the rice to prevent the grains from breaking.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VegBiryani;
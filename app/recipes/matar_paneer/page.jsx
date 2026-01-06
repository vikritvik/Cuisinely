import React from 'react';

const MatarPaneerPage = () => {
  const ingredients = [
    { name: "Paneer (Cottage Cheese)", qty: "250g", note: "Cubed" },
    { name: "Green Peas (Matar)", qty: "1 cup", note: "Fresh or Frozen" },
    { name: "Onions", qty: "2 large", note: "Finely chopped" },
    { name: "Tomato Puree", qty: "1.5 cups", note: "Freshly blended" },
    { name: "Ginger-Garlic Paste", qty: "1 tbsp", note: "" },
    { name: "Cumin Seeds", qty: "1 tsp", note: "" },
    { name: "Spices", qty: "Turmeric, Red Chili, Coriander Powder", note: "1 tsp each" },
    { name: "Garam Masala", qty: "1/2 tsp", note: "Add at the end" },
    { name: "Heavy Cream / Malai", qty: "2 tbsp", note: "Optional for richness" }
  ];

  const steps = [
    {
      title: "Paneer Prep",
      text: "Optional: Lightly pan-fry the paneer cubes in 1 tsp ghee until edges are golden. Soak them in warm water for 5 mins to keep them soft."
    },
    {
      title: "The Masala Base",
      text: "Heat oil in a pan. Add cumin seeds. Once they splutter, add onions and sauté until golden brown. Add ginger-garlic paste and sauté for 1 min."
    },
    {
      title: "Tomato Infusion",
      text: "Pour in the tomato puree. Add turmeric, chili powder, and coriander powder. Cook on medium heat until the oil begins to separate from the masala."
    },
    {
      title: "Simmering the Peas",
      text: "Add the green peas and 1 cup of water. Cover and cook for 5-8 minutes until the peas are tender."
    },
    {
      title: "Final Assembly",
      text: "Add the paneer cubes and salt. Simmer for 2-3 minutes. If using cream, stir it in now on low heat."
    },
    {
      title: "The Garnish",
      text: "Sprinkle Garam Masala and freshly chopped coriander. Serve hot with a swirl of cream."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffdfb] text-slate-800 pb-20">
      {/* Decorative Header */}
      <div className="bg-[#922b21] py-20 px-6 text-center shadow-lg">
        <h1 className="text-white text-5xl md:text-7xl font-serif font-black tracking-tight">
          Matar <span className="text-[#f4d03f]">Paneer</span>
        </h1>
        <p className="text-red-100 mt-4 text-lg font-light tracking-widest uppercase">
          The Heart of North Indian Comfort
        </p>
      </div>

      <main className="max-w-6xl mx-auto px-6 -mt-10">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Ingredients Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-red-50 sticky top-10">
              <h3 className="text-2xl font-bold text-[#922b21] mb-6 border-b pb-2">Ingredients</h3>
              <ul className="space-y-5">
                {ingredients.map((ing, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-sm font-bold text-slate-700">{ing.name}</span>
                    <span className="text-xs text-slate-400 italic">{ing.qty} {ing.note && `(${ing.note})`}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cooking Process */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-red-50">
              <h2 className="text-3xl font-black mb-12 flex items-center gap-4 text-slate-900">
                The Method <div className="h-1 flex-grow bg-red-50"></div>
              </h2>
              
              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className="flex-none">
                      <span className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center font-black text-xl border-b-4 border-green-200">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2 tracking-tight uppercase">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro-Tip Highlight */}
              <div className="mt-16 p-8 bg-green-50 rounded-2xl border-l-8 border-green-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🌱</span>
                  <h4 className="font-bold text-green-800">For Vibrantly Green Peas</h4>
                </div>
                <p className="text-green-700 text-sm italic">
                  If using fresh peas, add a pinch of sugar while boiling them. This helps retain their bright green color even after they are mixed into the red tomato gravy!
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer Branding */}
      <footer className="mt-20 text-center border-t border-red-50 pt-10 opacity-30">
        <p className="font-serif">Best served with Tandoori Roti or Jeera Rice.</p>
      </footer>
    </div>
  );
};

export default MatarPaneerPage;
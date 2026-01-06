import React from 'react';

const PaneerSabji = () => {
  const ingredients = [
    { item: "Fresh Paneer cubes", qty: "250g" },
    { item: "Ripe Tomatoes (pureed)", qty: "3 large" },
    { item: "Cashews (soaked)", qty: "10-12" },
    { item: "Butter (Amul preferred)", qty: "2 tbsp" },
    { item: "Fresh Cream", qty: "1/4 cup" },
    { item: "Kasuri Methi (Dried Fenugreek)", qty: "1 tbsp" },
    { item: "Ginger-Garlic Paste", qty: "1 tbsp" }
  ];

  const instructions = [
    { step: "The Velvet Base", text: "Blend the soaked cashews with a little water to make a smooth paste. Puree the tomatoes separately." },
    { step: "Sauté & Aromatics", text: "Melt butter in a pan with a drop of oil. Add ginger-garlic paste and sauté until the raw smell disappears." },
    { step: "The Gravy", text: "Add tomato puree and cook until the fat separates. Stir in the cashew paste and cook for another 2 minutes on low heat." },
    { step: "Spice Infusion", text: "Add red chili powder, garam masala, and salt. Thin the gravy with a little warm water to reach your desired consistency." },
    { step: "The Main Event", text: "Gently fold in the paneer cubes. Do not overcook or the paneer will become rubbery." },
    { step: "The Shahi Finish", text: "Crush Kasuri Methi between your palms and sprinkle over. Stir in the fresh cream and turn off the heat immediately." }
  ];

  return (
    <div className="min-h-screen bg-[#fffdfa] text-stone-800">
      {/* Hero Section */}
      <div className="bg-[#e07a5f] py-16 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Paneer Butter Masala</h1>
        <div className="flex justify-center gap-4 text-sm font-medium">
          <span className="bg-white/20 px-3 py-1 rounded-full">⏱ 30 Mins</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">🌶 Mild</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">🥦 Vegetarian</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-12">
        
        {/* Sidebar: Ingredients Card */}
        <div className="md:col-span-1">
          <div className="bg-white border-2 border-stone-100 rounded-3xl p-8 sticky top-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-[#e07a5f]">🛒</span> Shopping List
            </h3>
            <ul className="space-y-4">
              {ingredients.map((ing, i) => (
                <li key={i} className="flex flex-col border-b border-stone-50 pb-2">
                  <span className="text-stone-500 text-xs uppercase font-bold tracking-tighter">{ing.qty}</span>
                  <span className="text-stone-800 font-medium">{ing.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main: Instructions */}
        <div className="md:col-span-2 space-y-10">
          <section>
            <h2 className="text-3xl font-bold mb-8">Cooking Method</h2>
            <div className="space-y-8">
              {instructions.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-4xl font-black text-stone-100">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h4 className="font-bold text-lg text-[#3d405b] uppercase tracking-wide">{item.step}</h4>
                    <p className="text-stone-600 leading-relaxed mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Expert Tip Box */}
          <div className="bg-[#f4f1de] p-8 rounded-3xl border-2 border-dashed border-[#e07a5f]/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">💡</span>
              <h4 className="font-bold text-[#e07a5f]">Chef's Secret for Soft Paneer</h4>
            </div>
            <p className="text-stone-700 text-sm leading-relaxed">
              Before adding paneer to the gravy, soak the cubes in <strong>warm salted water</strong> for 10 minutes. This ensures they stay incredibly soft and melt-in-your-mouth even after reheating!
            </p>
          </div>
        </div>
      </main>

      {/* Footer / Serving Suggestion */}
      <footer className="text-center py-10 border-t border-stone-100">
        <p className="text-stone-400 italic">Best served with Garlic Naan or Jeera Rice.</p>
      </footer>
    </div>
  );
};

export default PaneerSabji;
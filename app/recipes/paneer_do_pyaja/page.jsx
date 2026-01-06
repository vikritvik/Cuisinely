import React from 'react';

const PaneerDoPyazaPage = () => {
  const ingredients = [
    { name: "Paneer Cubes", qty: "250g" },
    { name: "Onions (Texture 1)", qty: "2 medium", note: "Finely chopped for gravy" },
    { name: "Onions (Texture 2)", qty: "2 medium", note: "Cut into large petals/layers" },
    { name: "Tomato Puree", qty: "1 cup" },
    { name: "Whole Spices", qty: "Bay leaf, Cloves, Cardamom" },
    { name: "Kashmiri Red Chili Powder", qty: "1 tsp" },
    { name: "Kasuri Methi", qty: "1 tbsp" },
    { name: "Fresh Cream", qty: "1 tbsp", note: "Optional" }
  ];

  const recipeSteps = [
    {
      stage: "The Petal Sauté",
      details: "Heat 1 tbsp oil. Sauté the large onion petals on high heat for 2 minutes until slightly translucent but still crunchy. Remove and set aside."
    },
    {
      stage: "The Base Gravy",
      details: "In the same pan, add whole spices. Add the finely chopped onions and sauté until deep golden brown. This creates the richness of the sauce."
    },
    {
      stage: "The Masala Cook",
      details: "Add ginger-garlic paste and tomato puree. Stir in turmeric, chili powder, and coriander powder. Cook until the oil begins to leave the sides."
    },
    {
      stage: "The Union",
      details: "Fold in the paneer cubes and the sautéed onion petals. Add a splash of water and salt. Simmer for 3-4 minutes on low heat."
    },
    {
      stage: "The Final Touch",
      details: "Finish with crushed Kasuri Methi and fresh coriander. The dish is ready when the gravy is thick and coats the paneer and onion petals perfectly."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf9] text-[#2d2424]">
      {/* Bold Modern Header */}
      <div className="bg-[#5c1d1d] py-24 px-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#8b3232] rounded-full -mr-20 -mt-20 opacity-50 blur-3xl"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-none">
            PANEER <br/>
            <span className="text-[#fca5a5]">DO PYAZA</span>
          </h1>
          <p className="text-pink-100/60 mt-6 max-w-md text-lg font-medium border-l-2 border-pink-400 pl-4 uppercase tracking-widest">
            Two Textures. One Soul.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Ingredients List */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-rose-900/5 border border-rose-50">
              <h3 className="text-2xl font-black text-[#5c1d1d] mb-8 italic">The Pantry</h3>
              <div className="space-y-6">
                {ingredients.map((ing, i) => (
                  <div key={i} className="flex flex-col border-b border-rose-50 pb-3">
                    <span className="text-sm font-bold text-gray-800 uppercase tracking-tight">{ing.name}</span>
                    <span className="text-xs text-rose-400 font-semibold">{ing.qty} — {ing.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Content */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-black text-gray-900 mb-12 flex items-center gap-4">
              Step-by-Step <div className="h-2 w-2 rounded-full bg-rose-400"></div>
            </h2>
            
            <div className="space-y-12">
              {recipeSteps.map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-5xl font-black text-rose-100 group-hover:text-rose-500 transition-all duration-300">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-gray-800 uppercase tracking-widest mb-2 border-b-2 border-rose-100 inline-block">
                      {step.stage}
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-lg mt-2">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Tip */}
            <div className="mt-16 p-8 bg-[#5c1d1d] rounded-3xl text-white shadow-2xl relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-rose-400 p-2 rounded-lg">💡</span>
                <h4 className="font-bold uppercase tracking-widest text-sm">Why the double onion?</h4>
              </div>
              <p className="text-pink-100/70 text-sm leading-relaxed">
                The chopped onions melt into the gravy to give it <strong>body and sweetness</strong>, while the large petals added at the end provide a <strong>crunchy texture</strong>. This contrast is what defines a true "Do Pyaza" dish.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-10 opacity-20 font-bold tracking-[0.5em] text-xs">
        BEST SERVED WITH BUTTER KULCHA
      </footer>
    </div>
  );
};

export default PaneerDoPyazaPage;
 import React from 'react';

const BainganBhartaPage = () => {
  const ingredients = [
    { item: "Large Bharta Eggplant (Baingan)", qty: "1 (approx 500g)" },
    { item: "Garlic Cloves (whole)", qty: "4-5" },
    { item: "Mustard Oil", qty: "2 tbsp" },
    { item: "Onions (finely chopped)", qty: "2 medium" },
    { item: "Tomatoes (chopped)", qty: "2 medium" },
    { item: "Green Peas (optional)", qty: "1/4 cup" },
    { item: "Ginger-Garlic Paste", qty: "1 tbsp" },
    { item: "Green Chilies (slit)", qty: "2" },
    { item: "Spices", qty: "Turmeric, Kashmiri Mirch, Garam Masala" }
  ];

  const cookingSteps = [
    {
      title: "The Fire Roast",
      desc: "Wash and dry the eggplant. Make 4 deep slits and stuff a garlic clove into each. Rub the skin with oil. Roast directly on a gas flame, turning often, until the skin is charred and the inside is soft."
    },
    {
      title: "Peeling & Mashing",
      desc: "Once cooled, peel off the charred skin. Remove the stem and mash the pulp thoroughly with the roasted garlic. Keep the 'smoky' bits—they add the flavor!"
    },
    {
      title: "The Tadka",
      desc: "Heat mustard oil in a pan until it smokes. Add cumin seeds and onions. Sauté until golden brown. Add ginger-garlic paste and green chilies."
    },
    {
      title: "The Masala",
      desc: "Add tomatoes, turmeric, and chili powder. Cook until the tomatoes are mushy and oil separates. If using peas, add them now and cook for 2 mins."
    },
    {
      title: "The Final Sauté",
      desc: "Add the mashed eggplant pulp. Mix well with the masala. Cover and cook on low heat for 5-7 minutes so the flavors meld together."
    },
    {
      title: "The Garnish",
      desc: "Finish with a dash of Garam Masala and a generous handful of fresh coriander leaves. Serve hot with smoked ghee on top."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f10] text-zinc-300 font-sans pb-20">
      {/* Header Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-[#2e1065] to-[#0f0f10]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs">Authentic Smoky Flavor</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mt-2 drop-shadow-2xl italic">
            Baingan <span className="text-purple-500">Bharta</span>
          </h1>
          <p className="mt-4 text-zinc-400 text-lg max-w-lg mx-auto font-light">
            Traditional fire-roasted eggplant mash infused with garlic and mustard oil.
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Sidebar: Ingredients Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#18181b] border border-zinc-800 p-8 rounded-3xl sticky top-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-purple-600 rounded-full"></span>
                Ingredients
              </h3>
              <div className="space-y-4">
                {ingredients.map((ing, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-zinc-800 pb-3">
                    <span className="text-sm text-zinc-400 leading-tight pr-4">{ing.item}</span>
                    <span className="text-xs font-mono text-purple-400 whitespace-nowrap">{ing.qty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main: Instructions */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-[#18181b] border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-10">Preparation Steps</h2>
              
              <div className="space-y-12">
                {cookingSteps.map((step, i) => (
                  <div key={i} className="relative pl-12 group">
                    <div className="absolute left-0 top-0 text-5xl font-black text-zinc-800 group-hover:text-purple-900/40 transition-colors">
                      {i + 1}
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-lg font-bold text-purple-400 uppercase tracking-widest mb-2">{step.title}</h4>
                      <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro-Tip Box */}
              <div className="mt-16 p-8 bg-purple-950/20 border border-purple-500/30 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔥</span>
                  <h4 className="font-bold text-purple-100">The Secret to the Best Smoke</h4>
                </div>
                <p className="text-sm text-purple-200/70 leading-relaxed">
                  Always use <strong>Mustard Oil</strong> for the tadka. Its pungent flavor complements the smokiness of the roasted eggplant perfectly. Also, don't wash the eggplant after roasting; use your hands or a damp paper towel to remove the skin so you don't wash away the flavor.
                </p>
              </div>
            </div>

            {/* Serving Suggestion */}
            <div className="text-center py-8 text-zinc-500 italic border-t border-zinc-800">
              Serve with hot Bajra Rotla or Phulkas and a side of cold thick curd.
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default BainganBhartaPage;
import React from 'react';

const PalakPaneerPage = () => {
  const pantry = [
    { name: "Fresh Spinach (Palak)", qty: "500g", prep: "Blanched & Pureed" },
    { name: "Paneer Cubes", qty: "250g", prep: "Fresh or lightly fried" },
    { name: "Green Chilies", qty: "2-3", prep: "Blanched with spinach" },
    { name: "Ginger-Garlic Paste", qty: "1.5 tbsp", prep: "" },
    { name: "Cumin Seeds", qty: "1 tsp", prep: "" },
    { name: "Kasuri Methi", qty: "1 tsp", prep: "Crushed" },
    { name: "Fresh Cream", qty: "2 tbsp", prep: "For finishing" },
    { name: "Lemon Juice", qty: "1 tsp", prep: "To retain green color" }
  ];

  const method = [
    {
      title: "The Blanch",
      text: "Boil water with a pinch of salt and sugar. Drop the spinach leaves in for 2 minutes, then immediately shock them in ice-cold water. This 'shocks' the chlorophyll to keep the green vibrant."
    },
    {
      title: "The Puree",
      text: "Blend the blanched spinach with green chilies into a smooth, silky paste. Do not use too much water."
    },
    {
      title: "The Tempering",
      text: "Heat ghee in a pan. Add cumin seeds. Once they crackle, add finely chopped onions and sauté until translucent. Add ginger-garlic paste and sauté until fragrant."
    },
    {
      title: "The Simmer",
      text: "Add the spinach puree, salt, and a pinch of Garam Masala. Cover and cook on low heat for 5 minutes. If it's too thick, add a splash of hot water."
    },
    {
      title: "The Final Fold",
      text: "Gently stir in the paneer cubes. Add fresh cream and crushed Kasuri Methi. Mix softly so the paneer doesn't break."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfa] text-[#1a2e1a] font-sans pb-10">
      {/* Elegant Forest Header */}
      <header className="bg-[#064e3b] pt-28 pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="text-emerald-300 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Nutrient Rich & Creamy</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white italic">
            Palak <span className="font-light text-emerald-100">Paneer</span>
          </h1>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mt-8"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-24">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Ingredients Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 border border-emerald-50 sticky top-10">
              <h3 className="text-2xl font-serif font-bold text-[#064e3b] mb-8">The Pantry</h3>
              <div className="space-y-5">
                {pantry.map((ing, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-emerald-50 pb-2">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">{ing.name}</span>
                      <span className="text-[10px] text-emerald-600/50 uppercase tracking-tighter">{ing.prep}</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-700">{ing.qty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cooking Method */}
          <div className="lg:col-span-8">
            <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-emerald-900/10">
              <h2 className="text-3xl font-serif mb-12 flex items-center gap-4">
                The Silk Process <div className="h-px flex-grow bg-emerald-100"></div>
              </h2>
              
              <div className="space-y-12">
                {method.map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-none">
                      <div className="text-4xl font-light text-emerald-200 group-hover:text-emerald-500 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-black tracking-[0.2em] uppercase mb-2 text-emerald-900">{step.title}</h4>
                      <p className="text-slate-600 leading-relaxed text-lg font-light">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Color Secret Tip */}
              <div className="mt-16 p-8 bg-[#f0fdf4] rounded-3xl border border-emerald-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🥬</div>
                <h4 className="font-bold text-emerald-900 flex items-center gap-2 mb-2">
                  How to keep it <span className="text-emerald-600 uppercase">Bright Green</span>
                </h4>
                <p className="text-sm text-emerald-800/70 leading-relaxed italic">
                  Two secrets: 1. Add a <strong>pinch of sugar</strong> to the boiling water during blanching. 2. Never cover the pan with a lid after adding the spinach puree; covering it traps acids that turn the spinach from bright green to an unappetizing brown.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-20 text-center text-emerald-900/30 text-xs font-black tracking-widest uppercase">
        Serve with Missi Roti or Garlic Naan
      </footer>
    </div>
  );
};

export default PalakPaneerPage;
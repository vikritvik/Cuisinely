import React from 'react';

const PaneerBhurjiPage = () => {
  const essentials = [
    { name: "Paneer (Fresh)", qty: "250g", prep: "Crumble by hand" },
    { name: "Onions", qty: "2 medium", prep: "Finely chopped" },
    { name: "Tomatoes", qty: "2 medium", prep: "Finely chopped" },
    { name: "Green Chilies", qty: "2-3", prep: "Finely chopped" },
    { name: "Ginger-Garlic", qty: "1 tbsp", prep: "Crushed/Paste" },
    { name: "Butter/Ghee", qty: "2 tbsp", prep: "For authentic taste" },
    { name: "Spices", qty: "Turmeric, Pav Bhaji Masala (Secret!)", prep: "1/2 tsp each" }
  ];

  const cookingFlow = [
    {
      title: "The Sizzle",
      desc: "Heat butter or oil in a pan. Add cumin seeds and let them crackle. Add the chopped onions and sauté until they turn translucent and soft."
    },
    {
      title: "The Masala Mix",
      desc: "Add ginger-garlic paste and green chilies. Sauté for a minute, then add the tomatoes. Cook until the tomatoes turn mushy and leave oil."
    },
    {
      title: "Spice it Up",
      desc: "Add turmeric, red chili powder, and coriander powder. Pro Tip: Add a teaspoon of Pav Bhaji Masala here for that street-style flavor!"
    },
    {
      title: "The Scramble",
      desc: "Add the crumbled paneer. Mix gently so the spices coat the paneer evenly. Do not overcook—2 to 3 minutes is enough to keep it moist."
    },
    {
      title: "The Finish",
      desc: "Turn off the heat. Add a splash of fresh cream (optional) and lots of freshly chopped coriander. Serve hot."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffdf0] text-[#422006] font-sans pb-20">
      {/* Header with High Energy */}
      <header className="bg-[#f59e0b] pt-24 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-50 -mr-20 -mt-10"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            15-Minute Breakfast/Dinner
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mt-6 tracking-tighter italic">
            Paneer <br/><span className="text-[#422006]">Bhurji</span>
          </h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Ingredients Column */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-yellow-900/10 border border-yellow-100 sticky top-10">
              <h3 className="text-xl font-black mb-8 border-b-4 border-yellow-500 pb-2 inline-block">The Goods</h3>
              <div className="space-y-6">
                {essentials.map((item, i) => (
                  <div key={i} className="group">
                    <p className="font-bold text-sm uppercase tracking-tight text-gray-800">{item.name}</p>
                    <p className="text-xs text-yellow-600 font-medium">{item.qty} — {item.prep}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl shadow-yellow-900/10 border border-yellow-100">
              <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
                The Quick Hustle <div className="h-1 flex-grow bg-yellow-100"></div>
              </h2>
              
              <div className="space-y-12">
                {cookingFlow.map((step, i) => (
                  <div key={i} className="relative pl-16">
                    <div className="absolute left-0 top-0 text-5xl font-black text-yellow-100">
                      0{i + 1}
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-black text-lg mb-2 uppercase tracking-tight">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-md">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Secret Tip Box */}
              <div className="mt-16 bg-yellow-50 p-8 rounded-3xl border-2 border-dashed border-yellow-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔥</span>
                  <h4 className="font-bold text-yellow-800 uppercase text-sm">Don't Kill the Softness</h4>
                </div>
                <p className="text-yellow-900/70 text-sm leading-relaxed italic font-medium">
                  The biggest mistake with Bhurji is overcooking the paneer until it becomes rubbery. Once you add the crumbled paneer, just toss it for 2 minutes. It only needs to get warm and soak in the spices, not "cook."
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-20 text-center opacity-30 font-black tracking-widest text-xs">
        SERVE WITH BUTTERED PAV OR PARATHA
      </footer>
    </div>
  );
};

export default PaneerBhurjiPage;
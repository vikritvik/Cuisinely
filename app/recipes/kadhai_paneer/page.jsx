import React from 'react';

const KadhaiPaneer = () => {
  const kadhaiMasala = [
    { spice: "Coriander Seeds", qty: "2 tbsp" },
    { spice: "Dried Red Chilies", qty: "3-4" },
    { spice: "Black Peppercorns", qty: "1 tsp" },
    { spice: "Fennel Seeds", qty: "1/2 tsp" }
  ];

  const steps = [
    { 
      action: "Roast & Grind", 
      details: "Dry roast the coriander, chilies, pepper, and fennel. Coarsely grind them. This 'Kadhai Masala' is the secret to the dish." 
    },
    { 
      action: "The Sizzle", 
      details: "Heat oil in a heavy Kadhai. Sauté cubed onions and bell peppers (capsicum) on high heat for 2 mins. Keep them crunchy; don't overcook!" 
    },
    { 
      action: "The Base", 
      details: "In the same pan, sauté ginger-garlic paste and tomato puree. Add turmeric and red chili powder. Cook until the oil separates." 
    },
    { 
      action: "Toss", 
      details: "Add the roasted Kadhai Masala and paneer cubes. Toss gently to coat everything in the thick, chunky gravy." 
    },
    { 
      action: "The Finish", 
      details: "Garnish with a mountain of ginger juliennes, fresh coriander, and a splash of heavy cream if you want it restaurant-style." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-300 font-sans">
      {/* Header with Iron Texture Effect */}
      <div className="relative py-24 bg-[#1a1a1a] border-b border-orange-900/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-orange-500 font-mono tracking-tighter uppercase text-sm font-bold">Wok-Tossed Perfection</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mt-4 tracking-tight">
            Kadhai <span className="text-orange-500">Paneer</span>
          </h1>
          <p className="text-zinc-500 text-xl mt-4 max-w-xl">Chunky, spicy, and smoky. The definitive North Indian stir-fry.</p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: The Spice Grind */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-6">Signature Masala</h3>
              <ul className="space-y-4">
                {kadhaiMasala.map((item, i) => (
                  <li key={i} className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-100">{item.spice}</span>
                    <span className="text-orange-400 font-mono">{item.qty}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-orange-500/5 border border-orange-500/20 rounded-lg">
                <p className="text-xs text-orange-200/70 italic leading-relaxed">
                  Tip: Coarsely grind the spices. Do not make a fine powder—the texture is what makes it "Kadhai" style.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-none">
                    <div className="text-5xl font-black text-zinc-800 group-hover:text-orange-500/20 transition-colors italic">
                      {i + 1}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-white mb-2 tracking-wide uppercase">{step.action}</h4>
                    <p className="text-zinc-400 leading-relaxed text-lg">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Serving Section */}
            <div className="mt-20 flex flex-wrap gap-4 items-center p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
                <span className="text-white font-bold text-sm uppercase">Pairs Best With:</span>
                {["Butter Naan", "Tandoori Roti", "Laccha Paratha"].map(item => (
                    <span key={item} className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-400 text-xs hover:bg-orange-500 hover:text-white transition-all cursor-default">
                        {item}
                    </span>
                ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default KadhaiPaneer;
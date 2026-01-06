 import React from 'react';

const AlooGobiPage = () => {
  const pantry = [
    { name: "Cauliflower (Gobi)", qty: "1 medium", note: "Cut into medium florets" },
    { name: "Potatoes (Aloo)", qty: "2 large", note: "Peeled and cubed" },
    { name: "Ginger (Adrak)", qty: "2-inch piece", note: "Half julienned, half paste" },
    { name: "Green Chilies", qty: "2", note: "Slit lengthwise" },
    { name: "Spices", qty: "Turmeric, Red Chili, Coriander Powder", note: "The holy trinity" },
    { name: "Amchur (Mango Powder)", qty: "1 tsp", note: "For that tangy kick" },
    { name: "Cumin Seeds", qty: "1 tsp", note: "For the tadka" },
    { name: "Kasoori Methi", qty: "1 tbsp", note: "Crushed for aroma" }
  ];

  const steps = [
    {
      title: "The Crispy Start",
      text: "Heat oil in a heavy-bottomed pan. Shallow fry the cauliflower florets and potato cubes on medium-high heat until they develop golden spots. Remove and set aside. (This prevents mushiness!)"
    },
    {
      title: "The Aromatics",
      text: "In the same oil, add cumin seeds. When they splutter, add the ginger-garlic paste and green chilies. Sauté until the raw smell disappears."
    },
    {
      title: "The Spice Base",
      text: "Lower the heat. Add turmeric, red chili powder, and coriander powder. Add a splash of water so the spices don't burn, and cook until oil separates."
    },
    {
      title: "The Toss",
      text: "Add the fried aloo and gobi back to the pan. Season with salt. Toss gently to coat every floret in the masala."
    },
    {
      title: "Low & Slow",
      text: "Cover and cook on low heat for 8-10 minutes. Do not add water; let the veggies steam in their own moisture. Stir once gently halfway through."
    },
    {
      title: "The Final Sizzle",
      text: "Remove the lid. Add amchur, kasoori methi, and the ginger juliennes. Turn up the heat for 2 minutes for a roasted finish. Garnish with fresh cilantro."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffbf2] text-[#45322e] font-sans pb-20">
      {/* Sun-Drenched Header */}
      <header className="bg-[#eab308] pt-24 pb-30 px-6 relative overflow-hidden mb-10">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="bg-[#45322e] text-[#fef3c7] px-4 py-1 rounded text-xs font-bold uppercase tracking-widest">
            Traditional Dry Sabji
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mt-4 tracking-tighter uppercase drop-shadow-md">
            Aloo  <span className="text-[#45322e]">Gobi</span>
          </h1>
          <p className="mt-6 text-yellow-900/80 text-xl max-w-lg font-medium italic">
            "Golden florets of cauliflower and tender potatoes, infused with punchy ginger."
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Ingredients sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-[#eab308] sticky top-10">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b pb-4">The Produce</h3>
              <div className="space-y-6">
                {pantry.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">{item.name}</span>
                    <span className="text-xs text-yellow-600 font-mono">{item.qty} — {item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Instructions Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-yellow-50">
              <h2 className="text-4xl font-black text-[#45322e] mb-12 flex items-center gap-4 uppercase tracking-tighter italic">
                The Method <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>
              </h2>
              
              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="group flex gap-8">
                    <div className="flex-none">
                      <div className="text-5xl font-black text-yellow-100 group-hover:text-yellow-500 transition-colors">
                        {i + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-gray-800 uppercase tracking-widest mb-2 italic">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 leading-relaxed text-lg">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro-Tip Highlight */}
              <div className="mt-16 p-8 bg-[#fef3c7] rounded-[2rem] border-2 border-dashed border-yellow-400 relative">
                <div className="absolute -top-4 left-8 bg-[#45322e] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase">
                  Expert Insight
                </div>
                <h4 className="font-bold text-yellow-900 mb-2">Avoid the "Mushy" Disaster</h4>
                <p className="text-yellow-800 text-sm leading-relaxed">
                  Never add water to Aloo Gobi while it's simmering under a lid. The steam trapped inside is enough to cook the cauliflower. Adding water turns the florets into a mash. For that restaurant-style texture, <strong>fry the florets separately first</strong> until they have a golden crust.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-20 py-10 text-center text-gray-400 text-xs font-black tracking-[0.4em] uppercase">
        Perfect with Dal Tadka and hot Chapatis
      </footer>
    </div>
  );
};

export default AlooGobiPage;
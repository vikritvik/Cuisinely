import React from 'react';

const PaneerBiryani = () => {
  const marinade = ["250g Paneer cubes", "1/2 cup Greek yogurt", "1 tbsp Kashmiri Red Chili powder", "1/2 tsp Turmeric", "1 tsp Garam Masala"];
  const prepItems = ["3 cups Basmati Rice", "2 large Fried Onions (Birista)", "Whole Spices (Cloves, Star Anise, Mace)", "Saffron water", "Fresh Mint & Cilantro"];

  const steps = [
    { title: "Marinate", desc: "Mix paneer with yogurt and spices. Let it sit for 20 minutes to absorb flavors." },
    { title: "Sear", desc: "Pan-fry the paneer cubes until golden brown. This prevents them from getting soggy in the rice." },
    { title: "Rice Prep", desc: "Cook rice with star anise and mace until 80% done. It should have a slight 'bite'." },
    { title: "Layering", desc: "Create alternating layers of paneer masala, rice, fried onions, and fresh mint." },
    { title: "Infuse", desc: "Pour saffron water and a drizzle of ghee over the top. Seal with foil." }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <span className="text-amber-400 uppercase tracking-widest text-sm font-bold">Premium Vegetarian</span>
          <h1 className="text-5xl md:text-7xl font-serif mt-2">Paneer Biryani</h1>
          <div className="mt-6 flex justify-center gap-6 text-amber-200">
            <span>🔥 High Protein</span>
            <span>⏱ 50 Mins</span>
            <span>🌶 Medium Spicy</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Ingredients Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">The Marinade</h3>
                <ul className="space-y-4">
                  {marinade.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">For the Pot</h3>
                <ul className="space-y-4">
                  {prepItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Steps Column */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
              The Process <div className="h-1 flex-grow bg-slate-800"></div>
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="group relative pl-12 pb-8 border-l-2 border-slate-700 last:border-0">
                  <div className="absolute left-[-13px] top-0 w-6 h-6 bg-amber-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>
                  <h4 className="text-xl font-bold text-amber-100 mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-lg leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaneerBiryani;
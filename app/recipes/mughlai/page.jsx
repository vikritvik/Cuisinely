import React from 'react';

const MughlaiBiryani = () => {
  const richIngredients = [
    { name: "Cashew & Almond Paste", purpose: "For the velvety base" },
    { name: "Saffron & Warm Cream", purpose: "For the royal golden hue" },
    { name: "Rose & Kewra Water", purpose: "For the signature floral aroma" },
    { name: "Sultanas & Pomegranate", purpose: "For bursts of sweetness" }
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf2] text-[#2d4635] font-serif">
      {/* Elegant Header */}
      <nav className="py-6 px-10 flex justify-between items-center border-b border-emerald-100 bg-white">
        <span className="text-sm tracking-[0.4em] uppercase text-emerald-800">The Imperial Kitchen</span>
        <div className="h-px w-20 bg-emerald-800"></div>
      </nav>

      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Artistic Title & Description */}
          <div className="lg:w-2/5">
            <h1 className="text-7xl font-light mb-6">Shahi <br/><span className="font-bold text-emerald-900">Mughlai</span></h1>
            <p className="text-xl text-emerald-700/80 leading-relaxed mb-8 italic">
              "A culinary masterpiece from the royal courts of the Mughal Empire, defined by its mild spices and rich, nutty aromas."
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-emerald-900">Flavor Palette</h4>
              <div className="flex gap-2">
                {["Mild", "Creamy", "Aromatic", "Nutty"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The Recipe Components */}
          <div className="lg:w-3/5 space-y-12">
            
            {/* Rich Ingredients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {richIngredients.map((ing, i) => (
                <div key={i} className="p-6 bg-white border border-emerald-50 shadow-sm rounded-xl">
                  <h5 className="font-bold text-lg text-emerald-900">{ing.name}</h5>
                  <p className="text-sm text-emerald-600 mt-1">{ing.purpose}</p>
                </div>
              ))}
            </div>

            {/* Steps with a "Scroll" feel */}
            <div className="bg-emerald-900 text-emerald-50 p-10 rounded-2xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl">🕌</div>
               <h3 className="text-2xl mb-8 border-b border-emerald-700 pb-4">The Imperial Method</h3>
               <div className="space-y-8">
                 <div className="flex gap-6">
                   <span className="text-yellow-400 font-bold">I.</span>
                   <p>Prepare a white gravy using onions, cashews, and melon seeds. This ensures the biryani is creamy rather than fiery.</p>
                 </div>
                 <div className="flex gap-6">
                   <span className="text-yellow-400 font-bold">II.</span>
                   <p>Infuse the rice with whole white peppercorns and mace to keep the color pristine and white.</p>
                 </div>
                 <div className="flex gap-6">
                   <span className="text-yellow-400 font-bold">III.</span>
                   <p>Layer with heavy cream and ghee. Finish with a generous garnish of fried nuts and raisins for a crunchy texture.</p>
                 </div>
               </div>
            </div>

            {/* Chef's Note */}
            <div className="border-2 border-dashed border-emerald-200 p-6 rounded-lg bg-emerald-50/50">
              <p className="text-sm leading-relaxed">
                <strong>Chef's Note:</strong> Mughlai Biryani relies on <em>White Pepper</em> instead of Red Chili to maintain its delicate flavor profile and lighter aesthetic.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MughlaiBiryani;
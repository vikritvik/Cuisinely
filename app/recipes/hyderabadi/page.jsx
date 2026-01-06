import React from 'react';

const HyderabadiBiryani = () => {
  const spices = [
    { name: "Kashmiri Mirch", level: "80%" },
    { name: "Saffron (Kesar)", level: "100%" },
    { name: "Cinnamon & Cloves", level: "60%" },
    { name: "Shahi Jeera", level: "90%" }
  ];

  const layerIngredients = [
    "Saffron-infused whole milk",
    "Caramelized onions (Birista)",
    "Freshly pounded ginger-garlic paste",
    "Hand-torn mint and cilantro",
    "Cold-pressed peanut oil & desi ghee"
  ];

  return (
    <div className="min-h-screen bg-[#1a0b2e] text-[#f3e5f5]">
      {/* Decorative Top Border */}
      <div className="h-2 bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600"></div>

      {/* Hero Header */}
      <div className="py-20 px-6 text-center">
        <h2 className="text-yellow-500 tracking-[0.3em] uppercase text-sm font-bold mb-4">Nizam's Legacy</h2>
        <h1 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 font-bold">
          Hyderabadi
        </h1>
        <p className="text-2xl font-light italic text-yellow-100/70 mt-2">The Gold Standard of Biryani</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 pb-20">
        
        {/* Left Column: Flavor & Layers */}
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-serif text-yellow-500 mb-6 border-l-4 border-yellow-600 pl-4">Aromatic Profile</h3>
            <div className="grid grid-cols-2 gap-4">
              {spices.map((spice, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <p className="text-xs uppercase text-gray-400">{spice.name}</p>
                  <div className="w-full bg-gray-700 h-1.5 mt-2 rounded-full overflow-hidden">
                    <div className="bg-yellow-500 h-full" style={{ width: spice.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#2d1b4d] to-[#1a0b2e] p-8 rounded-3xl border border-yellow-900/50 shadow-2xl">
            <h3 className="text-2xl font-serif text-yellow-500 mb-4">The Secrets of the Layer</h3>
            <ul className="space-y-4">
              {layerIngredients.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-yellow-600 text-xl">✦</span>
                  <p className="text-lg text-purple-100">{item}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column: The Dum Technique */}
        <div className="relative">
          <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif text-yellow-500 mb-8">The Dum Process</h3>
            <div className="space-y-10">
              <div className="group">
                <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">1. The Marination</h4>
                <p className="text-purple-200/80 leading-relaxed mt-2">
                  The vegetables (or protein) must be marinated in sour curd and raw papaya paste (optional) to ensure they cook through during the slow steam.
                </p>
              </div>
              <div className="group">
                <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">2. The Grain Precision</h4>
                <p className="text-purple-200/80 leading-relaxed mt-2">
                  Rice is added in three stages: bottom layer (50% cooked), middle layer (70% cooked), and top layer (90% cooked). This ensures uniform texture.
                </p>
              </div>
              <div className="group">
                <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">3. The Final Steam</h4>
                <p className="text-purple-200/80 leading-relaxed mt-2">
                  Seal the vessel with dough. Start on high heat for 5 minutes until steam builds, then move to a 'Tawa' on the lowest flame for 25 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Signature Section */}
      <div className="bg-yellow-600 text-black py-4 text-center font-bold tracking-tighter uppercase">
        Always served with Mirchi ka Salan & Onion Raita
      </div>
    </div>
  );
};

export default HyderabadiBiryani;
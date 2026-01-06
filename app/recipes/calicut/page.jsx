import React from 'react';

const CalicutBiryani = () => {
  const coastalSpices = [
    { name: "Jeerakasala Rice", desc: "Short-grain, aromatic 'Khaima' rice" },
    { name: "Malabar Garam Masala", desc: "Heavy on fennel and star anise" },
    { name: "Coconut Oil / Ghee", desc: "The traditional coastal fat base" },
    { name: "Cashews & Kismis", desc: "Golden fried for the signature crunch" }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f1] text-[#2d3a2a]">
      {/* Coastal Header */}
      <div className="h-64 bg-[#1a3a32] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]"></div>
        <div className="text-center z-10">
          <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Malabar <span className="text-lime-400">Calicut</span>
          </h1>
          <p className="text-lime-100/60 tracking-[0.3em] text-xs mt-2 font-bold">The Spice Coast Secret</p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto -mt-12 relative z-20 px-4 pb-20">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-12">
          
          {/* Left: The Produce (Sidebar) */}
          <div className="md:col-span-4 bg-[#fbfdfa] p-10 border-r border-emerald-50">
            <h3 className="text-emerald-900 font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-6 h-1 bg-lime-500"></span> Ingredients
            </h3>
            <div className="space-y-8">
              {coastalSpices.map((spice, i) => (
                <div key={i}>
                  <p className="font-bold text-emerald-800 text-sm uppercase">{spice.name}</p>
                  <p className="text-xs text-emerald-600/70 italic">{spice.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-emerald-900 rounded-2xl text-white">
              <p className="text-xs leading-relaxed">
                <strong className="text-lime-400">Note:</strong> Unlike North Indian biryanis, we use green chilies for heat and tomatoes for the masala base.
              </p>
            </div>
          </div>

          {/* Right: The Method */}
          <div className="md:col-span-8 p-10 md:p-16">
            <h2 className="text-3xl font-bold text-emerald-900 mb-10">The Malabar Method</h2>
            
            <div className="space-y-12">
              <section className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl font-black text-lime-500/20">01</span>
                  <h4 className="text-lg font-bold">The Ghee Rice (Neychoru)</h4>
                </div>
                <p className="text-gray-600 pl-12 leading-relaxed">
                  Sauté the Jeerakasala rice in ghee with cloves, cardamom, and cinnamon. Boil in exactly double the amount of water until fluffly.
                </p>
              </section>

              <section className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl font-black text-lime-500/20">02</span>
                  <h4 className="text-lg font-bold">The Biryani Masala</h4>
                </div>
                <p className="text-gray-600 pl-12 leading-relaxed">
                  Crush green chilies, ginger, and garlic. Sauté onions until translucent, add tomatoes and the crushed paste. Cook the veggies until the oil separates.
                </p>
              </section>

              <section className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-4xl font-black text-lime-500/20">03</span>
                  <h4 className="text-lg font-bold">The Banana Leaf Dum</h4>
                </div>
                <p className="text-gray-600 pl-12 leading-relaxed">
                  Layer the masala and rice. Top with plenty of fried onions, cashews, and raisins. Cover the pot with a <strong>banana leaf</strong> before putting on the lid for that authentic coastal aroma.
                </p>
              </section>
            </div>

            <div className="mt-16 flex items-center justify-between border-t border-gray-100 pt-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-400">Best Paired With</span>
                <span className="text-emerald-800 font-serif italic text-lg">Date Pickle & Coconut Chammanthi</span>
              </div>
              <div className="h-12 w-12 rounded-full border-2 border-lime-500 flex items-center justify-center text-lime-600 font-bold">
                7/10
                <span className="text-[8px] absolute mt-10">Spice</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CalicutBiryani;
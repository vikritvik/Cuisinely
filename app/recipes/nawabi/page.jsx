import React from 'react';

const NawabiBiryani = () => {
  const aromatics = [
    { spice: "Kewra Essence", note: "The soul of Awadh" },
    { spice: "Mace & Nutmeg", note: "For subtle warmth" },
    { spice: "Green Cardamom", note: "Floral top notes" },
    { spice: "Meetha Atar", note: "The nawabi signature" }
  ];

  const process = [
    { phase: "The Yakhni", task: "Simmer vegetables in a bouquet garni (potli) of whole spices to create a clear, fragrant broth." },
    { phase: "The Rice", task: "Cook long-grain Basmati in the yakhni broth until each grain is infused with the essence of spices." },
    { phase: "The Garnish", task: "Use only 'Birista' (golden onions) and a touch of saffron. Avoid heavy masalas to keep the color pale and elegant." }
  ];

  return (
    <div className="min-h-screen bg-[#fffcf9] text-[#4a4238] font-light">
      {/* Delicate Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>

      <main className="max-w-4xl mx-auto py-24 px-8">
        {/* Title Section */}
        <section className="text-center mb-20">
          <span className="text-[10px] tracking-[0.5em] uppercase text-pink-400 font-bold">The Art of Awadh</span>
          <h1 className="text-5xl md:text-7xl font-serif mt-4 text-[#2d2823] tracking-tight">
            Nawabi <span className="italic font-light text-pink-300">Biryani</span>
          </h1>
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className="h-px w-12 bg-pink-100"></div>
            <p className="text-sm italic text-stone-400 font-serif">A fragrance that lingers, a taste that whispers.</p>
            <div className="h-px w-12 bg-pink-100"></div>
          </div>
        </section>

        <div className="grid md:grid-cols-5 gap-16">
          {/* Aromatics Sidebar */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h3 className="text-lg font-serif mb-6 text-[#8a7e72] border-b border-pink-50 pb-2 italic">The Fragrant Soul</h3>
              <div className="space-y-6">
                {aromatics.map((item, i) => (
                  <div key={i} className="group">
                    <p className="text-xs uppercase tracking-widest text-pink-400 font-bold">{item.spice}</p>
                    <p className="text-sm text-stone-500 italic mt-1">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-white border border-pink-50 rounded-full flex flex-col items-center justify-center text-center shadow-sm">
              <span className="text-xs uppercase tracking-tighter text-stone-400">Heat Level</span>
              <span className="text-xl font-serif text-pink-300">Ultra Mild</span>
            </div>
          </div>

          {/* Process Content */}
          <div className="md:col-span-3">
            <h3 className="text-2xl font-serif mb-10 text-[#2d2823]">The Preparation</h3>
            <div className="space-y-12">
              {process.map((step, i) => (
                <div key={i} className="relative">
                  <span className="text-4xl absolute -left-8 -top-4 opacity-5 font-serif">{i + 1}</span>
                  <h4 className="font-bold text-stone-700 mb-2 uppercase text-xs tracking-widest">{step.phase}</h4>
                  <p className="text-stone-500 leading-relaxed text-lg font-serif">
                    {step.task}
                  </p>
                </div>
              ))}
            </div>

            {/* Elegant Note */}
            <div className="mt-16 p-8 bg-stone-50 rounded-lg border-l-2 border-pink-200 italic text-stone-500 text-sm">
              "In a true Nawabi Biryani, the rice should look like jasmine flowers—white, long, and individually separate—stained only slightly by threads of pure saffron."
            </div>
          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="py-10 flex justify-center">
         <div className="w-1 h-1 rounded-full bg-pink-200 mx-1"></div>
         <div className="w-1 h-1 rounded-full bg-pink-300 mx-1"></div>
         <div className="w-1 h-1 rounded-full bg-pink-200 mx-1"></div>
      </footer>
    </div>
  );
};

export default NawabiBiryani;
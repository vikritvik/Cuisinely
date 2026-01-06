import React from 'react';

const ShahiPaneerPage = () => {
  const aromatics = [
    { item: "Paneer cubes", qty: "300g" },
    { item: "Cashews & Magaj (Melon seeds)", qty: "1/4 cup (soaked)" },
    { item: "Onion Paste", qty: "Made from boiled onions" },
    { item: "Thick Yogurt (Dahi)", qty: "1/2 cup (whisked)" },
    { item: "Saffron strands", qty: "Pinch, in warm milk" },
    { item: "Whole Spices", qty: "Cardamom, Cinnamon, Mace (Javitri)" },
    { item: "Rose Water / Kewra", qty: "2-3 drops" }
  ];

  const steps = [
    {
      title: "The White Base",
      text: "Boil onions in water for 10 mins, drain, and grind into a fine white paste. This removes the raw pungency and keeps the gravy pale and sweet."
    },
    {
      title: "Nutty Infusion",
      text: "Grind soaked cashews and melon seeds into a milky paste. This provides the signature 'Shahi' richness without using too much butter."
    },
    {
      title: "The Tempering",
      text: "Heat ghee in a pan. Add green cardamom, cinnamon, and mace. Sauté the onion paste on low heat until it stops smelling raw. Do not brown the onions!"
    },
    {
      title: "The Velvet Gravy",
      text: "Lower the heat and slowly whisk in the yogurt and nut paste. Stir continuously to prevent curdling. Add salt and white pepper (instead of black) to maintain the color."
    },
    {
      title: "Royal Assembly",
      text: "Add the paneer cubes. Pour in the saffron milk. Simmer for 3-4 minutes on the lowest heat possible. Finish with rose water or kewra essence."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfcf7] text-[#5d534a]">
      {/* Royal Silk Header */}
      <header className="relative py-24 px-6 bg-[#2c241d] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-[#d4af37] tracking-[0.5em] uppercase text-xs font-bold">The Crown Jewel of Mughlai Cuisine</span>
          <h1 className="text-5xl md:text-8xl font-serif text-[#f1e4d1] mt-4 mb-6 leading-tight">
            Shahi <span className="italic text-[#d4af37]">Paneer</span>
          </h1>
          <div className="flex justify-center items-center gap-6">
            <div className="h-px w-16 bg-[#d4af37]/30"></div>
            <p className="text-[#f1e4d1]/60 font-light italic">A delicate symphony of saffron, nuts, and cream.</p>
            <div className="h-px w-16 bg-[#d4af37]/30"></div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Ingredients Column */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-2xl border border-[#e8dfc5] shadow-sm sticky top-8">
              <h3 className="text-xl font-serif font-bold text-[#2c241d] mb-8 border-b border-[#f3eee0] pb-4">
                The Shahi Pantry
              </h3>
              <div className="space-y-5">
                {aromatics.map((ing, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-sm font-bold text-[#5d534a]">{ing.item}</span>
                    <span className="text-xs text-[#d4af37] font-mono">{ing.qty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Column */}
          <div className="lg:col-span-8">
            <div className="bg-white p-10 md:p-14 rounded-2xl border border-[#e8dfc5] shadow-sm">
              <h2 className="text-3xl font-serif text-[#2c241d] mb-12">The Royal Method</h2>
              
              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-none text-4xl font-serif text-[#e8dfc5] group-hover:text-[#d4af37] transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2c241d] uppercase tracking-widest text-xs mb-2">
                        {step.title}
                      </h4>
                      <p className="text-[#7a6f64] leading-relaxed text-lg font-serif">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Secret Tip Box */}
              <div className="mt-16 p-8 bg-[#fdfcf7] rounded-xl border-l-4 border-[#d4af37] relative">
                <div className="absolute -top-4 left-6 bg-[#2c241d] text-[#d4af37] text-[10px] font-bold px-3 py-1 rounded tracking-tighter uppercase">
                  Chef's Nuance
                </div>
                <p className="text-[#5d534a] text-sm italic leading-relaxed">
                  To keep the gravy perfectly <strong>white</strong>, avoid using red chili powder or turmeric. Use <strong>white pepper powder</strong> for heat and <strong>mace (javitri)</strong> for that distinct royal aroma. The secret is in boiling the onions first—it removes the color and the sharp bite.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <footer className="py-12 text-center text-[#5d534a]/40 text-sm font-serif">
        Exquisite when paired with Sheermal or Garlic Naan.
      </footer>
    </div>
  );
};

export default ShahiPaneerPage;
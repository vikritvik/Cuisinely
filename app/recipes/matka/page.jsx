import React from 'react';

const MatkaBiryani = () => {
  const essentials = [
    { item: "Organic Long-grain Rice", qty: "500g" },
    { item: "Mixed Seasonal Veggies", qty: "300g" },
    { item: "Thick Handi Curd", qty: "1 cup" },
    { item: "Whole Wheat Dough", qty: "for sealing" }
  ];

  const method = [
    { tag: "Preparation", detail: "Soak the clay pot (Matka) in water for an hour. This prevents it from cracking and adds moisture to the rice." },
    { tag: "The Base", detail: "Sauté spices in mustard oil inside the matka. Layer semi-cooked rice over the vegetable masala." },
    { tag: "The Seal", detail: "Apply a thick rope of wheat dough (Atta) around the rim of the matka. Press the lid down firmly to create an airtight seal." },
    { tag: "Slow Fire", detail: "Place the matka on a heavy-duty tawa (griddle). Never put clay directly on high flame. Cook for 25 mins." },
    { tag: "The Reveal", detail: "Let it rest for 10 minutes. Crack the hardened dough seal to release the trapped steam and aroma." }
  ];

  return (
    <div className="min-h-screen bg-[#fdf6e3] text-[#5d4037] pb-20">
      {/* Rustic Header */}
      <header className="py-16 px-6 text-center border-b border-orange-200 bg-[#faf3e0]">
        <div className="inline-block px-4 py-1 border border-orange-800 text-orange-800 text-xs tracking-widest uppercase mb-4">
          Authentic Dum Cooking
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-black italic text-[#8d6e63]">Matka Biryani</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-[#795548]">
          Earthy flavors infused through the porous walls of a traditional clay pot. 
          Slow-cooked to perfection over a gentle flame.
        </p>
      </header>

      <main className="max-w-5xl mx-auto mt-12 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: Ingredient Parchment */}
          <section className="bg-[#fff9f0] p-10 shadow-inner border border-orange-100 rounded-br-[80px]">
            <h2 className="text-3xl font-serif mb-8 border-b-2 border-orange-800 inline-block">The Essentials</h2>
            <div className="space-y-6">
              {essentials.map((obj, i) => (
                <div key={i} className="flex justify-between border-b border-dashed border-orange-200 pb-2">
                  <span className="font-medium">{obj.item}</span>
                  <span className="italic text-orange-900">{obj.qty}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-orange-800 text-orange-50 p-6 rounded-lg">
              <h4 className="font-bold mb-2 uppercase text-xs">The Secret Ingredient</h4>
              <p className="text-sm italic">Smoked Charcoal: Placing a piece of burning charcoal inside a small bowl on top of the rice before sealing gives it that "Dhungar" smoky flavor.</p>
            </div>
          </section>

          {/* Right: The Method */}
          <section className="space-y-8">
            <h2 className="text-3xl font-serif mb-4">The Ritual</h2>
            {method.map((step, i) => (
              <div key={i} className="relative pl-8">
                <span className="absolute left-0 top-1 text-orange-800 font-bold font-serif text-xl">{i + 1}.</span>
                <h3 className="font-bold text-orange-900 uppercase text-sm tracking-tighter">{step.tag}</h3>
                <p className="text-[#6d4c41] leading-relaxed mt-1">{step.detail}</p>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Traditional Footer Note */}
      <footer className="mt-20 text-center opacity-60 italic">
        <p>Best enjoyed with Burani Raita and sliced red onions.</p>
      </footer>
    </div>
  );
};

export default MatkaBiryani;
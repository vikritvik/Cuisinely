import React from 'react';

const BhindiMasala = () => {
  const essentials = [
    { name: "Fresh Bhindi (Okra)", qty: "500g", prep: "Washed & patted dry" },
    { name: "Red Onions", qty: "2 large", prep: "Thinly sliced" },
    { name: "Amchur (Mango Powder)", qty: "1 tsp", prep: "For the tang" },
    { name: "Ajwain (Carom Seeds)", qty: "1/2 tsp", prep: "For digestion" }
  ];

  const cookingFlow = [
    { 
      title: "The Dry Prep", 
      desc: "Crucial step: After washing, ensure the bhindi is 100% dry. Cut into 1-inch pieces. Moisture is the enemy of crispiness!" 
    },
    { 
      title: "The Initial Fry", 
      desc: "Heat oil in a wide pan. Sauté the bhindi on medium heat until they turn dark green and slightly crispy. Remove and set aside." 
    },
    { 
      title: "The Masala Base", 
      desc: "In the same pan, add ajwain and onions. Sauté until onions are translucent. Add turmeric, chili powder, and coriander powder." 
    },
    { 
      title: "The Union", 
      desc: "Add the fried bhindi back to the pan. Sprinkle salt and the secret ingredient: Amchur (Dry Mango Powder)." 
    },
    { 
      title: "The Final Crunch", 
      desc: "Cook uncovered for 5 minutes. Stirring too much can make it mushy. Finish with fresh coriander." 
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf5] text-[#3a4031]">
      {/* Header with Organic Shape */}
      <header className="bg-[#4a5d23] pt-20 pb-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 text-white text-[15rem] font-bold select-none -mr-10 -mt-10">
          okra
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-[#a3b18a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-md mb-4">
            Healthy & Vegan
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-[#fefae0]">Bhindi <br/>Masala</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto -mt-16 px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Ingredient Column */}
          <div className="md:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-green-900/5 border border-green-50">
              <h3 className="text-xl font-black mb-6 text-[#4a5d23]">The Produce</h3>
              <div className="space-y-6">
                {essentials.map((item, i) => (
                  <div key={i} className="group">
                    <p className="font-bold text-sm uppercase tracking-tight">{item.name}</p>
                    <p className="text-xs text-[#a3b18a] font-medium">{item.qty} — {item.prep}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps Column */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-green-900/5">
              <h3 className="text-2xl font-black mb-10 border-b pb-4 border-green-50">The Technique</h3>
              
              <div className="space-y-10">
                {cookingFlow.map((step, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-0 text-3xl font-black text-[#ccd5ae]">
                      0{i + 1}
                    </div>
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-[#606c38] leading-relaxed text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Anti-Slime Tip Box */}
              <div className="mt-12 bg-[#fefae0] p-6 rounded-2xl border-2 border-[#e9edc9] relative">
                <span className="absolute -top-4 left-6 bg-[#bc6c25] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  Golden Rule
                </span>
                <p className="text-[#283618] text-sm leading-relaxed">
                  <strong>Never cover the pan</strong> with a lid while cooking bhindi. Trapped steam creates moisture, which leads to sliminess. Keep it open for that perfect, individual-grain crunch!
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      {/* Footer Serving Note */}
      <div className="text-center pb-12 opacity-40">
        <p className="text-sm italic">Serve with piping hot Phulkas or as a side with Dal-Chawal.</p>
      </div>
    </div>
  );
};

export default BhindiMasala;
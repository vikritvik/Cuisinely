 import React from 'react';

const MalaiKoftaPage = () => {
  const koftaIngredients = [
    "200g Paneer (grated)",
    "2 medium Potatoes (boiled & mashed)",
    "2 tbsp Cornflour (for binding)",
    "1 tbsp Raisins & Chopped Cashews (filling)",
    "1/2 tsp Cardamom Powder",
    "Oil for deep frying"
  ];

  const gravyIngredients = [
    "3 large Tomatoes & 2 Onions (boiled & pureed)",
    "1/4 cup Cashew Paste (soaked & blended)",
    "1/2 cup Fresh Cream (Malai)",
    "1 tbsp Butter & 1 tbsp Ghee",
    "Spices: Shahi Jeera, Cinnamon, Cloves",
    "1 tsp Kasuri Methi (dried fenugreek)"
  ];

  const steps = [
    {
      title: "Crafting the Koftas",
      text: "Mix grated paneer, mashed potatoes, and cornflour into a smooth dough. Stuff the center with raisins and nuts. Shape into rounds and deep-fry on medium heat until golden brown. Set aside."
    },
    {
      title: "The Silk Base",
      text: "Heat butter and ghee. Sauté whole spices and the onion-tomato puree. Cook until the raw smell disappears and the mixture leaves the sides of the pan."
    },
    {
      title: "The Shahi Touch",
      text: "Whisk in the cashew paste and cream. Add a pinch of sugar, salt, and white pepper. Simmer on low heat to achieve a glossy, velvet-like consistency."
    },
    {
      title: "Aromatic Finish",
      text: "Crush Kasuri Methi between your palms and sprinkle over the gravy. Add cardamom powder for that signature royal fragrance."
    },
    {
      title: "The Assembly",
      text: "Crucial: Never boil the koftas in the gravy. Place the warm koftas in a serving dish and pour the hot gravy over them just before eating to keep them melt-in-the-mouth soft."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffcf0] text-[#433831] pb-20">
      {/* Royal Header */}
      <div className="bg-[#b45309] py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
        <div className="relative z-10">
          <span className="text-amber-200 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Imperial Mughlai Cuisine</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight">
            Malai <span className="italic font-light text-amber-300">Kofta</span>
          </h1>
          <div className="w-32 h-1 bg-amber-400 mx-auto mt-8"></div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 -mt-16">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Ingredients Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
              <h3 className="text-xl font-serif font-bold text-[#b45309] mb-6">The Kofta</h3>
              <ul className="space-y-3 text-sm italic text-stone-600">
                {koftaIngredients.map((ing, i) => <li key={i}>• {ing}</li>)}
              </ul>
              
              <h3 className="text-xl font-serif font-bold text-[#b45309] mt-10 mb-6">The Silk Gravy</h3>
              <ul className="space-y-3 text-sm italic text-stone-600">
                {gravyIngredients.map((ing, i) => <li key={i}>• {ing}</li>)}
              </ul>
            </div>
          </div>

          {/* Recipe Instructions */}
          <div className="lg:col-span-8">
            <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-amber-100">
              <h2 className="text-3xl font-serif mb-12 border-b pb-6 border-amber-50">Grand Preparation</h2>
              
              <div className="space-y-16">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-10 group">
                    <div className="flex-none">
                      <div className="text-5xl font-serif text-amber-100 group-hover:text-amber-500 transition-colors duration-500">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold tracking-widest uppercase mb-3 text-stone-800">{step.title}</h4>
                      <p className="text-stone-500 leading-relaxed text-lg font-serif italic">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* The Golden Rule Box */}
              <div className="mt-20 p-8 bg-amber-50 rounded-2xl border-2 border-dashed border-amber-200">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">⚠️</span>
                  <h4 className="font-bold text-[#b45309] uppercase tracking-tighter">The Secret to Success</h4>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed">
                  Malai Koftas are extremely delicate. If you cook them in the gravy, they will dissolve. Always <strong>arrange the koftas on a platter</strong> and pour the hot, velvety gravy over them right before serving. This maintains the textural contrast between the crisp exterior and the creamy gravy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-20 text-center text-stone-400 italic font-serif">
        Best served with Garlic Naan or Saffron Pulao.
      </footer>
    </div>
  );
};

export default MalaiKoftaPage;
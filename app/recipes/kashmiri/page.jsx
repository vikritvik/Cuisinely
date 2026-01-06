import React from 'react';

const KashmiriBiryani = () => {
  const ingredients = {
    base: [
      "2 cups Long-grain Basmati Rice",
      "500g Mixed Vegetables (Cubed potatoes, cauliflower, peas)",
      "1/2 cup Thick Yogurt (whisked)",
      "3 tbsp Ghee (clarified butter)",
    ],
    spices: [
      "1 tsp Kashmiri Red Chili Powder (for color, low heat)",
      "1.5 tsp Dry Ginger Powder (Saunth)",
      "1.5 tsp Fennel Powder (Saunf) - The signature flavor",
      "4-5 Green Cardamoms, 1 Black Cardamom",
      "Pinch of Saffron strands soaked in 1/4 cup warm milk",
    ],
    garnishes: [
      "1/4 cup Fried Walnuts and Almonds",
      "1/4 cup Fresh Pomegranate seeds",
      "Thinly sliced apples (optional, for authentic sweetness)",
      "Fried onions (Birista)"
    ]
  };

  const recipeSteps = [
    {
      title: "The Rice Infusion",
      content: "Wash and soak Basmati rice for 30 minutes. Boil in salted water with whole green cardamom and a cinnamon stick until 80% cooked. Drain and set aside."
    },
    {
      title: "The Saffron Base",
      content: "Heat ghee in a heavy-bottomed pot. Add whole spices. Stir in the vegetables and sauté until light brown. Lower the heat and add the whisked yogurt, ginger powder, and fennel powder."
    },
    {
      title: "Flavor Development",
      content: "Add the Kashmiri red chili powder. Cook the vegetables in the yogurt gravy on low heat until they are tender and the ghee starts to separate from the sides."
    },
    {
      title: "The Kashmiri Layering",
      content: "Layer the cooked rice over the vegetable gravy. Pour the saffron-infused milk in circles. Sprinkle fried walnuts, almonds, and fried onions over the top."
    },
    {
      title: "The Dum (Slow Steam)",
      content: "Seal the pot with a cloth or dough lid. Cook on very low heat (Dum) for 15-20 minutes. The steam allows the fennel and ginger aromas to penetrate every grain of rice."
    },
    {
      title: "The Royal Finish",
      content: "Before serving, gently fluff the rice. Garnish with fresh pomegranate seeds and apple slices for a unique sweet-and-savory Kashmiri experience."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffcfb] text-[#4e2a2a] pb-20">
      {/* Header with Crimson Gradient */}
      <div className="bg-gradient-to-r from-[#800000] to-[#b22222] py-24 px-6 text-center shadow-xl">
        <h1 className="text-white text-5xl md:text-7xl font-serif font-bold italic mb-4">
          Kashmiri Biryani
        </h1>
        <p className="text-rose-100 text-lg tracking-widest uppercase font-light">
          Wazwan Style • Aromatic • Fruit & Nut Infused
        </p>
      </div>

      <main className="max-w-6xl mx-auto px-6 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Ingredients Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-50">
              <h3 className="text-2xl font-serif text-[#800000] mb-6 border-b pb-2">Ingredients</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase text-rose-400 mb-2">The Pantry</h4>
                  <ul className="text-sm space-y-2">
                    {ingredients.base.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-rose-400 mb-2">Wazwan Spices</h4>
                  <ul className="text-sm space-y-2 italic">
                    {ingredients.spices.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-rose-400 mb-2">Royal Garnish</h4>
                  <ul className="text-sm space-y-2">
                    {ingredients.garnishes.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cooking Steps Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-rose-50">
              <h3 className="text-3xl font-serif text-[#800000] mb-10">Preparation</h3>
              
              <div className="space-y-12">
                {recipeSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-none">
                      <div className="w-10 h-10 rounded-full bg-rose-50 text-[#800000] flex items-center justify-center font-bold border border-rose-100 group-hover:bg-[#800000] group-hover:text-white transition-colors">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-stone-600 leading-relaxed">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cultural Context Note */}
              <div className="mt-16 p-6 bg-rose-50 rounded-xl border-l-4 border-[#800000]">
                <p className="text-sm italic text-rose-900">
                  <strong>The Kashmiri Difference:</strong> Unlike other biryanis, the Kashmiri version avoids turmeric and relies on saffron and Kashmiri chilies for color. The addition of <strong>Dry Ginger and Fennel</strong> is non-negotiable for the authentic "Wazwan" taste.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default KashmiriBiryani;
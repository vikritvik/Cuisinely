import React from 'react';

const LaukiSabjiPage = () => {
  const ingredients = [
    { name: "Fresh Lauki (Bottle Gourd)", qty: "500g", note: "Peeled and cubed" },
    { name: "Cumin Seeds (Jeera)", qty: "1 tsp", note: "" },
    { name: "Asafetida (Hing)", qty: "a pinch", note: "Great for digestion" },
    { name: "Green Chilies", qty: "2", note: "Finely chopped" },
    { name: "Tomato", qty: "1 medium", note: "Finely chopped" },
    { name: "Turmeric Powder", qty: "1/2 tsp", note: "" },
    { name: "Coriander Powder", qty: "1 tsp", note: "" },
    { name: "Ghee or Oil", qty: "1 tbsp", note: "Ghee adds better flavor" },
    { name: "Fresh Cilantro", qty: "2 tbsp", note: "Chopped for garnish" }
  ];

  const steps = [
    {
      title: "The Tempering",
      text: "Heat ghee in a pressure cooker or a heavy pan. Add cumin seeds and let them splutter. Add a pinch of hing and the green chilies."
    },
    {
      title: "The Aromatics",
      text: "Add the chopped tomatoes and sauté for 2 minutes until they soften. Add turmeric and coriander powder. Sauté for another minute."
    },
    {
      title: "The Main Star",
      text: "Add the cubed Lauki and salt to taste. Toss well to coat the pieces with the spice mix."
    },
    {
      title: "Pressure Cooking",
      text: "Add 1/4 cup of water (Lauki releases its own water, so don't add too much). Close the lid and pressure cook for 2-3 whistles on medium heat."
    },
    {
      title: "The Finish",
      text: "Once the pressure releases, open the lid. If there is too much liquid, simmer for 2 mins on high heat. Mash a few pieces to thicken the gravy."
    },
    {
      title: "Garnish",
      text: "Turn off the heat, add fresh coriander, and a squeeze of lemon juice if you like it tangy. Serve hot."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f6] text-slate-700 pb-20 font-sans">
      {/* Clean, Minimalist Header */}
      <div className="bg-[#145a54] pt-24 pb-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-teal-200 text-xs font-bold uppercase tracking-widest bg-teal-900/30 px-3 py-1 rounded-full">
            Light • Healthy • Comfort
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-serif mt-6">
            Lauki <span className="italic font-light">Sabji</span>
          </h1>
          <p className="text-teal-100/70 mt-4 text-lg">
            A simple, hydrating curry that proves healthy food can be delicious.
          </p>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 -mt-16">
        <div className="bg-white shadow-xl rounded-t-[3rem] p-8 md:p-16">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Ingredients Section */}
            <div className="lg:col-span-4">
              <h3 className="text-2xl font-serif text-[#145a54] mb-8 border-b border-teal-50 pb-2">
                What you'll need
              </h3>
              <div className="space-y-6">
                {ingredients.map((ing, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-50 pb-2">
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm">{ing.name}</span>
                      {ing.note && <span className="text-[10px] text-gray-400">{ing.note}</span>}
                    </div>
                    <span className="text-xs font-mono text-teal-600">{ing.qty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cooking Method Section */}
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-serif text-[#145a54] mb-10">The Ritual</h3>
              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-4xl font-serif text-teal-100 group-hover:text-teal-200 transition-colors">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 uppercase text-xs tracking-widest mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Health Fact Box */}
              <div className="mt-16 p-8 bg-teal-50 rounded-3xl border border-teal-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🌱</span>
                  <h4 className="font-bold text-teal-800">Why Lauki?</h4>
                </div>
                <p className="text-teal-700/80 text-sm leading-relaxed italic">
                  Bottle Gourd is about 96% water, making it excellent for hydration and digestion. It is incredibly low in calories and has a cooling effect on the body, perfect for a light lunch.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="mt-12 text-center text-gray-400 text-sm italic">
        Best paired with hot Phulkas and a bowl of fresh curd.
      </footer>
    </div>
  );
};

export default LaukiSabjiPage;
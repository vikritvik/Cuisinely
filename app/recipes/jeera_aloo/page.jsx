export const metadata = {
  title: "Jeera Aloo Recipe | Cuisinely",
  description: "Golden Jeera Aloo – a quick and flavorful Indian potato stir-fry made with cumin.",
};

export default function JeeraAlooPage() {
  return (
    <div className="min-h-screen bg-[#fffcf5] p-8">
      <div className="max-w-3xl mx-auto bg-white border border-amber-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="bg-amber-600 p-10 text-white">
          <h1 className="text-4xl font-serif font-bold">
            Golden Jeera Aloo
          </h1>
          <p className="opacity-80 italic">
            The ultimate 15-minute soul food.
          </p>
        </div>

        <div className="p-10">
          <div className="flex gap-10">
            <div className="w-1/3">
              <h3 className="font-bold text-amber-900 border-b border-amber-100 mb-4 pb-2 uppercase text-xs">
                Pantry
              </h3>
              <ul className="text-sm space-y-2 text-stone-600">
                <li>• 4 Boiled Potatoes</li>
                <li>• 2 tsp Cumin (Jeera)</li>
                <li>• 1/4 tsp Hing</li>
                <li>• Green Chilies</li>
              </ul>
            </div>

            <div className="w-2/3">
              <h3 className="font-bold text-stone-800 mb-4 uppercase text-xs tracking-widest">
                The Quick Method
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Heat ghee. Add hing and plenty of cumin. Let the cumin turn dark
                brown (don&apos;t burn it!). Toss in cubed boiled potatoes.
                Sprinkle turmeric, chili powder, and salt. Sauté until the
                potato edges are crispy and golden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

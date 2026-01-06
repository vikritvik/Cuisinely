 export const metadata = {
  title: "Crispy Karela Fry Recipe | Cuisinely",
  description:
    "Crispy Karela Fry – a classic Indian bitter gourd recipe with a simple bitterness-removal hack.",
};

export default function KarelaFryPage() {
  return (
    <div className="min-h-screen bg-[#1a2e2a] text-[#d4e2d4] p-10">
      <div className="max-w-3xl mx-auto relative">
        <h1 className="text-6xl font-black opacity-20 uppercase tracking-widest absolute -top-6">
          Crispy
        </h1>

        <div className="relative pt-12">
          <h2 className="text-4xl font-bold text-lime-400">
            Karela Fry
          </h2>

          <p className="mt-4 text-stone-400 max-w-md">
            For those who appreciate the fine balance of bitter, salt, and spice.
          </p>

          <div className="mt-12 bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-lime-400 uppercase text-xs font-bold mb-4">
              The Bitterness Hack
            </h3>
            <p className="text-sm italic leading-relaxed">
              “Coat sliced karela in salt for 20 minutes. Squeeze out the water.
              This removes the harsh bitterness while keeping the crunch.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


import AnimatedSection from "./Animation";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

// app/page.jsx (Next.js 13+ App Router)
export default function MealPlanner() {

    const router = useRouter();
    const auth = getAuth();

    const handleClick = () => {
        if (auth.currentUser) {
            router.push("/aimeal");  // ✅ logged in
        } else {
            router.push("/signup");     // ❌ not logged in
        }
    };

    return (
        <div className=" min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Hero Section */}
            <AnimatedSection >
                <section className="text-center">
                    <h1 className="pt-10 pb-1 text-2xl md:text-3xl font-bold text-green-700">
                        Your AI Meal Planner 🍽️
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Get personalized weekly meal plans tailored to your diet, health goals, and lifestyle.
                        Powered by AI, designed for you.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <button onClick={handleClick} className="px-2 py-2 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 cursor-pointer">
                            Get Started
                        </button>
                        <a href="#features" className="px-2 py-2 border border-green-600 text-green-700 rounded-xl hover:bg-green-100">
                            Learn More
                        </a>
                    </div>
                </section>
            </AnimatedSection>

            {/* How It Works */}
            <AnimatedSection>
                <section className="py-16" id="features">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
                        {[
                            { step: "1️⃣", title: "Enter Preferences", desc: "Tell us your age, weight, diet type, and goals." },
                            { step: "2️⃣", title: "AI Generates Plan", desc: "Get a 7-day meal plan with recipes & calories." },
                            { step: "3️⃣", title: "Shop & Eat", desc: "Download grocery list and enjoy healthy meals." },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-green-50 rounded-2xl shadow-sm text-center">
                                <div className="text-4xl">{item.step}</div>
                                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </ AnimatedSection >

            {/* Sample Output */}
            <AnimatedSection>
                <section className="py-16 px-6 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">See a Sample Plan</h2>
                    <div className="bg-white rounded-2xl shadow-md p-6 flex justify-center">
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                            Day 1:
                            <p> - Breakfast: Oatmeal with berries & almonds </p>
                            <p> - Lunch: Grilled veggie wrap with hummus </p>
                            <p> - Snacks: Greek yogurt, roasted chickpeas </p>
                            <p> - Dinner: Lentil curry with brown rice </p>

                        </pre>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="py-16 max-w-7xl mx-auto flex flex-col items-center bg-emerald-50 rounded-2xl shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-800 text-center">
                        Discover Recipes with Cuisinely 🍴
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
                        From global flavors to homely classics, our recipe collection is
                        crafted to inspire your cooking journey. Dive into dishes loved worldwide,
                        curated by expert chefs, and brought to life with step-by-step guides.
                    </p>

                    <div className="mt-10 px-4 flex flex-col md:flex-row gap-6">
                        {/* Card 1 */}
                        <div className="bg-rose-400 text-white rounded-xl px-6 py-10 flex-1 shadow-md hover:shadow-xl transition">
                            <h2 className="text-2xl font-semibold">🌍 Recipes From Around the World</h2>
                            <p className="mt-3">
                                Explore flavors across continents — from spicy Asian curries to Italian pastas.
                                With Cuisinely, global cuisine is just a click away.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-green-400 rounded-xl px-6 py-10 flex-1 shadow-md hover:shadow-xl transition">
                            <h2 className="text-2xl font-semibold text-gray-800">👨‍🍳 Expertly Curated Ingredients</h2>
                            <p className="mt-3 text-gray-700">
                                Our recipes are built with guidance from world-famous chefs, ensuring
                                every dish is not only delicious but healthy and authentic.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-cyan-200 rounded-xl px-6 py-10 flex-1 shadow-md hover:shadow-xl transition">
                            <h2 className="text-2xl font-semibold text-gray-800">📸 Visual Step-by-Step Guides</h2>
                            <p className="mt-3 text-gray-700">
                                Learn with confidence! Each recipe includes clear images and videos
                                so you never miss a step while cooking your favorite dish.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 cursor-pointer">
                        <a
                            href="/recipes"
                            className="px-2 py-2 bg-green-600 text-white font-medium text-lg rounded-xl shadow-md hover:bg-green-700 transition hover:underline"
                        >
                            Explore Recipes →
                        </a>
                    </div>
                </section>
            </AnimatedSection>

            {/* CTA Section */}
            <section className="py-20 my-5 bg-green-600 text-white text-center">
                <h2 className="text-3xl font-bold">Start Your Free Meal Plan Today</h2>
                <p className="mt-4 text-lg">No credit card required. Upgrade anytime.</p>
                <a href="/signup" className="mt-6 inline-block px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow-md hover:bg-green-100">
                    Get Started Free
                </a>
            </section>


        </div>
    );
}

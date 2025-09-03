
"use client";
import Link from "next/link";
import Head from "next/head";

// Example blog posts
const posts = [
  {
    id: 1,
    title: "Mediterranean Diet: A Delicious Path to Weight Loss",
    excerpt:
      "Discover how the Mediterranean diet can help you lose weight while enjoying fresh, flavorful meals.",
    image:
      "https://images.unsplash.com/photo-1604908176997-5a16a47a5f3b?q=80&w=2070&auto=format&fit=crop",
    date: "August 12, 2025",
    category: "Health & Nutrition",
  },
  {
    id: 2,
    title: "Top 5 Indian Breakfasts for a Healthy Start",
    excerpt:
      "Begin your mornings with these nutrient-packed Indian breakfasts that keep you energized.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop",
    date: "August 8, 2025",
    category: "Cuisines",
  },
  {
    id: 3,
    title: "10 Superfoods That Boost Immunity Naturally",
    excerpt:
      "Include these superfoods in your diet to strengthen your immune system and stay healthy.",
    image:
      "https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=2070&auto=format&fit=crop",
    date: "August 5, 2025",
    category: "Health Tips",
  },
];

// Generate structured data for SEO
const generateStructuredData = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  image: [post.image],
  datePublished: post.date,
  author: {
    "@type": "Person",
    name: "Cuisinely",
  },
  publisher: {
    "@type": "Organization",
    name: "Cuisinely",
    logo: {
      "@type": "ImageObject",
      url: "/favicon.ico",
    },
  },
  description: post.excerpt,
});

export default function BlogPage() {
  return (
    <>
      <Head>
        <title className="">Cuisinely Blog - Healthy Recipes & Cooking Tips</title>
        <meta
          name="description"
          content="Explore Cuisinely Blog for healthy recipes, easy cooking tips, AI meal planning ideas, and world cuisines. Perfect for beginners and food lovers."
        />
        <meta
          name="keywords"
          content="recipes, healthy cooking, AI meal planning, world cuisines, Cuisinely, cooking tips, food blog"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 mt-25">
        {/* Hero Section */}
        <section className="bg-green-900 text-white py-16 px-6 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Cuisinely Blog</h1>
          <p className="max-w-2xl mx-auto text-lg text-green-100">
            Explore healthy eating tips, delicious cuisines, and expert guidance
            on living your healthiest life.
          </p>
        </section>

        {/* Blog Cards */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col gap-2">
                <span className="text-sm text-green-700 font-medium">
                  {post.category} • {post.date}
                </span>
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="mt-3 inline-block text-green-800 font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </div>

              {/* Structured Data JSON-LD for SEO */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(generateStructuredData(post)),
                }}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-green-900 text-white text-center py-6">
          <p>© {new Date().getFullYear()} Cuisinely Blog. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

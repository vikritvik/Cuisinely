
"use client";

// app/layout.jsx
import { AuthProvider } from "../context/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar"; // adjust path if different
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const location = usePathname;

  // hide Navbar and Footer
  const hideNavbar = ["/signin", "/signup"].includes(location.pathname);
  const hideFooter = ["/signin", "/signup"].includes(location.pathname);

  return (

    <html lang="en">

      <Head>

        <title> "Cuisinely: Quick & Easy Recipes, AI Meal Planner",</title>
        description:
        "Discover personalized recipes, AI meal planning, and nutrition tracking with Cuisinely. Find trending dishes, tips, and blog posts to cook smarter.",
        keywords: "recipes, AI meal planner, healthy food, trending dishes, Cuisinely",
        authors: Cuisinely -team
      </Head>


      <body className={inter.className}>
        <AuthProvider>
          <Navbar />   {/* ✅ Navbar here */}
          {children}
          <Footer />
        </AuthProvider>  {/* ✅ Page content below */}
      </body>
    </html>
  );
}

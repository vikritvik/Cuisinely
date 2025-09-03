
"use client";

import React, { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      router.push("/signin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen my-15 pt-10">
      {/* Left side */}
      <div className="w-full md:w-1/2 bg-green-900 text-white flex flex-col justify-center items-center p-6">
        <Link href="/" className="text-3xl font-bold mb-4">
          🥗 Cuisinely
        </Link>
        <div className="max-w-md text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Cuisinely to explore your recipes
          </h2>
          <p className="text-base md:text-lg">
            Sign up and start creating delicious AI-generated recipes today!
          </p>
          <p className="mt-6 text-sm">
            By signing up, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-6 md:p-12">
        <form
          onSubmit={handleSignup}
          className="max-w-sm w-full mx-auto space-y-4 p-4 border border-black rounded-md"
        >
          <h1 className="text-2xl md:text-3xl font-semibold">Sign up</h1>

          {error && <p className="text-red-500">{error}</p>}

          <div>
            <label className="block text-sm font-medium">Your email</label>
            <input
              type="email"
              className="mt-1 w-full border rounded p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium">First name</label>
              <input
                type="text"
                className="mt-1 w-full border rounded p-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium">Last name</label>
              <input
                type="text"
                className="mt-1 w-full border rounded p-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Create a password</label>
            <input
              type="password"
              className="mt-1 w-full border rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded text-white font-semibold active:scale-95 active:bg-blue-700 cursor-pointer hover:border-blue-900 ${
              loading ? "bg-gray-400" : "bg-blue-600"
            }`}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>

          <button
            type="button"
            className="w-full p-2 rounded text-blue-600 border border-blue-600 hover:bg-blue-50 active:bg-blue-200 cursor-pointer"
            onClick={() => router.back()}
          >
            Back
          </button>

          <div className="text-center">
            <span>Already Signed up?</span>
            <Link href="/signin" className="text-blue-800 px-2">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

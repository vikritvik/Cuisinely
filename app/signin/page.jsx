 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/home");
    } catch (error) {
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen my-22">
      {/* Left side */}
      <div className="w-full md:w-1/2 bg-[#E23744] text-white flex flex-col justify-center items-center p-6 md:p-3">
        <Link href="/home" className="text-3xl font-bold mb-4">
          🥗 Cuisinely
        </Link>
        <div className="max-w-md text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Welcome Back to Cuisinely!
          </h2>
          <p className="text-base md:text-lg">
            Sign in to explore your favorite AI-generated recipes again!
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-6 md:p-12">
        <form
          onSubmit={handleLogin}
          className="max-w-sm w-full mx-auto space-y-4 border border-black p-5 rounded-md"
        >
          <h1 className="text-2xl md:text-3xl font-semibold">Sign in</h1>

          {error && <p className="text-red-500">{error}</p>}

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 w-full border rounded p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
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
            {loading ? "Signing in..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign-In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Facebook Sign-In */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            Continue with Facebook
          </button>

          {/* Apple Sign-In */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/303128/apple-logo.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            Continue with Apple
          </button>

          <div className="text-center mt-4">
            <span>Don't have an account?</span>
            <Link href="/signup" className="text-blue-700 px-2">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

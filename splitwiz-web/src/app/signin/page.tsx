"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

/**
 * Custom Sign-In Page
 *
 * - "use client": marks this as a client component (required for signIn()).
 * - useSearchParams(): lets us read any ?error=... from the URL.
 * - signIn("github"): starts the GitHub OAuth flow.
 * - callbackUrl: where the user should go after signing in.
 */
export default function SignInPage() {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Sign in to SplitWiz</h1>

      {error && (
        <p className="text-red-600 mb-4">
          ⚠️ Error: {error}
        </p>
      )}

      <button
        onClick={() => signIn("github", { callbackUrl: "/home" })}
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
      >
        Sign in with GitHub
      </button>

      <p className="text-gray-500 mt-6 text-sm">
        You’ll be redirected to GitHub to authorize your account.
      </p>
    </main>
  );
}

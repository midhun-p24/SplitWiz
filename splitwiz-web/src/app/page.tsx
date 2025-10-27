"use client";

import { useSession, signIn, signOut } from "next-auth/react";

/**
 * Home page that shows a GitHub Sign-In button
 * or a Sign-Out button if you're logged in.
 *
 * - "use client" → marks this as a Client Component, so it can use React hooks.
 * - useSession() → tells us whether the user is signed in.
 * - signIn() / signOut() → provided by NextAuth to start or end sessions.
 */
export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-2">SplitWiz — it’s alive 🎉</h1>

      {!session ? (
        <>
          <p className="text-gray-600 mb-4">You are not signed in.</p>
          <button
            onClick={() => signIn("github", { callbackUrl: "/home" })}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="mb-2">Signed in as {session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Sign out
          </button>
        </>
      )}
    </main>
  );
}

"use client";

import { useSession, signOut } from "next-auth/react";

/**
 * SplitWiz Home Dashboard — Dark Mode Edition
 * - Deep gray gradient background
 * - Frosted glass card with glow
 * - Personalized welcome + quick actions
 */
export default function HomePage() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-black-750 to-black-600 text-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white/100 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-black">💵 Welcome to SplitWiz 🧾</h1>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-red-600 hover:bg-red-700 text-black font-semibold px-4 py-2 rounded-lg transition"
          >
            Sign out
          </button>
        </div>

        {/* User info */}
        <div className="flex flex-col items-center text-center mb-10">
          <img
            src={user?.image ?? ""}
            alt={user?.name ?? "User"}
            className="w-24 h-24 rounded-full mb-3 shadow-lg border-2 border-gray-600"
          />
          <h2 className="text-2xl font-semibold text-black">
            Hey, {user?.name ?? "friend"} 👋
          </h2>
          <p className="text-black">
            You’re signed in as{" "}
            <span className="font-medium text-black">{user?.email}</span>.
          </p>
        </div>

        {/* Quick actions */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3 text-black">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium shadow-md transition">
              + New Receipt
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-medium shadow-md transition">
              View Groups
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-medium shadow-md transition">
              Settings
            </button>
          </div>
        </section>

        {/* Recent activity */}
        <section>
          <h3 className="text-xl font-semibold mb-3 text-black">
            Recent Activity
          </h3>
          <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-4 text-gray-400 text-sm">
            No receipts yet — once you upload, your recent activity will show here.
          </div>
        </section>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        Built with ❤️ using Next.js, NextAuth & Prisma
      </footer>
    </main>
  );
}

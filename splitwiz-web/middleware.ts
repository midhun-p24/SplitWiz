// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * Custom guard: if no NextAuth token, send the user to /signin
 */
export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  if (!token) {
    const url = new URL("/signin", req.url);
    // Optional: preserve original destination
    url.searchParams.set("callbackUrl", req.nextUrl.pathname + req.nextUrl.search);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

// Protect these routes
export const config = {
  matcher: ["/home/:path*"],
};

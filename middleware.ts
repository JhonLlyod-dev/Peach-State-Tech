// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const qb = request.nextUrl.searchParams.get("qb-b");
  const qb_p = request.nextUrl.searchParams.get("qb-p");

  if (qb || qb_p) {
    // rewrite to 410 page instead of just returning raw status
    return NextResponse.rewrite(new URL("/410", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
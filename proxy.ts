import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const hasQbParam = [...searchParams.keys()].some((key) => key.startsWith("qb"));

  if (hasQbParam) {
    const goneUrl = new URL("/410", request.nextUrl.origin);

    try {
      const res = await fetch(goneUrl, { redirect: "manual" });

      if (res.status >= 300 && res.status < 400) {
        console.error("‼️ /410 page is redirecting — fix that route first");
        return NextResponse.next();
      }

      const body = await res.text();
      return new NextResponse(body, {
        status: 410,
        headers: { "Content-Type": "text/html" },
      });
    } catch (err) {
      console.error("Failed to fetch /410 page:", err);
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
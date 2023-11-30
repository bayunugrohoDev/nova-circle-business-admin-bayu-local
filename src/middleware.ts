import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedURL = ["/"];

export function middleware(request: NextRequest) {
  // const token = request.cookies.get("access_token");
  // // console.log("token", token);

  // const url = request.nextUrl.clone();
  // if (protectedURL.includes(url.pathname) && token === undefined) {
  //   url.pathname = "/login";
  //   return NextResponse.redirect(url);
  // }
  return NextResponse.next();
}
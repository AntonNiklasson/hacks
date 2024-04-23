import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log({
    cookies: request.cookies,
  });
}

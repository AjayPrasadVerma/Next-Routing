import { NextResponse } from "next/server";

export async function middleware(req) {
  // console.log("Middleware", req);

  return NextResponse.next();
}

// export const config = {
//   matcher: "/news",
// };

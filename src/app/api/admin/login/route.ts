import { NextResponse } from "next/server";
import {
  createSessionToken,
  SESSION_COOKIE,
  sessionCookieOptions,
  verifyCredentials,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const username =
    body && typeof body === "object" && "username" in body ? body.username : "";
  const password =
    body && typeof body === "object" && "password" in body ? body.password : "";

  if (!verifyCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(), sessionCookieOptions);
  return response;
}

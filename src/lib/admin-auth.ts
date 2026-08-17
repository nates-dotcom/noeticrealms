import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME ?? "nate.noetic2026";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "&tlK8!03lkj!";
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ?? "noetic-realms-admin-session-2026";
export const SESSION_COOKIE = "nr_admin_session";
const SESSION_MS = 1000 * 60 * 60 * 24 * 7;

function digest(value: string) {
  return createHmac("sha256", SESSION_SECRET).update(value).digest();
}

function safeEqual(left: string, right: string) {
  const a = digest(`cmp:${left}`);
  const b = digest(`cmp:${right}`);
  return timingSafeEqual(a, b);
}

export function verifyCredentials(username: unknown, password: unknown) {
  if (typeof username !== "string" || typeof password !== "string") return false;
  return safeEqual(username, ADMIN_USERNAME) && safeEqual(password, ADMIN_PASSWORD);
}

export function createSessionToken() {
  const exp = Date.now() + SESSION_MS;
  const payload = `admin.${exp}`;
  const signature = createHmac("sha256", SESSION_SECRET).update(payload).digest("hex");
  return `${payload}.${signature}`;
}

export function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [role, exp, signature] = parts;
  if (role !== "admin") return false;
  if (!exp || Number(exp) < Date.now()) return false;
  const payload = `${role}.${exp}`;
  const expected = createHmac("sha256", SESSION_SECRET).update(payload).digest("hex");
  try {
    return timingSafeEqual(Buffer.from(signature, "utf8"), Buffer.from(expected, "utf8"));
  } catch {
    return false;
  }
}

export async function isAdminRequest() {
  const jar = await cookies();
  return verifySessionToken(jar.get(SESSION_COOKIE)?.value);
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_MS / 1000,
};

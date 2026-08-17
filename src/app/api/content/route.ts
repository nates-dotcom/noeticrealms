import { NextResponse } from "next/server";
import { defaultSiteCopy, mergeSiteCopy } from "@/content/site-copy";
import { isAdminRequest } from "@/lib/admin-auth";
import { readSiteCopy, resetSiteCopy, writeSiteCopy } from "@/lib/site-copy-store";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await readSiteCopy());
}

export async function PUT(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const next = await writeSiteCopy(mergeSiteCopy(defaultSiteCopy, body));
  return NextResponse.json(next);
}

export async function DELETE() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await resetSiteCopy());
}

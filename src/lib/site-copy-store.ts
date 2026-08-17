import "server-only";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { defaultSiteCopy, mergeSiteCopy, type SiteCopy } from "@/content/site-copy";

type GlobalStore = typeof globalThis & {
  __noeticSiteCopy?: SiteCopy;
};

const memory = globalThis as GlobalStore;
const dataFile = path.join(process.cwd(), "data", "site-content.json");
const tmpFile = path.join("/tmp", "noetic-site-content.json");

async function readJson(file: string) {
  const raw = await readFile(file, "utf8");
  return mergeSiteCopy(defaultSiteCopy, JSON.parse(raw));
}

export async function readSiteCopy(): Promise<SiteCopy> {
  if (memory.__noeticSiteCopy) return memory.__noeticSiteCopy;

  for (const file of [dataFile, tmpFile]) {
    try {
      const copy = await readJson(file);
      memory.__noeticSiteCopy = copy;
      return copy;
    } catch {
      // try the next location
    }
  }

  return defaultSiteCopy;
}

export async function writeSiteCopy(copy: SiteCopy) {
  const next = mergeSiteCopy(defaultSiteCopy, copy);
  memory.__noeticSiteCopy = next;

  const payload = `${JSON.stringify(next, null, 2)}\n`;
  try {
    await mkdir(path.dirname(dataFile), { recursive: true });
    await writeFile(dataFile, payload, "utf8");
  } catch {
    try {
      await writeFile(tmpFile, payload, "utf8");
    } catch {
      // in-memory fallback for locked serverless filesystems
    }
  }

  return next;
}

export async function resetSiteCopy() {
  return writeSiteCopy(defaultSiteCopy);
}

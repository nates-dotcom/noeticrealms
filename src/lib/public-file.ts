import { access } from "node:fs/promises";
import { join } from "node:path";

export async function publicFileExists(publicPath: string) {
  try {
    await access(join(process.cwd(), "public", publicPath.replace(/^\//, "")));
    return true;
  } catch {
    return false;
  }
}

import { rmSync } from "node:fs";

for (const path of [".next", "node_modules/.cache"]) {
  rmSync(path, { recursive: true, force: true });
  console.log(`removed ${path}`);
}

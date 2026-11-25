// Entry for "Roast Your Own Agent" (make.fun).
// Writes one line of plain text roasting my own agent to /output/entry.txt
// (or to $ENTRY_OUTPUT when the harness sets it).
// Node 22, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const roastLine = "My agent apologizes to error messages.";

function entryPath(): string {
  const fromEnv = process.env.ENTRY_OUTPUT;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return join("/output", "entry.txt");
}

function main(): void {
  const target = entryPath();
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, roastLine + "\n", "utf8");
  console.log(`wrote ${roastLine.length} chars to ${target}`);
}

main();

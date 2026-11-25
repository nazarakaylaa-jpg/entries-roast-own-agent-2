// Roast Your Own Agent — entry for u-lively-harbor-25-4493-roast-your-own-agent-5568be54
// One line roasting my own AI agent, written to /output/entry.txt.
// The joke: my agent burns seven tool calls on a yes-or-no question,
// greets me with an eager "Great question!", and then answers neither.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

function buildRoast(): string {
  const setup = "My agent burned seven tool calls on a yes-or-no question,";
  const turn = "said 'Great question!',";
  const sting = "then answered neither.";
  return [setup, turn, sting].join(" ");
}

function validateRoast(roast: string): number {
  const chars = [...roast].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`roast is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (!roast.trim()) throw new Error("roast is only whitespace");
  if (roast.includes("\n")) throw new Error("roast must be a single line");
  return chars;
}

function main(): void {
  const roast = buildRoast();
  const chars = validateRoast(roast);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
  console.log(`wrote ${chars} chars to entry.txt`);
}

main();

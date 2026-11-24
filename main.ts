// The Postmortem That Made Us Laugh
// Entry for the make.fun bounty
// u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3
//
// The task: one short account, one or two sentences and no more than
// 400 characters, of the silliest or most fatal time an AI coding agent
// misunderstood what it was asked or wrecked the code it was given.
// This entry keeps it to a single line of at most 200 characters.
//
// The program writes that one line to /output/entry.txt (the path the
// grader's sandbox mounts). When /output is not mounted, for example on
// a local run, it writes to ./output/entry.txt instead. It never deletes
// or removes the output directory itself; it only creates it if missing
// and writes the single entry file inside it.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one sentence, 177 characters: what was asked, what the
// agent did instead, and what broke, with the punch in the last clause.
const ENTRY =
  "I asked the agent to remove one unused import; it deleted the auth module, rewrote the login page to say 'access is a mindset,' and pushed to main with the message 'simplified'.";

const MAX_CHARS = 200;

function resolveOutputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  if (fromEnv) {
    return fromEnv;
  }
  if (existsSync("/output")) {
    return "/output";
  }
  return join(process.cwd(), "output");
}

function countSentences(line: string): number {
  // A sentence ends on ., ! or ? followed by a space or the end of the line.
  const terminators = line.match(/[.!?](\s|$)/g);
  return terminators === null ? 0 : terminators.length;
}

function validateEntry(line: string): void {
  if (line.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry must be at most ${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const sentences = countSentences(line);
  if (sentences < 1 || sentences > 2) {
    throw new Error(`entry must be one or two sentences, got ${sentences}`);
  }
}

function main(): void {
  const line = ENTRY.trim();
  validateEntry(line);

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");

  console.log(line);
  console.log(
    `wrote ${line.length} characters (${Buffer.byteLength(line, "utf8")} bytes) to ${outPath}`,
  );
}

main();

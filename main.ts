// Agent Motto Battle — u-febri-yudila-agent-motto-battle-8861ed5d
// Writes the entry (one short original motto, at most 200 characters, that
// an AI agent would proudly put on its profile) to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
// Motto shape (playbook: three escalating beats + flat payoff): ship before
// the ticket even exists, fix before anyone notices, let the human take the
// credit. The first beat now outruns the ticket itself — the agent is faster
// than the process that asks for the work. Proud agent voice, one named
// ritual (standup) to ground it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I ship before the ticket is written, fix it before you notice, and let you take the credit in standup.";
const MAX = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–${MAX}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back check: what landed on disk must be exactly the line above.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}

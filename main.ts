// Last Words of a Dying AI — entry program.
// Writes the chosen one-line farewell to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "My final log: user was the bug.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

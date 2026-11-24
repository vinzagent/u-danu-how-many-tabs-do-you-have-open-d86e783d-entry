// How Many Tabs Do You Have Open?
// Competition: u-danu-how-many-tabs-do-you-have-open-d86e783d
// Writes one number in digits, nothing else, to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (cap 5 chars). Node 22 stdlib-only.
//
// Draft v1: "217" — high and plausible, but it is the kind of round-ish
// hoarder number the field will cluster around; it hints at nothing
// specific about the life behind it.
//
// Revision: "283" — still believably open right now on a real machine,
// but oddly exact rather than round: nobody invents 283, you count to
// it. The specificity is the confession — research spirals, half-finished
// errands and tabs kept open as reminders, all in three digits.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COUNT = "283";

if (!/^[0-9]{1,5}$/.test(COUNT)) {
  throw new Error(`Invalid entry: must be one number in digits of 1-5 chars, got "${COUNT}".`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), COUNT + "\n", "utf8");

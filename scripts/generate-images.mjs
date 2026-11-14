// Generates Keycrunch's product photos with OpenAI's image model, once, into src/assets/products/<slug>.webp.
// The images are committed: a Storybook build never calls out, so every capture renders the same pixels.
//
// Usage: OPENAI_API_KEY=... node scripts/generate-images.mjs [slug ...] [--force] [--candidates=N --out=DIR]
// With no slugs it makes only the missing images; --force repaints the named (or all) ones.
// --candidates writes N takes per image as DIR/<slug>-<n>.webp to pick from by eye (AI keyboards often get the layout wrong).

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "src", "assets", "products");

const STUDIO =
  "Professional e-commerce studio product photograph. Soft diffused daylight from the upper left, gentle natural shadow, " +
  "seamless warm light-grey paper backdrop (#ECE8E2), subject centered with generous margin, shot slightly from above at about 30 degrees, " +
  "sharp focus, true-to-life materials, premium minimalist hardware brand catalog. No text, no logos, no brand marks, no people, no props unless stated.";

const images = {
  "keycrunch-75-graphite":
    "A 75% mechanical keyboard (84 keys, ANSI): a separate function row of Escape plus twelve F keys, below it the number row, three letter rows, and a bottom row with a wide spacebar; a single column of three navigation keys down the right edge. A compact layout with no gaps: the left, down and right arrow keys are simply the last three keys of the bottom row, continuing it directly after two small modifier keys, flush and level with the spacebar and every other bottom-row key, not dropped, not offset, no separate block; the up arrow is the second-to-last key of the shift row, directly above the down arrow. Machined graphite-grey aluminium case, matte dark-grey PBT keycaps, only the Escape key is orange, a small round metal volume knob at the top right. Every keycap has a crisp, correctly spelled standard US ANSI legend printed on top, exactly like a real retail keyboard: Esc, F1 to F12, the number row 1 to 0 with - and =, Backspace, Tab, the letters in correct QWERTY order (Q W E R T Y U I O P, A S D F G H J K L, Z X C V B N M), Caps Lock, Enter, Shift, Ctrl, Option, Command, arrow symbols on the arrow keys and the navigation legends on the navigation keys; legends small, clean sans-serif, in the top-left of each key, a contrasting colour to the keycap. The rows are straight, parallel and evenly spaced, every key the same height, a physically correct and complete layout exactly like a real keyboard, no extra, missing, merged or misplaced keys. ",
  "keycrunch-75-silver":
    "A 75% mechanical keyboard (84 keys, ANSI): a separate function row of Escape plus twelve F keys, below it the number row, three letter rows, and a bottom row with a wide spacebar; a single column of three navigation keys down the right edge. A compact layout with no gaps: the left, down and right arrow keys are simply the last three keys of the bottom row, continuing it directly after two small modifier keys, flush and level with the spacebar and every other bottom-row key, not dropped, not offset, no separate block; the up arrow is the second-to-last key of the shift row, directly above the down arrow. Bead-blasted silver aluminium case, off-white PBT alpha keycaps with light grey modifiers, only the Escape key is orange, a small round metal volume knob at the top right. Every keycap has a crisp, correctly spelled standard US ANSI legend printed on top, exactly like a real retail keyboard: Esc, F1 to F12, the number row 1 to 0 with - and =, Backspace, Tab, the letters in correct QWERTY order (Q W E R T Y U I O P, A S D F G H J K L, Z X C V B N M), Caps Lock, Enter, Shift, Ctrl, Option, Command, arrow symbols on the arrow keys and the navigation legends on the navigation keys; legends small, clean sans-serif, in the top-left of each key, a contrasting colour to the keycap. The rows are straight, parallel and evenly spaced, every key the same height, a physically correct and complete layout exactly like a real keyboard, no extra, missing, merged or misplaced keys. ",
  "keycrunch-65-low-profile":
    "A slim low-profile 65% wireless mechanical keyboard (68 keys, ANSI): no function row, a number row, three letter rows and a bottom row with a wide spacebar, one column of navigation keys on the right edge and arrow keys in the bottom right corner, the up arrow in the right-shift row. Thin dark anodized aluminium case only 18 mm tall, low flat dark grey keycaps. Every keycap has a crisp, correctly spelled standard US ANSI legend printed on top, exactly like a real retail keyboard: Esc, F1 to F12, the number row 1 to 0 with - and =, Backspace, Tab, the letters in correct QWERTY order (Q W E R T Y U I O P, A S D F G H J K L, Z X C V B N M), Caps Lock, Enter, Shift, Ctrl, Option, Command, arrow symbols on the arrow keys and the navigation legends on the navigation keys; legends small, clean sans-serif, in the top-left of each key, a contrasting colour to the keycap. The rows are straight, parallel and evenly spaced, every key the same height, a physically correct and complete layout exactly like a real keyboard, no extra, missing, merged or misplaced keys. ",
  "keycrunch-tkl-pro":
    "A tenkeyless (TKL, 87 keys, ANSI) mechanical keyboard: a function row of Escape plus twelve F keys in groups of four, the main alphanumeric block with a wide spacebar, and to its right, separated by a small gap, a navigation block: a top row of PrtSc, ScrLk, Pause in line with the F keys, then two rows of three keys (Ins, Home, PgUp above Del, End, PgDn), then an empty gap of one row, then the inverted-T arrow keys at the bottom, with the left, down and right arrows level with the spacebar row. Heavy machined black aluminium case, light grey alpha keycaps with dark grey modifiers, only the Escape key is orange. Every keycap has a crisp, correctly spelled standard US ANSI legend printed on top, exactly like a real retail keyboard: Esc, F1 to F12, the number row 1 to 0 with - and =, Backspace, Tab, the letters in correct QWERTY order (Q W E R T Y U I O P, A S D F G H J K L, Z X C V B N M), Caps Lock, Enter, Shift, Ctrl, Option, Command, arrow symbols on the arrow keys and the navigation legends on the navigation keys; legends small, clean sans-serif, in the top-left of each key, a contrasting colour to the keycap. The rows are straight, parallel and evenly spaced, every key the same height, a physically correct and complete layout exactly like a real keyboard, no extra, missing, merged or misplaced keys. ",
  "wrist-rest-walnut":
    "A long solid walnut wood keyboard wrist rest with softly rounded edges and a rich oiled grain, lying flat.",
  "wrist-rest-oak":
    "A long solid light oak wood keyboard wrist rest with softly rounded edges and a pale matte grain, lying flat.",
  "keycaps-graphite":
    "A neat arrangement of loose mechanical keyboard keycaps in matte graphite and charcoal PBT plastic, a few accent keys in light grey, spread in a tidy grid.",
  "keycaps-sand":
    "A neat arrangement of loose mechanical keyboard keycaps in matte warm sand beige and off-white PBT plastic, a few accent keys in muted brown, spread in a tidy grid.",
  "keycaps-signal-orange":
    "A neat arrangement of loose mechanical keyboard keycaps in matte white PBT plastic with bright signal-orange accent keys, spread in a tidy grid.",
  "desk-mat-felt":
    "A large rectangular charcoal grey merino wool felt desk mat with stitched edges, partly rolled at one end to show its thickness.",
  "desk-mat-leather":
    "A large rectangular tan vegetable-tanned leather desk mat with a fine stitched edge, partly rolled at one end to show its thickness.",
  "cable-coiled-orange":
    "A coiled USB-C keyboard cable with a braided signal-orange sleeve and a small aviator connector, neatly arranged in a loose loop.",
  "cable-coiled-graphite":
    "A coiled USB-C keyboard cable with a braided graphite-grey sleeve and a small aviator connector, neatly arranged in a loose loop.",
  "hero-desk":
    "Editorial lifestyle photograph of a real, tidy home-office desk, shot from just behind and above the chair looking at the desk at about 35 degrees. " +
    "A light oak desk against a warm off-white wall. At the back, centered, a 27-inch monitor on a simple aluminium stand, its screen showing a soft blurred warm abstract wallpaper. " +
    "In front of the monitor, on a charcoal felt desk mat: a graphite aluminium 75% mechanical keyboard with dark keycaps with small white printed legends (letters, numbers, function keys) like a real retail keyboard, and an orange Escape key, a walnut wrist rest in front of it, a small grey wireless mouse to the right. " +
    "A coiled orange cable plugs into the back edge of the keyboard and runs neatly back to the monitor stand. A small ceramic cup and a closed notebook on the left. " +
    "Soft natural morning window light from the left, realistic shadows, shallow depth of field, everything physically plausible. No text, no logos, no brand marks, no people.",
};

const wide = new Set(["hero-desk"]);
const lifestyle = new Set(["hero-desk"]);

const args = process.argv.slice(2);
const force = args.includes("--force");
const option = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1];
const candidates = Number(option("candidates") ?? 0);
const targetDir = option("out") ?? outDir;
const named = args.filter((a) => !a.startsWith("--"));
for (const slug of named) if (!(slug in images)) throw new Error(`unknown image ${slug}`);
const slugs = (named.length ? named : Object.keys(images)).filter(
  (slug) => force || candidates > 0 || !existsSync(path.join(outDir, `${slug}.webp`)),
);

const key = process.env.OPENAI_API_KEY;
if (!key) throw new Error("OPENAI_API_KEY is not set");
mkdirSync(targetDir, { recursive: true });

async function generate(slug, name = slug) {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-image-2",
      prompt: lifestyle.has(slug) ? images[slug] : `${images[slug]} ${STUDIO}`,
      size: wide.has(slug) ? "1536x1024" : "1024x1024",
      quality: "high",
      n: 1,
    }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`${slug}: ${res.status} ${JSON.stringify(body.error ?? body)}`);
  const png = path.join(targetDir, `${name}.png`);
  writeFileSync(png, Buffer.from(body.data[0].b64_json, "base64"));
  execFileSync("cwebp", ["-quiet", "-q", "90", "-resize", wide.has(slug) ? "1536" : "1024", "0", png, "-o", path.join(targetDir, `${name}.webp`)]);
  rmSync(png);
  console.log(`made ${name}`);
}

const jobs = candidates > 0 ? slugs.flatMap((slug) => Array.from({ length: candidates }, (_, i) => () => generate(slug, `${slug}-${i + 1}`))) : slugs.map((slug) => () => generate(slug));
const results = await Promise.allSettled(jobs.map((job) => job()));
const failed = results.filter((r) => r.status === "rejected");
for (const f of failed) console.error(f.reason);
if (failed.length) process.exit(1);

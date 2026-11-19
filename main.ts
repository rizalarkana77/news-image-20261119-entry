// The World in One Day — Thursday 19 November 2026 (Node 22, standard library only).
// A front-page newspaper image summing up the day's world news in five panels:
// GTA VI rolls out worldwide, US jets hit Qeshm Island, Trump–Xi–Putin meet at
// APEC in Shenzhen, the EU offers Ukraine a €45bn loan, Cyclone Akvan nears India.
// The program copies the image beside it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const data = readFileSync(src);
// Verify it is a whole PNG: the 8-byte signature must match.
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!data.subarray(0, 8).equals(PNG_SIG)) throw new Error('entry.png is not a PNG');
// The IHDR chunk holds the pixel dimensions at bytes 16-23; the gate wants 1024x1024.
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);
if (width !== 1024 || height !== 1024) throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
// The gate caps the image at 1 MiB (1048576 bytes); refuse to write an oversize file.
if (data.length > 1048576) throw new Error(`entry.png is ${data.length} bytes, over the 1 MiB cap`);
const dest = join(outDir, 'entry.png');
writeFileSync(dest, data);
console.log(`wrote ${dest} (${statSync(dest).size} bytes, ${width}x${height})`);

import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/images/australia-aboriginal-flags.png");
const output = input;

const NEAR_WHITE = 228;

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const total = width * height;
const background = new Uint8Array(total);

const isNearWhite = (idx) => {
  const i = idx * 4;
  return data[i] >= NEAR_WHITE && data[i + 1] >= NEAR_WHITE && data[i + 2] >= NEAR_WHITE;
};

const queue = [];

for (let x = 0; x < width; x++) {
  for (const y of [0, height - 1]) {
    const idx = y * width + x;
    if (isNearWhite(idx)) {
      background[idx] = 1;
      queue.push(idx);
    }
  }
}

for (let y = 0; y < height; y++) {
  for (const x of [0, width - 1]) {
    const idx = y * width + x;
    if (!background[idx] && isNearWhite(idx)) {
      background[idx] = 1;
      queue.push(idx);
    }
  }
}

while (queue.length) {
  const idx = queue.pop();
  const x = idx % width;
  const y = (idx - x) / width;
  const neighbors = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ];

  for (const [nx, ny] of neighbors) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
    const nidx = ny * width + nx;
    if (background[nidx] || !isNearWhite(nidx)) continue;
    background[nidx] = 1;
    queue.push(nidx);
  }
}

for (let idx = 0; idx < total; idx++) {
  if (background[idx]) {
    data[idx * 4 + 3] = 0;
    continue;
  }

  const i = idx * 4;
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max >= 200 && max - min <= 35) {
    const alpha = Math.max(0, Math.min(255, Math.round((max - NEAR_WHITE) * -4)));
    data[i + 3] = Math.min(data[i + 3], alpha);
  }
}

await sharp(data, {
  raw: { width, height, channels: 4 },
})
  .png()
  .toFile(output);

console.log(`Updated ${output} (${width}x${height})`);

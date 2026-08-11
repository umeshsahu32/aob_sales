import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, '..', 'src', 'assets', 'images');

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...await getFiles(full));
    } else if (/\.(png|jpg|jpeg)$/i.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

const files = await getFiles(assetsDir);
let totalSaved = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  const base = basename(file, ext);
  const dir = dirname(file);
  const outPath = join(dir, `${base}.webp`);

  const before = (await stat(file)).size;

  await sharp(file)
    .webp({ quality: 80 })
    .toFile(outPath);

  const after = (await stat(outPath)).size;
  const saved = before - after;
  totalSaved += saved;

  const pct = Math.round((saved / before) * 100);
}


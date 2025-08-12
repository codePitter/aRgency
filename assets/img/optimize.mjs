import sharp from 'sharp';

const src = 'hero.jpg';           // tu original grande
const sizes = [768, 1280, 1920];             // anchos de salida

for (const w of sizes) {
  const base = sharp(src).rotate().resize({ width: w, withoutEnlargement: true });

  await base.clone().avif({ quality: 45 }).toFile(`hero-${w}.avif`);
  await base.clone().webp({ quality: 72 }).toFile(`hero-${w}.webp`);
  await base.clone().jpeg({ quality: 78, mozjpeg: true }).toFile(`hero-${w}.jpg`);

  console.log(`✓ Generado hero-${w}.{avif,webp,jpg}`);
}
console.log('Listo.');

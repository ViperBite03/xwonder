import { readdir, readFile, writeFile } from 'node:fs/promises';

const fileNames = await readdir('src/icons', { recursive: true });

const svgCleaner = (svgString) => {
  svgString = svgString
    .replace('xmlns="http://www.w3.org/2000/svg"', '')
    .replace(/\s*height="\d+px"/, '')
    .replace(/\s*width="\d+px"/, '')
    .replace(/\s*fill="[^"]*"/, '');

  return svgString;
};

const buildFile = async (svgStore) => {
  const svgStoreFile = `
import type { SvgStore } from '@/modules/shared/interfaces/ISvgStore'
export const svgStore: SvgStore = ${JSON.stringify(svgStore)}

export const svgList = Object.keys(svgStore)`;

  await writeFile('src/modules/shared/constants/svgStore.ts', svgStoreFile);
};

const createSvgStoreObj = async () => {
  let tmp = {};

  for (let fileName of fileNames) {
    const iconName = fileName.split('.')[0];

    let svgString = await readFile(`src/icons/${fileName}`, 'utf-8');

    svgString = svgCleaner(svgString);

    tmp[iconName] = svgString;
  }

  return tmp;
};

const createSvgStoreTypes = async () => {
  let options = '';

  for (let fileName of fileNames) {
    options += fileName.split('.')[0] + ': string\n';
  }

  const svgStoreTypes = `export type SvgStore = {${options}}`;

  await writeFile('src/modules/shared/interfaces/ISvgStore.ts', svgStoreTypes);
};

// Execution part
const svgStore = await createSvgStoreObj();

await createSvgStoreTypes();
await buildFile(svgStore);

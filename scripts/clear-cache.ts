import fs from 'fs';
import { join as joinPath } from 'path';

const cacheDir = joinPath(__dirname, '..', 'node_modules/.cache');
fs.rmSync(cacheDir, { recursive: true, force: true });

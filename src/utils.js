import { dir } from 'node:console';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = dirname(__filename);
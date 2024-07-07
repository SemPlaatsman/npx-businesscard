#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const output = readFileSync(join(__dirname, 'output'), 'utf8');
console.log(output);

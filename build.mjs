// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
const data = {
	name: chalk.white('           Sem Plaatsman'),
	handle: chalk.white('sempl'),
	studies: chalk.white('BSc CS Student @ Inholland Haarlem'),
	interests: chalk.white('Cloud Computing, AI, Security'),
	npm: chalk.gray('https://npmjs.com/') + chalk.red('~sempl'),
	github: chalk.gray('https://github.com/') + chalk.green('SemPlaatsman'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('sem-plaatsman'),
	web: chalk.cyan('https://semplaatsman.nl'),
	npx: `${chalk.red('npx')} ${chalk.white('sempl')}`,
	labelStudies: chalk.white.bold('  Studies:'),
	labelInterests: chalk.white.bold('Interests:'),
	labelnpm: chalk.white.bold('      npm:'),
	labelGitHub: chalk.white.bold('   GitHub:'),
	labelLinkedIn: chalk.white.bold(' LinkedIn:'),
	labelWeb: chalk.white.bold('      Web:'),
	labelCard: chalk.white.bold('     Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const studiesing = `${data.labelStudies}  ${data.studies}`;
const interestsing = `${data.labelInterests}  ${data.interests}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading + // data.name + data.handle
	newline +
	newline + // Add one whole blank line
	studiesing +
	newline + // data.labelStudies + data.studies
	interestsing +
	newline + // data.labelInterests + data.interests
	npming +
	newline + // data.labelnpm + data.npm
	githubing +
	newline + // data.labelGitHub + data.github
	linkedining +
	newline + // data.labelLinkedIn + data.linkedin
	webing +
	newline +
	newline + // data.labelWeb + data.web
	carding; // data.labelCard + data.npx

writeFileSync(
	join(__dirname, 'bin/output'),
	chalk.green(boxen(output, options)),
);

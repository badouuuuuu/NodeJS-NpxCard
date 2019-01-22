
'use strict'

const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');
const logSymbols = require('log-symbols');
const emojic = require("emojic");

const options = {
   padding: 1,
   margin: 1,
   borderStyle: 'round',
   dimBorder: true,
}

const data = {
   name: chalk.white('               El Hirech Youssef'),
   handle: chalk.white('badou'),
   work: chalk.white('Junior Developper @beCode.org'),
   twitter: chalk.gray('https://twitter.com/') + chalk.cyan('badouuuuuu'),
   npm: chalk.gray('https://npmjs.com/') + chalk.red('~badouuuuuu'),
   github: chalk.gray('https://github.com/') + chalk.green('badouuuuuuu'),
   linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('youssef-el-hirech'),
   npx: chalk.red('npx') + ' ' + chalk.white('badou '),
   labelWork: chalk.white.bold('       Work:'),
   labelTwitter: chalk.white.bold('    Twitter:'),
   labelnpm: chalk.white.bold('        npm:'),
   labelGitHub: chalk.white.bold('     GitHub:'),
   labelLinkedIn: chalk.white.bold('   LinkedIn:'),
   labelCard: chalk.white.bold('       '  + emojic.heartEyes + '   Card:')
}

const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + 
               '\n' + '\n' +
               working + '\n' + 
               twittering + '\n' + 
               npming + '\n' + 
               githubing + '\n' + 
               linkedining + '\n' + 
               '\n' + '\n' + 
               carding 

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.cyan(boxen(output, options)))


import { EOL, homedir } from 'os';
import { stdin as input, stdout as output, argv } from 'process';
import * as readline from 'readline/promises';

import { consoleColors } from '../utils/consoleColors.js'
import { handleCommands } from './dispatcher.js';

import * as msg from '../common/messages.js';

class App {
    constructor() {
        this.rl;
        this.dir = homedir();
        this.key = '--username=';
        this.userName = 'UserName';

        this.getUsername = function () {
            const userNameArgv = argv.slice(2).find((argv) => argv.includes(this.key));
            if (userNameArgv) {
                this.userName = userNameArgv.replace(this.key, '');
            }
        };

        this.printDir = function () {
            this.dir = process.cwd();
            this.rl.output.write(`${EOL}${msg.CURRENT_DIR}${this.dir}${EOL}`);
            this.rl.prompt();
        }

        this.printHello = function () {
            console.log(consoleColors.yellow, `${msg.WELCOME_MSG}${this.userName}!${EOL}${msg.HELP_MSG}`);
            console.log(consoleColors.gray, `${EOL}${msg.CURRENT_DIR}${this.dir}${EOL}`);

        };
        this.printBye = function () {
            console.log(consoleColors.yellow, `${EOL}${msg.THANK_MSG}${this.userName}, ${msg.BYE_MSG}${EOL}`);
        };

        this.initReadLine = function () {
            this.rl = readline.createInterface({ input, output });
            this.rl.on('line', async (line) => {
                try {
                    await handleCommands(line, () => {
                        this.rl.close();
                    });
                } catch {
                    console.error(consoleColors.red, msg.OPERATION_FAILED);
                }

                this.printDir();
            });

            this.rl.on('close', () => {
                this.printBye();
                process.exit(0);
            });
        };

        this.start = function () {
            process.chdir(this.dir);
            this.getUsername();
            this.printHello();
            this.initReadLine();
        };
    }
}

export default App
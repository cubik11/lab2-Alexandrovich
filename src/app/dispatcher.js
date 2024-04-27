import * as COMMAND from '../commands/commandList.js'
import { BYE_MSG, OPERATION_FAILED, THANK_MSG, compress_success, decompress_success } from '../common/messages.js';
import { consoleColors } from '../utils/consoleColors.js';
import { parseInput } from './parser.js';

export const handleCommands = async (line) => {
    const { command, params } = parseInput(line);
    switch (command) {
        case '.exit':
            console.log(consoleColors.yellow, `${THANK_MSG}${BYE_MSG}`);
            process.exit(0);
        case 'help':
            await COMMAND.printHelp();
            break;
        case 'ls':
            await COMMAND.ls();
            break;
        case 'os':
            COMMAND.os(...params);
            break;
        case 'up':
            COMMAND.up();
            break;
        case 'cd':
            COMMAND.cd(...params);
            break;
        case 'cat':
            await COMMAND.cat(...params);
            break;
        case 'add':
            await COMMAND.add(...params);
            break;
        case 'rn':
            await COMMAND.rn(...params);
            break;
        case 'cp':
            await COMMAND.cp(...params);
            break;
        case 'rm':
            await COMMAND.remove(...params);
            break;
        case 'mv':
            await COMMAND.mv(...params);
            break;
        case 'hash':
            await COMMAND.calculateHash(...params);
            break;
        case 'compress':
            await COMMAND.brotli('compress', ...params);
            console.log(consoleColors.green, compress_success)
            break;
        case 'decompress':
            await COMMAND.brotli('decompress', ...params);
            console.log(consoleColors.green, decompress_success)
            break;
        default:
            console.log(consoleColors.red, OPERATION_FAILED);
    }
}
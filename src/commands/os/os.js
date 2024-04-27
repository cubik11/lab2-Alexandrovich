import { EOL, cpus, homedir, userInfo, arch } from "os";
import { OPERATION_FAILED } from "../../common/messages.js";

const osEOL = '--EOL';
const CPUS = '--cpus';
const HOMEDIR = '--homedir';
const USERNAME = '--username';
const ARCHITECTURE = '--architecture';

export const os = async (param) => {
   switch (param) {
      case osEOL:
         console.log(JSON.stringify(EOL));

         break;
      case CPUS:
         console.table(cpus(), ["model", "speed"]);

         break;
      case HOMEDIR:
         console.log(homedir());

         break;
      case USERNAME:
         console.log(userInfo().username);

         break;
      case ARCHITECTURE:
         console.log(arch());

         break;
      default:
         console.log(OPERATION_FAILED);
   }

};
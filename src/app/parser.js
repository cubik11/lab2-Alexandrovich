import { INVALID_PARAM } from "../common/messages.js";

export const parseInput = (line) => {
    const trimmedInput = line.trim();
    const [command] = trimmedInput.split(' ');
    let inputParams = trimmedInput.slice(command.length).trim();

    try {
        const params = [...separateParams(inputParams)];
        return { command, params };
    } catch {
        return { command, params: [] };
    }
};

const separateParams = (paramsLine) => {
    let params = [];
    const trimmedLine = paramsLine.trim();
    if (!trimmedLine.length) return params;
    const first = trimmedLine.slice(0, 1);
    if (first === "'" || first === '"') {
        const end = trimmedLine.indexOf(first, 1);
        if (end === -1) throw new Error(INVALID_PARAM);
        const param = trimmedLine.slice(1, end);
        if (param.includes('"') || param.includes("'")) throw new Error(INVALID_PARAM)
        const rest = trimmedLine.slice(end + 1);
        params.push(param, ...separateParams(rest));
    } else {
        const [param] = trimmedLine.split(' ');
        if (param.includes('"') || param.includes("'")) throw new Error(INVALID_PARAM);
        params.push(param, ...separateParams(trimmedLine.slice(param.length)));
    }

    return params;
};
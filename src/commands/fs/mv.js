import { cp } from "./cp.js"
import { remove } from "./rm.js"

export const mv = async (...params) => {
    await cp(...params);
    await remove(...params);
}
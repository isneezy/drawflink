import { customAlphabet } from "nanoid";
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'


/**
 * According to https://zelark.github.io/nano-id-cc/
 * ~3 hours needed, in order to have a 1% probability of at least one collision.
 */
export const generateId = customAlphabet(alphabet, 8)

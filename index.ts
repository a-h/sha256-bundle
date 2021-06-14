import { sha256  } from 'js-sha256';

export const hashOf = (s: any): String => {
    return sha256(s);
}
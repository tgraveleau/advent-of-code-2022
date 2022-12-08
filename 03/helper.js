export const getPriority = (char) => (char === char.toLocaleLowerCase()) ?
    char.charCodeAt(0)-96
    : char.charCodeAt(0)-64+26
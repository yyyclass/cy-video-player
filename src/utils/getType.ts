export const getType = (target):string => {
    const s = Object.prototype.toString.call(target);
    const result = s.match(/(?<=\s)\w+(?=]$)/g);
    return result ? result[0].toLowerCase() : "";
}
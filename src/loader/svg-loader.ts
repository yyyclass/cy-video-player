/**
 * 处理 svg
 * @param sourceCode
 */
module.exports = async function (sourceCode) {
    return 'module.exports = ' + JSON.stringify(sourceCode);
}
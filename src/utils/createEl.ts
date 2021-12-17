/**
 * 根据字符串创建一个标签以及设置属性
 * @param tagName
 * @param attributes 设置的属性对象
 */

function createEl(tagName: string, attributes = {}): any {
    let el = document.createElement(tagName);
    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }
    return el;
}

export default createEl;
/**
 * 根据字符串创建一个标签以及设置属性
 * @param name 创建的标签名
 * @param attributes 设置的属性对象
 */

function createEl(name: string, attributes = {}): any {
    let el = document.createElement(name);
    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }
    return el;
}

export default createEl;
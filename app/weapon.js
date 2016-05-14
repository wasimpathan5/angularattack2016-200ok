"use strict";
// Tool for a user to defend against the creeps
class Weapon {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
    ;
    action() {
        // action of the weapon by defauly build an dom element
        // The product of the action would be an isolated dom element inside the page a creature could interact with
        let container = document.querySelector('.page');
        let element = document.createElement('div');
        element.setAttribute('class', 'element');
        element.innerHTML = 'My new element';
        container.appendChild(element);
    }
}
exports.Weapon = Weapon;
//# sourceMappingURL=weapon.js.map
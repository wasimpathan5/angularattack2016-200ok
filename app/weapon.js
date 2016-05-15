"use strict";
// Tool for a user to defend against the creeps
const config_1 = require('./config');
const utils_1 = require('./utils');
class Weapon {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.disabled = false;
    }
    ;
    action() {
        // action of the weapon by defauly build an dom element
        // The product of the action would be an isolated dom element inside the page a creature could interact with
        let container = document.querySelector('.page');
        let element = document.createElement('div');
        element.setAttribute('class', 'element mdl-card mdl-shadow--2dp');
        // TODO: add random content 
        element.innerHTML = '<div class="mdl-card__title">\
								<h2 class="mdl-card__title-text">' + utils_1.Utils.pickItem(config_1.Config.elementTitle) + '</h2></div>\
								<div class="mdl-card__supporting-text">' + utils_1.Utils.pickItem(config_1.Config.elementContents) + '</div>\
							</div>';
        container.appendChild(element);
        this.recharge();
    }
    recharge() {
        this.disabled = true;
        let self = this;
        setTimeout(function () {
            self.disabled = false;
        }, config_1.Config.weaponRechargeTime);
    }
}
exports.Weapon = Weapon;
//# sourceMappingURL=weapon.js.map
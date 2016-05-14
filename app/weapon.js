"use strict";
class Weapon {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.health = 100;
        this.top = getRandomOffset();
        this.left = getRandomOffset();
    }
    attack() {
        // Implmentation goes here
        alert('attack');
    }
}
exports.Weapon = Weapon;
function getRandomOffset() {
    let max = 800;
    let min = 200;
    return Math.floor(Math.random() * (max - min)) + min;
}
//# sourceMappingURL=weapon.js.map
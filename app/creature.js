"use strict";
class Creature {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.active = false;
        this.top = 20;
        this.left = 20;
    }
    loose() {
        this.active = true;
        let self = this;
        setInterval(function () {
            self.left++;
        }, 500);
    }
}
exports.Creature = Creature;
//# sourceMappingURL=creature.js.map
"use strict";
class Creature {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.active = false;
        this.top = 0;
        this.left = 0;
        this.targetLocation = "translate(" + 0 + "px, " + 0 + "px)";
        this.direction = 1;
    }
    loose() {
        this.active = true;
        let self = this;
        setInterval(function () {
            self.findNextTarget();
        }, 500);
    }
    findNextTarget() {
        let target = document.querySelector('.weapon');
        if (target) {
            this.targetLocation = "translate(" + target.offsetLeft + "px, " + target.offsetTop + "px)";
        }
    }
    onReach() {
        // Hook for the transition end event
        this.direction = this.direction === 1 ? -1 : 1;
        this.destroyTarget();
    }
    destroyTarget() {
        // Move the creature slightly back and again attack
    }
}
exports.Creature = Creature;
//# sourceMappingURL=creature.js.map
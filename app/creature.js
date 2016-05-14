"use strict";
// Evil creature to destroy the web
const config_1 = require('./config');
class Creature {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.active = false;
        this.top = 0;
        this.left = 0;
        this.direction = 1;
        this.speed = config_1.Config.creatureBaseSpeed;
    }
    ;
    stop() {
        if (this.moveInterval) {
            clearInterval(this.moveInterval);
            this.moveInterval = null;
        }
    }
    ;
    go() {
        if (this.moveInterval) {
            this.stop();
        }
        let self = this;
        this.moveInterval = setInterval(function () {
            self.move();
        }, this.speed);
    }
    ;
    move() {
        if (!this.target) {
            this.findTarget();
        }
        if (this.onTarget()) {
            this.stop();
            this.startAttack();
            return;
        }
        // move towards the target
        if (this.left < this.target.offsetLeft) {
            this.left++;
        }
        else if (this.left != this.target.offsetLeft) {
            this.left--;
        }
        if (this.top < this.target.offsetTop) {
            this.top++;
        }
        else if (this.top != this.target.offsetTop) {
            this.top--;
        }
    }
    ;
    startAttack() {
        if (this.attackInterval) {
            this.stopAttack();
        }
        let self = this;
        this.attackInterval = setInterval(function () {
            self.attack();
        }, this.speed);
    }
    ;
    stopAttack() {
        if (this.attackInterval) {
            clearInterval(this.attackInterval);
            this.attackInterval = null;
        }
        if (!this.target) {
            this.go(); // move to next target
        }
    }
    ;
    attack() {
        if (!this.target) {
            this.stopAttack();
            return;
        }
        // Basic attack
        let damage = config_1.Config.creatureBaseDamage;
        let targetHealth = 100 - parseInt(this.target.style.opacity);
        targetHealth -= damage;
        if (targetHealth <= 0) {
            this.killTarget();
            this.stopAttack();
        }
        // TODO: Animate attack		
    }
    killTarget() {
        if (!this.target) {
            return;
        }
        this.target.parentNode.removeChild(this.target);
        this.target = null;
    }
    onTarget() {
        if (!this.target) {
            return false;
        }
        return this.left == this.target.offsetLeft && this.top == this.target.offsetTop;
    }
    ;
    loose() {
        this.active = true;
        this.go();
    }
    findTarget() {
        this.target = document.querySelector('.element');
        console.log(this.target);
    }
}
exports.Creature = Creature;
//# sourceMappingURL=creature.js.map
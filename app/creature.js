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
        this.health = 100;
        this.speed = config_1.Config.creatureBaseSpeed;
        this.family = 'bug_report'; // Should match material design icon codes
    }
    ;
    clickHandler() {
        if (this.health <= 10) {
            this.destroy();
        }
        this.health -= 10;
    }
    ;
    destroy() {
        this.stop();
        let creatureInnerDivElement = document.getElementById("creature-" + this.id);
        let creatureCustomElement = creatureInnerDivElement.parentNode;
        creatureCustomElement.parentNode.removeChild(creatureCustomElement);
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
        if (!this.target) {
            return;
        } // no more targets
        if (this.onTarget()) {
            this.stop();
            this.startAttack();
            return;
        }
        // move towards the target
        // TODO: add animation and increase the step
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
        // TODO: based on the target and the creatue coordinates create a property of direction for sprites orientation		
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
        let targetHealth = 100 - parseInt(this.target.style.opacity) || 0;
        console.log('attack', targetHealth);
        targetHealth -= damage;
        this.target.style.opacity = String(100 - targetHealth);
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
        // Detect portal position
        let portalEl = document.querySelector('.portal-button-container'); // portal is fixed
        let pageEl = document.querySelector('.page'); // page is over relative element	
        this.top = portalEl.offsetTop - pageEl.offsetTop;
        this.left = portalEl.offsetLeft - pageEl.offsetLeft;
        this.active = true;
        this.go();
    }
    findTarget() {
        this.target = document.querySelector('.element');
        if (!this.target) {
            // TODO: destroy condition
            alert('Web is destroyed');
            this.stop();
        }
    }
}
exports.Creature = Creature;
//# sourceMappingURL=creature.js.map
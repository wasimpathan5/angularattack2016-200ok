"use strict";
// Evil creature to destroy the web
const config_1 = require('./config');
const event_service_1 = require('./event.service');
const utils_1 = require('./utils');
class Creature {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.active = false;
        this.top = 0;
        this.left = 0;
        this.direction = "";
        this.level = 1;
        this.health = config_1.Config.creatureHealth * this.level;
        this.speed = config_1.Config.creatureMoveSpeed;
        this.attackSpeed = config_1.Config.creatureAttackSpeed;
        this.family = 'bug_report'; // Should match material design icon codes		
    }
    ;
    clickHandler() {
        if (this.health <= 0) {
            this.destroy();
        }
        this.health -= config_1.Config.creatureClickDamage;
        this.percentHealth = utils_1.Utils.normalize(this.health, 10, config_1.Config.creatureHealth);
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
    die() {
        this.active = false;
        this.stop();
        this.stopAttack();
    }
    move() {
        if (!this.target) {
            this.findTarget();
        }
        if (this.target.getAttribute("destroyed") === "true") {
            this.target = null;
            this.findTarget();
        }
        if (!this.target) {
            return;
        } // no more targets
        this.targetLocation = this.getTargetLocation();
        if (this.onTarget()) {
            this.stop();
            this.startAttack();
            return;
        }
        // move towards the target
        // TODO: add animation and increase the step
        if (this.left < this.targetLocation.x) {
            this.left++;
        }
        else if (this.left != this.targetLocation.x) {
            this.left--;
        }
        if (this.top < this.targetLocation.y) {
            this.top++;
        }
        else if (this.top != this.targetLocation.y) {
            this.top--;
        }
        // TODO: based on the target and the creatue coordinates create a property of direction for sprites orientation		
    }
    ;
    getTargetLocation() {
        let obj = {
            x: 0,
            y: 0
        };
        // Note: width of the creature is negligible and hence not considered in calculations
        if (this.target.offsetLeft < this.left) {
            if (this.target.offsetTop < this.top) {
                // This means the target resides in NW quadrant. so move to the SE corner (which is nearest) of the element
                obj.x = this.target.offsetLeft + this.target.offsetWidth;
                obj.y = this.target.offsetTop + this.target.offsetHeight;
                this.direction = "nw";
                return obj;
            }
            else {
                // This means the target resides in SW quadrant. so move to the NE corner (which is nearest) of the element
                obj.x = this.target.offsetLeft + this.target.offsetWidth;
                obj.y = this.target.offsetTop;
                this.direction = "sw";
                return obj;
            }
        }
        else {
            if (this.target.offsetTop < this.top) {
                // This means the target resides in NE quadrant. so move to the SW corner (which is nearest) of the element
                obj.x = this.target.offsetLeft;
                obj.y = this.target.offsetTop + this.target.offsetHeight;
                this.direction = "ne";
                return obj;
            }
            else {
                // This means the target resides in SE quadrant. so move to the NW corner (which is nearest) of the element
                obj.x = this.target.offsetLeft;
                obj.y = this.target.offsetTop;
                this.direction = "se";
                return obj;
            }
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
        }, this.attackSpeed);
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
        let targetHealth = parseInt(this.target.getAttribute('health')) || config_1.Config.elementHealth;
        targetHealth -= damage;
        //this.target.style.opacity = String(100 - targetHealth);
        if (targetHealth <= 0) {
            this.killTarget();
            this.stopAttack();
            return;
        }
        this.target.setAttribute('health', String(targetHealth));
        this.target.setAttribute('percentHealth', String(utils_1.Utils.normalize(targetHealth, 10, config_1.Config.elementHealth)));
        utils_1.Utils.showEmotion(this.target, '-' + String(damage));
        // TODO: Animate attack		
    }
    killTarget() {
        if (!this.target) {
            return;
        }
        // After each sucessful attack, creep should grow in size
        this.level++;
        if (this.level > 5) {
            this.level = 5;
        }
        // this.target.parentNode.removeChild(this.target);
        this.target.style.visibility = "hidden";
        this.target.setAttribute("destroyed", "true");
        this.target = null;
    }
    onTarget() {
        if (!this.target || !this.targetLocation) {
            return false;
        }
        return (this.left == this.targetLocation.x) && (this.top == this.targetLocation.y);
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
    win() {
        this.stop();
        this.active = false;
    }
    findTarget() {
        let targets = document.querySelectorAll('.element:not([destroyed])');
        let i = this.getRandomTarget(0, targets.length - 1);
        this.target = targets[i];
        if (!this.target) {
            // TODO: destroy condition
            // Cleanup the destroyed elements so that new elements can take their place
            let garbageTargets = document.querySelectorAll('.element');
            for (var j = 0; j < garbageTargets.length; j++) {
                garbageTargets[j].parentNode.removeChild(garbageTargets[j]);
            }
            if (this.active) {
                void event_service_1.EventService.state.next('loose');
            }
            this.stop();
        }
    }
    ;
    getRandomTarget(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
exports.Creature = Creature;
//# sourceMappingURL=creature.js.map
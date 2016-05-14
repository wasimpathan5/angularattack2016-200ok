"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Evil portal
const core_1 = require('@angular/core');
const lab_service_1 = require('./lab.service');
const creature_component_1 = require('./creature.component');
const weapon_component_1 = require('./weapon.component');
let PortalComponent = class PortalComponent {
    constructor(lab) {
        this.lab = lab;
        this.creatures = [];
        this.weapons = [];
    }
    open() {
        let newCreature = this.lab.createCreature(this.creatures.length);
        this.creatures.push(newCreature);
        newCreature.loose();
        //alert('open');
    }
    createWeapon() {
        let newWeapon = this.lab.createWeapon(this.weapons.length);
        this.weapons.push(newWeapon);
        //newWeapon.attack();
    }
};
PortalComponent = __decorate([
    core_1.Component({
        selector: 'portal',
        templateUrl: 'app/portal.component.html',
        providers: [lab_service_1.Lab],
        directives: [creature_component_1.CreatureComponent, weapon_component_1.WeaponComponent]
    }), 
    __metadata('design:paramtypes', [lab_service_1.Lab])
], PortalComponent);
exports.PortalComponent = PortalComponent;
//# sourceMappingURL=portal.component.js.map
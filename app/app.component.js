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
const core_1 = require('@angular/core');
const portal_component_1 = require('./portal.component');
const weapon_component_1 = require('./weapon.component');
const weapon_1 = require('./weapon');
let AppComponent = class AppComponent {
    constructor() {
        this.test = [1, 2, 3];
        this.weapons = [new weapon_1.Weapon(1, 'Build'), new weapon_1.Weapon(2, 'Freeze')];
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css'],
        directives: [portal_component_1.PortalComponent, weapon_component_1.WeaponComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
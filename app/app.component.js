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
const demo_component_1 = require('./demo.component');
const weapon_component_1 = require('./weapon.component');
const weapon_1 = require('./weapon');
const event_service_1 = require('./event.service');
let AppComponent = class AppComponent {
    constructor() {
        this.weapons = [new weapon_1.Weapon(1, 'Build')];
    }
    ngOnInit() {
        // Build 3 random elements
        for (let i = 0; i < 3; i++) {
            this.weapons[0].action();
        }
        // Example how to use service		
        event_service_1.EventService.state.subscribe(function (state) {
            // Do logic here based on the changed game state
            if (state == 'start') {
            }
        });
        // Yeld to other components before publishing new state
        let self = this;
        setTimeout(function () {
            event_service_1.EventService.state.next('demo');
        });
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css'],
        directives: [portal_component_1.PortalComponent, weapon_component_1.WeaponComponent, demo_component_1.DemoComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
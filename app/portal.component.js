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
const config_1 = require('./config');
const event_service_1 = require('./event.service');
const utils_1 = require('./utils');
let PortalComponent = class PortalComponent {
    constructor(lab) {
        this.lab = lab;
        this.creatures = [];
    }
    ngOnInit() {
        this.health = config_1.Config.portalHealth;
        let self = this;
        event_service_1.EventService.state.subscribe(function (state) {
            // Do logic here based on the changed game state
            self.gameState = state;
            if (state == 'start') {
                self.start();
            }
            else if (state == 'loose') {
                self.stop();
                self.win();
            }
        });
    }
    start() {
        let self = this;
        this.createInterval = setInterval(function () {
            self.open();
        }, config_1.Config.creatureCreationDelay);
    }
    hit() {
        this.health = this.health - config_1.Config.portalClickDamage;
        this.percentHealth = utils_1.Utils.normalize(this.health, 10, config_1.Config.portalHealth);
        console.log('hit', this.health, this.percentHealth);
        utils_1.Utils.showEmotion('.portal-button-container', '-' + config_1.Config.portalClickDamage);
        if (this.health <= 0) {
            this.die();
        }
    }
    die() {
        this.stop();
        void event_service_1.EventService.state.next('win');
        for (let i in this.creatures) {
            this.creatures[i].die();
            delete this.creatures[i];
        }
    }
    stop() {
        if (this.createInterval) {
            clearInterval(this.createInterval);
            this.createInterval = null;
        }
    }
    win() {
        // evils wins
        for (let i in this.creatures) {
            this.creatures[i].win();
        }
    }
    open() {
        let targets = document.querySelectorAll('.element:not([destroyed])');
        if (targets.length > 0) {
            let newCreature = this.lab.createCreature(this.creatures.length);
            this.creatures.push(newCreature);
            newCreature.loose();
        }
        else {
            if (this.gameState != 'loose') {
                void event_service_1.EventService.state.next('loose');
            }
        }
    }
};
PortalComponent = __decorate([
    core_1.Component({
        selector: 'portal',
        templateUrl: 'app/portal.component.html',
        styleUrls: ['app/portal.component.css'],
        providers: [lab_service_1.Lab],
        directives: [creature_component_1.CreatureComponent]
    }), 
    __metadata('design:paramtypes', [lab_service_1.Lab])
], PortalComponent);
exports.PortalComponent = PortalComponent;
//# sourceMappingURL=portal.component.js.map
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
const modal_component_1 = require('./modal.component');
const modal_1 = require('./modal');
const event_service_1 = require('./event.service');
let DemoComponent = class DemoComponent {
    constructor() {
        this.currentStep = 0;
    }
    ngOnInit() {
        let self = this;
        self.steps = [
            new modal_1.Modal('Welcome', 'Welcome to the Angulator, where you must save the internet from being destroyed by bugs!', 'Next >>', 'End Demo', self, '#step1', self.next, self.end),
            new modal_1.Modal('Step 1', 'Click the build button to build a new component on the webpage!', 'Next >>', 'End Demo', self, '#step2', self.next, self.end, '#weapon-1'),
            new modal_1.Modal('Step 2', 'Watch out for the creatures the come out of the portal to attack our elements!!', 'Next >>', 'End Demo', self, '#step3', self.next, self.end, '.portal-button-container'),
            new modal_1.Modal('Step 3', 'Click the bugs to kill them and click their base to destroy it too!!!1!', 'Next >>', 'End Demo', self, '#step4', self.next, self.end),
        ];
        event_service_1.EventService.state.subscribe(function (state) {
            if (state == 'demo') {
                self.start();
            }
            else if (state == 'loose') {
                alert('Web is destroyed. Refresh to try again');
            }
            else if (state == 'win') {
                alert('Web is saved. Refresh to try again');
            }
        });
    }
    start() {
        this.steps[this.currentStep].open();
    }
    next(self) {
        self.steps[self.currentStep].close();
        self.currentStep++;
        if (self.currentStep < self.steps.length) {
            self.steps[self.currentStep].open();
        }
        else {
            self.end(self);
        }
    }
    prev(self) {
        self.steps[self.currentStep].close();
        self.currentStep--;
        self.steps[self.currentStep].open();
    }
    end(self) {
        if (self.currentStep < self.steps.length) {
            self.steps[self.currentStep].close();
        }
        self.currentStep = 0;
        event_service_1.EventService.state.next('start');
    }
};
DemoComponent = __decorate([
    core_1.Component({
        selector: 'demo',
        directives: [modal_component_1.ModalComponent],
        templateUrl: 'app/demo.component.html'
    }), 
    __metadata('design:paramtypes', [])
], DemoComponent);
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map
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
let DemoComponent = class DemoComponent {
    constructor() {
        this.currentStep = 0;
    }
    ngOnInit() {
        this.steps = [
            new modal_1.Modal('Welcome', 'Welcome to Angulator', 'Next >>', 'End Demo', this, '#step1', this.next, this.end),
            new modal_1.Modal('Step 2', 'Second step in the demo', 'Next >>', 'End Demo', this, '#step2', this.next, this.end),
            new modal_1.Modal('Step 3', 'Third step in the demo', 'Next >>', 'End Demo', this, '#step3', this.next, this.end, 'portal'),
            new modal_1.Modal('Step 4', 'Fourth step in the demo', 'Next >>', 'End Demo', this, '#step4', this.next, this.end),
        ];
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
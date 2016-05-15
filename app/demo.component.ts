import { Component } from '@angular/core';
import {ModalComponent} from './modal.component';
import {Modal} from './modal';

@Component({
	selector: 'demo',
	directives: [ModalComponent],
	templateUrl: 'app/demo.component.html'
})

export class DemoComponent {
	steps: Modal[];
	currentStep: number = 0;
	
	ngOnInit() {
		this.steps = [
			new Modal('Welcome', 'Welcome to the Angulator, where you must save the internet from being destroyed by bugs!', 'Next >>', 'End Demo', this, '#step1', this.next, this.end),
			new Modal('Step 1', 'Click the build button to build a new component on the webpage!', 'Next >>', 'End Demo', this, '#step2', this.next, this.end, '#weapon-1'),
			new Modal('Step 2', 'Watch out for the creatures the come out of the portal to attack our elements!!', 'Next >>', 'End Demo', this, '#step3', this.next, this.end, '.portal-button-container'),
			new Modal('Step 3', 'Click the bugs to kill them and click their base to destroy it too!!!1!', 'Next >>', 'End Demo', this, '#step4', this.next, this.end),
		];
	}
	
	start() {
		this.steps[this.currentStep].open();
	}
	
	next(self: DemoComponent) {
		self.steps[self.currentStep].close();
		self.currentStep++;
		
		if (self.currentStep < self.steps.length) {
			self.steps[self.currentStep].open();			
		} else {
			self.end(self);
		}
	}
	
	prev(self: DemoComponent) {
		self.steps[self.currentStep].close();
		self.currentStep--;
		self.steps[self.currentStep].open();
	}
	
	end(self: DemoComponent) {
		if (self.currentStep < self.steps.length) {
			self.steps[self.currentStep].close();
		}
		self.currentStep = 0;
	}
}
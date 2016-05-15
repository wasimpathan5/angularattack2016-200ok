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
			new Modal('Welcome', 'Welcome to Angulator', 'Next >>', 'End Demo', this, '#step1', this.next, this.end),
			new Modal('Step 2', 'Second step in the demo', 'Next >>', 'End Demo', this, '#step2', this.next, this.end),
			new Modal('Step 3', 'Third step in the demo', 'Next >>', 'End Demo', this, '#step3', this.next, this.end, 'portal'),
			new Modal('Step 4', 'Fourth step in the demo', 'Next >>', 'End Demo', this, '#step4', this.next, this.end),
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
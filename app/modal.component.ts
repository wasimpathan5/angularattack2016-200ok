import { Component, Input } from '@angular/core';
import { Modal } from './modal';

@Component({
	selector: 'modal',
	templateUrl: 'app/modal.component.html'
})

export class ModalComponent {
	@Input()
	modal: Modal
	
	ngOnInit() {
		let parentEl = document.querySelector(this.modal.targetElement);
		if (this.modal.targetElement == 'body') {
			// position in center
		} else {
			// position based on target
		}
	}
}
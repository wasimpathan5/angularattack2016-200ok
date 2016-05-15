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
		this.modal.positionModal();
	}
}
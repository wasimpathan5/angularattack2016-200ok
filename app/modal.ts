export class Modal {
	title: string;
	message: string;
	confirmText: string;
	cancelText: string;
	
	constructor(title: string, message: string, confirmText: string, cancelText: string) {
		this.title = title;
		this.message = message;
		this.confirmText = confirmText;
		this.cancelText = cancelText;
	};
	
	open() {
		let modal = document.querySelector('dialog');
		modal.setAttribute('open', '');
	}
	
	close() {
		let modal = document.querySelector('dialog');
		modal.removeAttribute('open');		
	}
}

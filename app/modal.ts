export class Modal {
	title: string;
	message: string;
	confirmText: string;
	cancelText: string;
	targetElement: string;
	modalContext: any;
	confirmFunc: (context: any) => void;
	cancelFunc: (context: any) => void;
	
	constructor(title: string,
				message: string,
				confirmText: string,
				cancelText: string,
				context: any,
				confirmAction?: (context: any) => void,
				cancelAction?: (context: any) => void,
				targetElement?: string) {
		this.title = title;
		this.message = message;
		this.confirmText = confirmText;
		this.cancelText = cancelText;
		this.modalContext = context;
		this.confirmFunc = confirmAction;
		this.cancelFunc = cancelAction;
		this.targetElement = !targetElement ? 'body' : targetElement;
	};
	
	open() {
		let modal = document.querySelector('dialog');
		modal.setAttribute('open', '');
	}
	
	close() {
		let modal = document.querySelector('dialog');
		modal.removeAttribute('open');		
	}
	
	confirmAction() {
		if(this.confirmFunc) {
			this.confirmFunc(this.modalContext);
		} else {
			this.close();			
		}
	}
	
	cancelAction() {
		if(this.cancelFunc) {
			this.cancelFunc(this.modalContext);
		} else {
			this.close();			
		}
	}
}

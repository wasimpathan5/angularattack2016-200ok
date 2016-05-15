export class Modal {
	title: string;
	message: string;
	confirmText: string;
	cancelText: string;
	targetElement: string;
	modalContext: any;
	selector: string;
	confirmFunc: (context: any) => void;
	cancelFunc: (context: any) => void;
	
	constructor(title: string,
				message: string,
				confirmText: string,
				cancelText: string,
				context: any,
				selector: string,
				confirmAction?: (context: any) => void,
				cancelAction?: (context: any) => void,
				targetElement?: string) {
		this.title = title;
		this.message = message;
		this.confirmText = confirmText;
		this.cancelText = cancelText;
		this.modalContext = context;
		this.selector = selector;
		this.confirmFunc = confirmAction;
		this.cancelFunc = cancelAction;
		this.targetElement = !targetElement ? 'body' : targetElement;
	};
	
	positionModal() {
		var t = <HTMLElement>document.querySelector(this.targetElement);
		let dialog = <HTMLElement>document.querySelector(this.selector).querySelector('dialog');
		dialog.style.zIndex = '600';
		dialog.style.position = 'absolute';
		if (this.targetElement != 'body') {
			dialog.style.top = (t.offsetHeight / 2).toString();
			dialog.style.left = (t.offsetLeft + t.offsetWidth / 2 - dialog.clientWidth / 2).toString();
			dialog.style.margin = '0px';
		} else {
			dialog.style.top = (t.offsetHeight / 3).toString();		
		}
	}
	
	open() {
		let dialog = document.querySelector(this.selector).querySelector('dialog');
		dialog.setAttribute('open', '');
	}
	
	close() {
		let dialog = document.querySelector(this.selector).querySelector('dialog');
		dialog.removeAttribute('open');		
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

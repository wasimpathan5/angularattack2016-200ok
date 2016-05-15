"use strict";
class Modal {
    constructor(title, message, confirmText, cancelText, context, confirmAction, cancelAction, targetElement) {
        this.title = title;
        this.message = message;
        this.confirmText = confirmText;
        this.cancelText = cancelText;
        this.modalContext = context;
        this.confirmFunc = confirmAction;
        this.cancelFunc = cancelAction;
        this.targetElement = !targetElement ? 'body' : targetElement;
    }
    ;
    open() {
        let modal = document.querySelector('dialog');
        modal.setAttribute('open', '');
    }
    close() {
        let modal = document.querySelector('dialog');
        modal.removeAttribute('open');
    }
    confirmAction() {
        if (this.confirmFunc) {
            this.confirmFunc(this.modalContext);
        }
        else {
            this.close();
        }
    }
    cancelAction() {
        if (this.cancelFunc) {
            this.cancelFunc(this.modalContext);
        }
        else {
            this.close();
        }
    }
}
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map
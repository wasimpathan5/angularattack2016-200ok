"use strict";
class Modal {
    constructor(title, message, confirmText, cancelText, context, selector, confirmAction, cancelAction, targetElement) {
        this.title = title;
        this.message = message;
        this.confirmText = confirmText;
        this.cancelText = cancelText;
        this.modalContext = context;
        this.selector = selector;
        this.confirmFunc = confirmAction;
        this.cancelFunc = cancelAction;
        this.targetElement = !targetElement ? 'body' : targetElement;
        this.positionModal();
    }
    ;
    positionModal() {
        var t = document.querySelector(this.targetElement);
        let dialog = document.querySelector(this.selector).querySelector('dialog');
        dialog.style.zIndex = '501';
        dialog.style.position = 'absolute';
        dialog.style.top = (t.offsetHeight / 2).toString();
        if (this.targetElement != 'body') {
            dialog.style.left = (t.offsetWidth / 2).toString();
            dialog.style.margin = '0px';
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
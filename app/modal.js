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
    }
    ;
    positionModal() {
        var t = document.querySelector(this.targetElement);
        let dialog = document.querySelector(this.selector).querySelector('dialog');
        dialog.style.zIndex = '600';
        dialog.style.position = 'absolute';
        if (this.targetElement != 'body') {
            dialog.style.top = (t.offsetHeight / 2).toString();
            dialog.style.left = (t.offsetLeft + t.offsetWidth / 2 - dialog.clientWidth / 2).toString();
            dialog.style.margin = '0px';
        }
        else {
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
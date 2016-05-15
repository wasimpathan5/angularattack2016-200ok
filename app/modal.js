"use strict";
class Modal {
    constructor(title, message, confirmText, cancelText) {
        this.title = title;
        this.message = message;
        this.confirmText = confirmText;
        this.cancelText = cancelText;
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
}
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map
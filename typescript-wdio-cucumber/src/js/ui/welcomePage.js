"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WelcomePage {
    get statusMessage() { return browser.element('.flash.success'); }
    getStatusMessage() {
        return this.statusMessage.getText();
    }
}
exports.WelcomePage = WelcomePage;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginPage {
    get usernameField() { return browser.element('#username'); }
    get passwordField() { return browser.element('#password'); }
    get loginButton() { return browser.element('button[type=submit]'); }
    open(pageUrl) {
        browser.url(pageUrl);
    }
    typeUsername(username) {
        this.usernameField.setValue(username);
    }
    typePassword(password) {
        this.passwordField.setValue(password);
    }
    clickLoginButton() {
        this.loginButton.click();
    }
}
exports.LoginPage = LoginPage;

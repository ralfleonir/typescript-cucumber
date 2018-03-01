export class LoginPage {
    public get usernameField() {  return browser.element('#username') }
    public get passwordField() {  return browser.element('#password') }
    public get loginButton()   {  return browser.element('button[type=submit]') }

    open(pageUrl: string): void {
        browser.url(pageUrl);
    }

    typeUsername(username: string): void {
        this.usernameField.setValue(username);
    }

    typePassword(password: string): void {
        this.passwordField.setValue(password);
    }

    clickLoginButton(): void {
        this.loginButton.click();
    }
}
export class WelcomePage {
    public get statusMessage() { return browser.element('.flash.success'); }

    getStatusMessage(): string {
        return this.statusMessage.getText();
    }
}
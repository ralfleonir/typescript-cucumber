"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
class StepContext {
    constructor() {
        this.screenshotsFolderPath = './reports/attachments';
    }
    takeScreenshot(filename) {
        browser.saveScreenshot(this.screenshotsFolderPath + '/' + filename);
    }
}
cucumber_1.setWorldConstructor(StepContext);

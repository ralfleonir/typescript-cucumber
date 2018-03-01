"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const chai_1 = require("chai");
const loginPage_1 = require("../ui/loginPage");
const welcomePage_1 = require("../ui/welcomePage");
require("../support/stepContext");
const loginPage = new loginPage_1.LoginPage();
const welcomePage = new welcomePage_1.WelcomePage();
cucumber_1.Given('I access the page \'{pageUrl}\'', function (pageUrl) {
    loginPage.open(pageUrl);
});
cucumber_1.When('I provide the username \'{username}\'', function (username) {
    loginPage.typeUsername(username);
});
cucumber_1.When('I provide the password \'{password}\'', function (password) {
    loginPage.typePassword(password);
});
cucumber_1.When('I click on the login button', function () {
    loginPage.clickLoginButton();
});
cucumber_1.Then('I should see the message \'{message}\'', function (message) {
    chai_1.expect(welcomePage.getStatusMessage()).to.contain(message);
});

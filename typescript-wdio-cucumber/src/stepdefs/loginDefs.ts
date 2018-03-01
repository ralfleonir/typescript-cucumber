import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import { LoginPage } from '../ui/loginPage';
import { WelcomePage } from '../ui/welcomePage';
import { userInfo } from 'os';
import '../support/stepContext';

const loginPage = new LoginPage();
const welcomePage = new WelcomePage();

Given('I access the page \'{pageUrl}\'', function(pageUrl) {
    loginPage.open(pageUrl);
});

When('I provide the username \'{username}\'', function(username) {
    loginPage.typeUsername(username);
});

When('I provide the password \'{password}\'', function(password) {
    loginPage.typePassword(password);
});

When('I click on the login button', function() {
    loginPage.clickLoginButton();
});

Then('I should see the message \'{message}\'', function(message) {
    expect(welcomePage.getStatusMessage()).to.contain(message);
});
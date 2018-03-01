Feature: Log into the application
    In order to customize my experience
    As a user
    I want to be able to log into the application

    Scenario: Successfully log into the application
        Given I access the page 'http://the-internet.herokuapp.com/login'
        When  I provide the username 'tomsmith'
        And   I provide the password 'SuperSecretPassword!'
        And   I click on the login button
        Then  I should see the message 'You logged into a secure area!'
    
    

    
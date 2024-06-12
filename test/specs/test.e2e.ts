// import { expect } from '@wdio/globals'
// import SecurePage from '../pageobjects/secure.page'
import LoginPage from '../pageobjects/login.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
        // await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})


// TC1
// Check Empty Fields:

// Click the login button with both the username and password fields left empty and verify that appropriate error messages are displayed.

// TC2
// Single Empty Field:

// Enter a username but leave the password field empty and attempt to log in.
// Enter a password but leave the username field empty and attempt to log in.

// TC3
// Invalid Characters:

// Enter special characters (e.g., !@#$%^&*()) in the username and password fields and check for error messages or field validation errors.
// Input a very long string of characters to see if the UI can handle overflow or excessive input length gracefully.

// TC4
// Incorrect Formats:

// Enter a username in an invalid format (e.g., including spaces) and attempt to log in.
// Enter a password in an invalid format (e.g., too short or too long) and attempt to log in.

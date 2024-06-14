import LoginPage from '../pageobjects/login.page';
import Helper from '../pageobjects/CommonHelpers/Helper.ts';
import { FormText } from '../Utilities/UserData/FormText.json';


describe('Orange HRM Application Login Test', () => {
    // afterEach(async function () {
    //     var testanme = this.currentTest?.title?.split("-")[0];
    //     console.log("Testname" + testanme);
    //     await Helper.captureScreenshot(testanme)
    // });

    it('TC1 - Check User able to login to application without passing the username and password', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        await expect(await Helper.verifyPageTitle(FormText.OrangeHRM.toLocaleLowerCase())).toEqual(false);
    })

    it('TC2 - Check User able to login to application without passing the username and password', async () => {
        await LoginPage.open();
        await LoginPage.login(FormText.userName, '');
        await expect(await Helper.verifyPageTitle(FormText.OrangeHRM.toLocaleLowerCase())).toEqual(true);
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

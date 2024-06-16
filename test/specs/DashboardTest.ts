import LoginPage from '../pageobjects/login.page';
import Helper from '../pageobjects/CommonHelpers/Helper.ts';
import { FormText } from '../Utilities/UserData/FormText.json';
import DashboardPageCommands from '../pageobjects/Commands/DashboardPageCommands.ts';
import {siteUrl} from '../Utilities/URL/urls.json'



describe('Orange HRM Application Dashboard Test', () => {

    afterEach(async function () { // Capture Screenshot on Test Failure 
        if(this.currentTest?.state === "failed"){
            var testanme = `Dashboard Test - ${this.currentTest?.title?.split("-")[0]}`;
            console.log("Testname" + testanme);
            await Helper.captureScreenshot(testanme)
        }
    });

    beforeEach(async function () { 
        await LoginPage.open();
    });

    it('TC1 - Check User not able to login to application with preceeding and succeeding spaces in Username', async () => {
        await LoginPage.login(` ${FormText.userName} `, FormText.password);
        await expect(await Helper.verifyPageUrl(`${siteUrl.base}${siteUrl.dashboard}`)).toEqual(false);
        await expect(await Helper.verifyPageTitle(FormText.OrangeHRM.toLocaleLowerCase())).toEqual(true);
    })

    it('TC2 - Verify user lands on Dashboard page after successfull login', async () => {
        await LoginPage.login(FormText.userName, FormText.password);
        await expect(await DashboardPageCommands.UserInfoDropdownButtonIsDisplayed()).toEqual(true);
        await expect(await Helper.verifyPageUrl(`${siteUrl.base}${siteUrl.dashboard}`)).toEqual(true);
        await expect(await Helper.verifyPageTitle(FormText.OrangeHRM.toLocaleLowerCase())).toEqual(true);
        await DashboardPageCommands.Logout();
    })

    
})
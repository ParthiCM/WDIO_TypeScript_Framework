import LoginPage from '../pageobjects/login.page';
import Helper from '../pageobjects/CommonHelpers/Helper.ts';
import { FormText } from '../Utilities/UserData/FormText.json';


describe('Orange HRM Application Login Test', () => {

    it('TC1 - Check User able to login to application without passing the username and password', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        await expect(await Helper.verifyPageTitle(FormText.OrangeHRM.toLocaleLowerCase())).toEqual(true);
    })

    it('TC2 - Check User able to login to application without passing the username and password', async () => {
        await LoginPage.open();
        await LoginPage.login(FormText.userName, '');
        await expect(await Helper.verifyPageTitle(FormText.OrangeHRM.toLocaleLowerCase())).toEqual(true);
    })
})
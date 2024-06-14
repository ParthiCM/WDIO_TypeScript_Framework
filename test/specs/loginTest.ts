// import LoginPage from '../pageobjects/login.page';
// import Helper from '../pageobjects/CommonHelpers/Helper.ts';
// import { FormText } from '../Utilities/UserData/FormText.json';


// describe('Orange HRM Application Login Test', () => {

//     afterEach(async function () {
//         var testanme  = this.currentTest?.title?.split("-")[0];
//         console.log("Testname" + testanme);
//         await Helper.captureScreenshot(testanme)
//       });

//     it('TC1 - Check User able to login to application without passing the username and password', async () => {
//         await LoginPage.open();
//         //await LoginPage.Maximize();
//         await LoginPage.login('', '');
//         await expect(await Helper.verifyPageTitle(FormText.OrangeHRM.toLocaleLowerCase())).toEqual(false);
//     })

//     it('TC2 - Check User able to login to application without passing the username and password', async () => {
//         await LoginPage.open();
//         await LoginPage.login(FormText.userName, '');
//         await expect(await Helper.verifyPageTitle(FormText.OrangeHRM.toLocaleLowerCase())).toEqual(true);
//     })
// })
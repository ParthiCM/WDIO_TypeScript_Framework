import Page from './page';
import loginPageCommand from './Commands/LoginPageCommands';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    // public get inputUsername () {
    //     return $('#username');
    // }

    // public get inputPassword () {
    //     return $('#password');
    // }

    // public get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        
        await loginPageCommand.SetUserName(username);
        await loginPageCommand.SetPassword(password);
        await loginPageCommand.ClickSubmitButton();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();

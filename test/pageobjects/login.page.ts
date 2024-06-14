import Page from './page';
import loginPageCommand from './Commands/LoginPageCommands';
import {siteUrl} from '../Utilities/URL/urls.json'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    
    public open () {
        return super.open(siteUrl.base);
    }

    public async Maximize () {
       await browser.maximizeWindow();
    }

    public async login (username: string, password: string) {
        this.setUserName(username);
        this.setPassword(password);
        this.clickLoginButton();
    }

    public async setUserName(username:string ){
        await loginPageCommand.SetUserName(username);
    }

    public async setPassword(password:string ){
        await loginPageCommand.SetPassword(password);
    }

    public async clickLoginButton(){
        await loginPageCommand.ClickLoginButton();
    }

    public async verifyPageTitle(){
        
    }
}

export default new LoginPage();

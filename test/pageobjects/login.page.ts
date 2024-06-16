import Page from './page';
import loginPageCommand from './Commands/LoginPageCommands';
import {siteUrl} from '../Utilities/URL/urls.json'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    
    
    public async open () {
        return await super.open(siteUrl.base);
    }


    public async login (username: string, password: string) {
        await this.setUserName(username);
        await this.setPassword(password);
        await this.clickLoginButton();
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

}

export default new LoginPage();

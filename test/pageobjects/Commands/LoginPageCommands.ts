import loginElementFactory from '../ElementFactory/LoginPageElement';

class loginPageCommand {

    public async SetUserName(value: string) {
        await loginElementFactory.inputUsername().SetValue(value);
    }
    public async SetPassword(value: string) {
        await loginElementFactory.inputPassword().SetValue(value);
    }
    public async ClickLoginButton() {
        await loginElementFactory.btnSubmit().Click();
    }
}

export default new loginPageCommand();
import loginElementFactory from '../ElementFactory/LoginPageElement';

class loginPageCommand {

    public async SetUserName(value: string) {
        await loginElementFactory.inputUsername().setValue(value);
    }
    public async SetPassword(value: string) {
        await loginElementFactory.inputPassword().setValue(value);
    }
    public async ClickSubmitButton() {
        await loginElementFactory.btnSubmit().click();
    }
}

export default new loginPageCommand();
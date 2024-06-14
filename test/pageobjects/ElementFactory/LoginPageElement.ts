import { $ } from '@wdio/globals'
import {css} from '../Selectors/CssSelector.json'

class loginElementFactory   {

     public inputUsername () {
        return $(css.usernameInputBox);
    }

    public inputPassword () {
        return $(css.passwordInputBox);
    }

    public btnSubmit () {
        return $(css.submitButton);
    }
}

export default new loginElementFactory();



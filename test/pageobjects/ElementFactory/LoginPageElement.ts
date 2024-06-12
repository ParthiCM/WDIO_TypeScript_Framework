import { $ } from '@wdio/globals'
import {id} from '../Selectors/CssSelector.json'
import {css} from '../Selectors/CssSelector.json'

class loginElementFactory   {

     public inputUsername () {
        return $(id.username);
    }

    public inputPassword () {
        return $(id.password);
    }

    public btnSubmit () {
        return $(css.submitButton);
    }
}

export default new loginElementFactory();



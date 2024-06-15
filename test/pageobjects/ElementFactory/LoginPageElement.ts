import { $ } from '@wdio/globals'
import {css} from '../Selectors/CssSelector.json'
//mport { Button } from '../../Controls/ControlTypes';
import { ControlsExtension } from "../../Controls/ControlsExtension";
import { Button } from '../../Controls/Types/Button';
import { Textbox } from '../../Controls/Types/Textbox';

export class loginElementFactory {

    //  public inputUsername ()  {
    //     var val = $(css.usernameInputBox);
    //     console.log("value val = "+val);
    //     return $(css.usernameInputBox);
    // }
    public  inputUsername(): Textbox {
        return ControlsExtension.asSetValue($(css.usernameInputBox));
    }
    public inputPassword (): Textbox {
        return ControlsExtension.asSetValue($(css.passwordInputBox));
    }
    public btnSubmit(): Button {
        return ControlsExtension.asButton($(css.submitButton));
    }
}

export default new loginElementFactory();



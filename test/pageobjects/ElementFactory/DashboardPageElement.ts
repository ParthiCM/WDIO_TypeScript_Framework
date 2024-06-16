import { $ } from '@wdio/globals'
import {className , css} from '../Selectors/CssSelector.json'
import { ControlsExtension } from "../../Controls/ControlsExtension";
import { Button } from '../../Controls/Types/Button';

export class loginElementFactory {

    public  userInfoDropdown(): Button {
        return ControlsExtension.asButton($(className.userDropdown));
    }
    
    public  Logout(): Button {
        return ControlsExtension.asButton($(css.logout));
    }
    
}

export default new loginElementFactory();



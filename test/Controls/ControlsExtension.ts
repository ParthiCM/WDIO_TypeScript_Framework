import { Button } from "./Types/Button";
import { Textbox } from "./Types/Textbox";
import { ChainablePromiseElement } from 'webdriverio';
export class ControlsExtension {

    public static asButton(element: ChainablePromiseElement<WebdriverIO.Element>): Button {
        return new Button(element);
    }
    
    public static asSetValue(element: ChainablePromiseElement<WebdriverIO.Element>): Textbox {
        return new Textbox(element);
    }
}
export default new ControlsExtension();
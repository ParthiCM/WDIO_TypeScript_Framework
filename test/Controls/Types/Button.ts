import { Controls } from "../Controls";
import { ChainablePromiseElement } from 'webdriverio';
export class Button extends Controls {

    constructor (element: ChainablePromiseElement<WebdriverIO.Element>){
        super(element);
    }

     public async Click(){
        await this.Element.click();
    }
}
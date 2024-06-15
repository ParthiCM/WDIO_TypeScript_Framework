import { Controls } from "../Controls";
import { ChainablePromiseElement } from 'webdriverio';
export class Textbox extends Controls {

    constructor (element: ChainablePromiseElement<WebdriverIO.Element>){
        super(element);
    }

     public async SetValue(valueToSet:string, clearBeforeSetValue:boolean = false){
       if(clearBeforeSetValue){
        (await this.Element).clearValue();
       }
        await this.Element.setValue(valueToSet);
    }
}
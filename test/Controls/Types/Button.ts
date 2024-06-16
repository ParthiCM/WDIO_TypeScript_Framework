import { Controls } from "../Controls";
import { ChainablePromiseElement } from 'webdriverio';
export class Button extends Controls {

    constructor(element: ChainablePromiseElement<WebdriverIO.Element>) {
        super(element);
    }

    public async Click() {
        await this.Element.click();
    }

    public async WaitForElementDisplayed(timeOutToWait: number) {
        await this.Element.waitForDisplayed({ timeout: timeOutToWait });
    }
    
    public async WaitForElementEnabled(timeOutToWait: number) {
        await (await this.Element).waitForEnabled({ timeout: timeOutToWait });
    }

    public async IsDisplayed() {
        try {
            return await this.Element.isDisplayed();
        } catch (error) {
            return false;
        }
    }
}
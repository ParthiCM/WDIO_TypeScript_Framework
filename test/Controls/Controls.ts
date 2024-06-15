import { ChainablePromiseElement } from 'webdriverio';
export  class Controls {

    constructor(element: ChainablePromiseElement<WebdriverIO.Element>) {
        this._element = element;
    }

    private _element!: ChainablePromiseElement<WebdriverIO.Element>;

    get Element(): ChainablePromiseElement<WebdriverIO.Element> {
        return this._element;
    }
    
    // set element(value: WebdriverIO.Element) {
    //     this._element = value;
    // }

}

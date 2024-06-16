import { browser } from '@wdio/globals'


/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async open(path: string) {

        var url = await browser.url(`${path}/web/auth/login`);
        await this.Maximize();
        await browser.setTimeout({ 'implicit': 3000 });
        return url;
    }

    public async Maximize() {
        await browser.maximizeWindow();
    }

}

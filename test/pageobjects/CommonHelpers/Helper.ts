import Page from '../page';
import * as fs from 'fs';
import * as path from 'path';

class Helper extends Page {


    public async verifyPageTitle(titleToVerify: string) {
        var val = (await browser.getTitle()).toLocaleLowerCase();
        console.log(`page title is - ${val}`);
        return val === titleToVerify;
    }


    /** Save a screenshot of the current browsing context to a PNG file on your OS. 
    Be aware that some browser drivers take screenshots of the whole document 
    (e.g. Geckodriver with Firefox) and others only of the current viewport 
    (e.g. Chromedriver with Chrome). **/

    public async captureScreenshot(screenshotName: string | undefined) {
        var path = await this.createFolderBasedOnCurrentDate();
        var name = `${path}\\${screenshotName}.png`;
        console.log("screenshot "+name);
        await browser.pause(2000);
        await browser.saveScreenshot(name);
    }

    public async createFolderBasedOnCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const folderName = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
        const folderPath = path.join("screenshots", folderName);
        console.log(folderPath);
        fs.mkdir(folderPath, (err) => {
            if (err) {
                return console.error('Error creating folder:', err);
            }
            console.log('Folder created successfully:', folderPath);
        });
        return folderPath;
    }


}

export default new Helper();
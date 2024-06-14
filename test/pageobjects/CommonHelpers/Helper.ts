import Page from '../page';
class Helper extends Page {
    

    public async verifyPageTitle(titleToVerify:string){
        var val = (await browser.getTitle()).toLocaleLowerCase();
        console.log(`page title is - ${val}`);
        return val ===  titleToVerify;
    }

    
}

export default new Helper();
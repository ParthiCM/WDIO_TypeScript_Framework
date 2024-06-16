import DashboardPageElement from '../ElementFactory/DashboardPageElement';

class DashboardPageCommands {

    public async ClickUserInfoDropdownButton() {
        await DashboardPageElement.userInfoDropdown().Click();
    }
    
    public async Logout() {
        await this.ClickUserInfoDropdownButton();
        await DashboardPageElement.Logout().Click();
    }
    
    public async UserInfoDropdownButtonIsDisplayed(timeToWait:number = 10000) {
        await DashboardPageElement.userInfoDropdown().WaitForElementDisplayed(timeToWait);
        return await DashboardPageElement.userInfoDropdown().IsDisplayed();
    }
    
}

export default new DashboardPageCommands();
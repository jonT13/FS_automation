import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage{
    readonly page: Page;
    readonly noticeBoard : Locator;
    readonly header : Locator;
    readonly profileMenu : Locator; 
    readonly logoutButton : Locator;

    // dashboard urls depending on user type 
    readonly basicUserUrl : string;
    readonly superAdminUrl : string;
    readonly doctorUrl : string;
    readonly nurseUrl : string;
    readonly loginUrl : string;


    constructor(page: Page){
        this.page = page;
        this.noticeBoard = page.locator('//div[@class="content-area__content"]//div//div[@class="vs-col vs-xs- vs-sm- vs-lg-"]');
        this.header = page.locator('//div[@class="the-navbar__user-meta flex items-center"]');
        this.profileMenu = page.locator('//div[@class="profile-header-image"]');
        this.logoutButton = page.locator('li').filter({ hasText: 'Logout' });

        this.basicUserUrl = "https://stage.freshclinics.com.au/basic/notice-board";
        this.superAdminUrl = "https://stage.freshclinics.com.au/super-admin/dashboard";
        this.doctorUrl = "https://stage.freshclinics.com.au/doctor/notice-board";
        this.nurseUrl = "https://stage.freshclinics.com.au/nurse/home";
        this.loginUrl = "https://stage.freshclinics.com.au/login";

    }

    async checkNoticeBoard(){
        await expect(this.noticeBoard).toBeVisible();
        await expect(this.noticeBoard).toHaveText("Notice BoardFresh Announcements");
    }

    async checkNameInHeader(name: string){
        await expect(this.header).toContainText(name);
    }

    async checkUrl(userType : string){
        switch (userType){
            case "basicUser":
                await expect(this.page).toHaveURL(this.basicUserUrl);
                break;
            case "superAdmin":
                await expect(this.page).toHaveURL(this.superAdminUrl);
                break;
            case "doctor":
                await expect(this.page).toHaveURL(this.doctorUrl);
                break;
            case "nurse":
                await expect(this.page).toHaveURL(this.nurseUrl);
                break;
            default:
                await expect(this.page).toHaveURL(this.basicUserUrl);
                break;
        }
    }

    async logoutUser(userType: string){
        await expect(this.profileMenu).toBeVisible();

        if(userType == "basicUser"){
            await this.profileMenu.click();
        }
        else{
            await this.profileMenu.hover({ force: true });
        }

        await this.page.waitForTimeout(1000)
        await this.logoutButton.click({force:true});
        await expect(this.page).toHaveURL(this.loginUrl);
    }

}

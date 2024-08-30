import { expect, type Locator, type Page } from '@playwright/test';
export class Sidebar{
    readonly page: Page;
    readonly accounts : Locator;
    readonly treatmentSettings : Locator;
    readonly storeManagement : Locator;
    readonly finances : Locator;
    readonly admin : Locator;
    readonly insights : Locator;
    readonly appSettings : Locator;

    readonly accounts_Organizations : Locator;
    readonly accounts_Doctor : Locator;
    readonly accounts_Nurses : Locator;
    readonly accounts_BasicUsers : Locator;
    readonly accounts_Clinics : Locator;

    constructor(page: Page){
        this.page = page;
        this.accounts = page.locator('//*[@id="app"]/div/div[1]/div/div/div/section/div[4]');
        this.treatmentSettings = page.locator('//*[@id="app"]/div/div[1]/div/div/div/section/div[5]');
        this.storeManagement = page.locator('//*[@id="app"]/div/div[1]/div/div/div/section/div[6]');
        this.finances = page.locator('//*[@id="app"]/div/div[1]/div/div/div/section/div[7]');
        this.admin = page.locator('//*[@id="app"]/div/div[1]/div/div/div/section/div[8]');
        this.insights = page.locator('//*[@id="app"]/div/div[1]/div/div/div/section/div[9]');
        this.appSettings = page.locator('//*[@id="app"]/div/div[1]/div/div/div/section/div[10]');

        this.accounts_Organizations = page.locator('//span[normalize-space()="Organizations"]');
        this.accounts_Doctor = page.locator('//span[normalize-space()="Doctor/NP/PA"]');
        this.accounts_Nurses = page.locator('//span[normalize-space()="Nurses"]');
        this.accounts_BasicUsers = page.locator('//span[normalize-space()="Basic Users"]');
        this.accounts_Clinics = page.locator('//span[normalize-space()="Clinics"]');
    }

    async checkSideBarElements(){
        await expect(this.accounts).toBeVisible();
        await expect(this.treatmentSettings).toBeVisible();
        await expect(this.storeManagement).toBeVisible();
        await expect(this.finances).toBeVisible();
        await expect(this.admin).toBeVisible();
        await expect(this.insights).toBeVisible();
        await expect(this.appSettings).toBeVisible();
    }

    async checkAccountsDropdownElements(){
        await expect(this.accounts_Organizations).toBeVisible();
        await expect(this.accounts_Doctor).toBeVisible();
        await expect(this.accounts_Nurses).toBeVisible();
        await expect(this.accounts_BasicUsers).toBeVisible();
        await expect(this.accounts_Clinics).toBeVisible();
    }

    async navigateToOrganizations(){
        await this.accounts.click();
        await this.accounts_Organizations.click();
    }
}

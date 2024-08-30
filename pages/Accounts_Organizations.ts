import { expect, type Locator, type Page } from '@playwright/test';
export class Organizations{
    readonly page: Page;
    readonly createButton : Locator;
    readonly searchBar : Locator;
    readonly paginationLimit : Locator;
    readonly resultTable : Locator;
    readonly organizationNameLabel : Locator;
    readonly organizationABNLabel : Locator;
    readonly organizationStatusLabel : Locator;
    readonly organizationActionsLabel : Locator;
    readonly pagination : Locator;

    constructor(page: Page){
        this.page = page;
        this.createButton = page.locator('//span[normalize-space()="Create"]');
        this.searchBar = page.locator('//input[@class="input-search vs-table--search-input"]');
        this.paginationLimit = page.locator('//div[@class="flex flex-wrap-reverse flex-grow justify-between"]//div//input[@placeholder="10"]');
        this.resultTable = page.locator('//table[@class="vs-table vs-table--tbody-table"]');
        this.organizationNameLabel = page.locator('//div[normalize-space()="Organisation Name"]');
        this.organizationABNLabel = page.locator('//div[normalize-space()="ABN"]');
        this.organizationStatusLabel = page.locator('//div[normalize-space()="Status"]');
        this.organizationActionsLabel = page.locator('//div[normalize-space()="Actions"]');
        this.pagination = page.locator('//div[@class="pagination-div"]');
    }

    async checkOrganizationsElements(){
        await expect(this.createButton).toBeVisible();
        await expect(this.searchBar).toBeVisible();
        await expect(this.paginationLimit).toBeVisible();
        await expect(this.resultTable).toBeVisible();
        await expect(this.organizationNameLabel).toBeVisible();
        await expect(this.organizationABNLabel).toBeVisible();
        await expect(this.organizationStatusLabel).toBeVisible();
        await expect(this.organizationActionsLabel).toBeVisible();
        await expect(this.pagination).toBeVisible();
    }
}

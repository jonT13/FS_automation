import { expect, type Locator, type Page } from '@playwright/test';
import exp from 'constants';
export const url = "https://stage.freshclinics.com.au/login";

export class StorePage{
    readonly page: Page;
    readonly shopSidebar: Locator;
    readonly productCat: Locator;
    readonly productCat2: Locator;
    readonly productCat3: Locator;
    readonly productCatSelection: Locator;
    readonly brandCat: Locator;
    readonly promotionsCat: Locator;
    readonly alertBanner: Locator;
    readonly storeBanner: Locator;
    readonly popularCat: Locator;
    readonly popularCatSelection: Locator;
    readonly categoryBannerLeft: Locator;
    readonly categoryBannerRight: Locator;
    readonly popularProducts: Locator;
    readonly popularProductsSelection: Locator;
    readonly popularBrands: Locator;
    readonly popularBrandsSelection: Locator;
    readonly productCatDropdown: Locator;
    readonly productCatDropdown2: Locator;
    readonly productCatDropdown3: Locator;
    readonly brandCatDropdown: Locator;
    readonly brandCatDropdown_selection1: Locator;
    readonly brandCatDropdown_selection2: Locator;
    readonly promotionsPage: Locator;

    constructor (page: Page){
        this.page = page;
        
        this.shopSidebar = page.locator("//a[@href='/nurse/shop']");    

        this.productCat = page.locator("//div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']//div[@class='text-lg font-medium menuTitle py-1 px-2 rounded-lg cursor-pointer text-primary2'][normalize-space()='Products']");
        this.productCat2 = page.locator("//div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']//span[@class='hover:underline'][normalize-space()='Consumables']");
        this.productCat3 = page.locator("//span[normalize-space()='Saline']");
        
        this.brandCat = page.locator("//div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']//div[@class='text-lg font-medium menuTitle py-1 px-2 rounded-lg cursor-pointer text-primary2'][normalize-space()='Brands']");
        this.promotionsCat = page.locator("//div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']//div[@class='text-primary2 font-medium menuTitle py-1 px-2 rounded-lg cursor-pointer text-lg'][normalize-space()='Promotions']");
        
        this.productCatDropdown = page.locator("//div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']//div[@class='absolute mt-2 py-2 px-4 z-40 menuItems minWidth']");
        this.productCatDropdown2 = page.locator("//body/div[@id='app']/div[@class='layout--main main-vertical navbar-floating footer-static']/div[@id='content-area']/div[@class='sticky']/div[@class='p-0 md:p-5 bg-white navbar-default']/header[@class='vs-navbar vx-navbar navbar-custom navbar-skelton shop-nav vs-navbar-null vs-navbar-color-#fff p-0 textColor']/div[@class='vs-con-items']/div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']/nav[@class='mx-auto flex flex-wrap relative mt-2']/ul[@class='flex flex-row justify-between items-center']/li/div[@class='w-full']/div[@class='px-4 hidden md:flex items-center']/div[@class='mr-3']/div[@class='relative']/div[@class='absolute mt-2 py-2 px-4 z-40 menuItems minWidth']/div[@class='flex']/div[2]");
        this.productCatDropdown3 = page.locator("//body/div[@id='app']/div[@class='layout--main main-vertical navbar-floating footer-static']/div[@id='content-area']/div[@class='sticky']/div[@class='p-0 md:p-5 bg-white navbar-default']/header[@class='vs-navbar vx-navbar navbar-custom navbar-skelton shop-nav vs-navbar-null vs-navbar-color-#fff p-0 textColor']/div[@class='vs-con-items']/div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']/nav[@class='mx-auto flex flex-wrap relative mt-2']/ul[@class='flex flex-row justify-between items-center']/li/div[@class='w-full']/div[@class='px-4 hidden md:flex items-center']/div[@class='mr-3']/div[@class='relative']/div[@class='absolute mt-2 py-2 px-4 z-40 menuItems minWidth']/div[@class='flex']/div[3]");

        this.productCatSelection = page.locator("//div[normalize-space()='SHOP ALL SALINE']");

        this.brandCatDropdown = page.locator("//div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']//div[@class='absolute mt-2 py-2 px-4 z-40 menuItems menu-container overflow-x-auto']");
        this.brandCatDropdown_selection1 = page.locator("//div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']//div[@class='grid grid-cols-2 lg:grid-cols-6 gap-2']//div[6]");
        this.brandCatDropdown_selection2 = page.locator("//div[@class='nav-wrapper md:w-full hidden md:block border-0 pt-3']//div[@class='text-primary2 hover:underline font-normal category-items pr-5'][normalize-space()='Croma']");

        this.promotionsPage = page.locator("//div[@class='p-2 md:mt-0 mt-0']");

        this.alertBanner = page.locator("//div[@id='alert_banner_mobile']");
        
        this.storeBanner = page.locator("//img[@class='w-full rounded']");
        this.popularCat = page.locator("//div[@class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5 pt-8']");
        this.popularCatSelection = page.locator("//body/div[@id='app']/div[@class='layout--main main-vertical navbar-floating footer-static']/div[@id='content-area']/div[@class='content-wrapper']/div[@class='router-view']/div[@class='router-content shop-alert-margin']/div[@class='content-area__content']/div[@id='shop-page']/div[@class='con-vs-card flex justify-center bg-opacity-100 bg-white w-full min-h-screen']/div[@class='vs-card--content']/div[@class='p-2']/div[@class='sm:pt-0']/div[@class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5 pt-8']/div[1]");
        this.categoryBannerLeft = page.locator("//div[@class='VueCarousel-inner']//div[1]//div[1]//i[1]");
        this.categoryBannerRight = page.locator("//div[@class='VueCarousel-inner']//div[1]//div[1]//i[3]");
        this.popularProducts = page.locator("//div[@class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-1']");
        this.popularProductsSelection = page.locator("//body/div[@id='app']/div[@class='layout--main main-vertical navbar-floating footer-static']/div[@id='content-area']/div[@class='content-wrapper']/div[@class='router-view']/div[@class='router-content shop-alert-margin']/div[@class='content-area__content']/div[@id='shop-page']/div[@class='con-vs-card flex justify-center bg-opacity-100 bg-white w-full min-h-screen']/div[@class='vs-card--content']/div[@class='p-2']/div/div/div[@class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-1']/div[1]/div[1]");
        this.popularBrands = page.locator("//div[@class='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2']");
        this.popularBrandsSelection = page.locator("//div[@class='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2']//div[1]");
    }

    async openShop(){
        await expect(this.shopSidebar).toBeVisible();
        await this.shopSidebar.click();
    }

    async checkElementVisibility(){
        await expect(this.productCat).toBeVisible();
        await expect(this.brandCat).toBeVisible();
        await expect(this.promotionsCat).toBeVisible();
        await expect(this.alertBanner).toBeVisible();
        await expect(this.storeBanner).toBeVisible();
        await expect(this.popularCat).toBeVisible();
        await expect(this.popularCatSelection).toBeVisible();
        await expect(this.categoryBannerLeft).toBeVisible();
        await expect(this.categoryBannerRight).toBeVisible();
        await expect(this.popularProducts).toBeVisible();
        await expect(this.popularProductsSelection).toBeVisible();
        await expect(this.popularBrands).toBeVisible();
        await expect(this.popularBrandsSelection).toBeVisible();
    }

    async checkProductCatDropdown(){
        await this.productCat.click();
        await expect(this.productCatDropdown).toBeVisible();
        await this.productCat2.click();
        await expect(this.productCatDropdown2).toBeVisible();
        await this.productCat3.click();
        await expect(this.productCatDropdown3).toBeVisible();
    }

    async checkProductCatSelection(){
        await this.productCatSelection.click();
    };

    async checkBrandsDropdown(){
        await this.brandCat.click();
        await expect(this.brandCatDropdown).toBeVisible();
    }

    async checkBrandsSelection1(){
        await this.brandCatDropdown_selection1.click();
    }

    async checkBrandsSelection2(){
        await this.brandCatDropdown_selection2.click();
    }

    async checkPromotionsHeader(){
        await this.promotionsCat.click();
    }

    async checkPromotionsPage(){
        await expect(this.promotionsPage).toBeVisible();
    }

    async checkUrl(page, url: string){
        await expect(page).toHaveURL(url);
    }

    async checkAlertBanner(){
        await this.alertBanner.click();
    }

    async checkStore(){
        await this.storeBanner.click();
        await this.popularCatSelection.click();
        await this.categoryBannerLeft.click();
        await this.categoryBannerRight.click();
        await this.popularProductsSelection.click();
        await this.popularBrandsSelection.click();
    }

}
import { test, expect } from '@playwright/test';
import * as testdata from './testdata.ts';
import { url, LoginPage } from '../pages/Login.page.ts';
import { StorePage } from '../pages/Store.page.ts';

const basicUser = testdata.basicUser
const superAdmin = testdata.superAdmin
const doctor = testdata.doctor
const nurse = testdata.nurse

test.beforeEach(async ({ page }) => {
    await page.goto(url)
    const loginPage = new LoginPage(page)
    await loginPage.fillOutLoginForm(nurse.getEmail(), nurse.getPassword());
    await loginPage.clickLoginButton();
});

test('Should be able to access shop', async ({ page }) => {
    const storePage = new StorePage(page);
    await storePage.openShop();
});

test('Should be able to show all elements in shop dashboard', async ({ page }) => {
    const storePage = new StorePage(page);
    await storePage.openShop();
    await storePage.checkElementVisibility();
});

test('Should be able to show 3 level dropdown options in Product header', async ({ page }) => {
    const storePage = new StorePage(page);
    await storePage.openShop();
    await storePage.checkProductCatDropdown();
});

test('Should be able to open a product category in the 3rd level', async ({ page }) => {
    const storePage = new StorePage(page);
    await storePage.openShop();
    await storePage.checkProductCatDropdown();
    await storePage.checkProductCatSelection();
    await storePage.checkUrl(page, "https://stage.freshclinics.com.au/nurse/shop/category/saline?page=1");
});

test('Should be able to show Brands dropdown choices', async ({ page }) => {
    const storePage = new StorePage(page);
    await storePage.openShop();
    await storePage.checkBrandsSelection();
});

test('Should be able to open a few of Brands choices', async ({ page }) => {
    const storePage = new StorePage(page);
    await storePage.openShop();
    //brands from popular brands that are in square containers
    await storePage.checkBrandsDropdown();
    await storePage.checkBrandsSelection1();
    await storePage.checkUrl(page, "https://stage.freshclinics.com.au/nurse/shop/brands/merz?page=1");
    //brands from filler brands - Croma
    await storePage.checkBrandsDropdown();
    await storePage.checkBrandsSelection2();
    await storePage.checkUrl(page, "https://stage.freshclinics.com.au/nurse/shop/brands/hugel?page=1");
});

test('Should be able to show Promotions page', async ({ page }) => {
    const storePage = new StorePage(page);
    await storePage.openShop();
    await storePage.checkPromotionsHeader();
    await storePage.checkUrl(page, "https://stage.freshclinics.com.au/nurse/shop/promotions");
    await storePage.checkPromotionsPage;
});

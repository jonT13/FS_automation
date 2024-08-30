import { expect, type Locator, type Page } from '@playwright/test';
export const url = "https://stage.freshclinics.com.au/forgot-password";
export class ForgotPasswordPage{
    readonly page: Page;
    readonly header : Locator;
    readonly emailField : Locator;
    readonly submitButton : Locator;
    readonly backToLoginButton : Locator;
    readonly errorMessageEmail : Locator;
    readonly alertBox : Locator;

    constructor(page: Page){
        this.page = page;
        this.header = page.locator('//h4[contains(text(),"Reset your password ✉️")]');
        this.emailField = page.locator('//input[@name="email"]');
        this.submitButton = page.locator('button[name="button"]');
        this.backToLoginButton = page.locator('//a[normalize-space()="Back To Login"]');
        this.errorMessageEmail = page.locator('//span[@class="text-danger text-sm"]');
        this.alertBox = page.locator('//div[@class="vs-alert"]');
    }

    async checkAllElementVisilibity(){
        await expect(this.header).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.submitButton).toBeVisible();
        await expect(this.backToLoginButton).toBeVisible();
    }

    async enterEmail(email: string){
        await this.emailField.fill(email)
    }

    async clickSubmitButton(){
        await this.submitButton.click();
    }

    async checkEmailFieldErrorMessage(message: string){
        await expect(this.errorMessageEmail).toBeVisible();
        await expect(this.errorMessageEmail).toHaveText(message);
    }

    async checkAlertBoxMessage(message: string){
        await expect(this.alertBox).toBeVisible();
        await expect(this.alertBox).toHaveText(message);
    }

    async clickBackToLoginButton(){
        await this.backToLoginButton.click();
    }

    async checkUrl(page, url: string){
        await expect(page).toHaveURL(url);
    }
}

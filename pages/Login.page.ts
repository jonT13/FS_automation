import { expect, type Locator, type Page } from '@playwright/test';
export const url = "https://stage.freshclinics.com.au/login";
export class LoginPage{
    readonly page: Page;
    readonly emailField : Locator;
    readonly passwordField : Locator;
    readonly loginButton : Locator;
    readonly rememberMeButton : Locator;
    readonly forgotPasswordButton : Locator;
    readonly joinHereButton : Locator;
    readonly showPasswordButton : Locator;
    readonly hidePasswordButton : Locator;
    readonly errorMessageEmail : Locator;
    readonly errorMessagePassword : Locator;
    readonly alertBox : Locator;

    constructor(page: Page){
        this.page = page;
        this.emailField = page.locator('input[name="email"]');
        this.passwordField = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[name="button"]');
        this.rememberMeButton = page.locator('input[name="rememberMe"]');
        this.forgotPasswordButton = page.getByText('Forgot Password?');
        this.joinHereButton = page.locator('//a[normalize-space()="Join here"]');
        this.showPasswordButton = page.locator('//i[@class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon icon-eye-off null icon-no-border"]');
        this.hidePasswordButton = page.locator('//i[@class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon icon-eye null icon-no-border"]');
        this.errorMessageEmail = page.locator('//span[@class="text-danger text-sm mb-2"]');
        this.errorMessagePassword = page.locator('//span[@class="text-danger text-sm"]');
        this.alertBox = page.locator('//div[@class="vs-alert"]');
    }

    async checkAllElementVisilibity(){
        await expect(this.emailField).toBeVisible();
        await expect(this.passwordField).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.rememberMeButton).toBeVisible();
        await expect(this.forgotPasswordButton).toBeVisible();
        await expect(this.joinHereButton).toBeVisible();
        await expect(this.emailField).toBeVisible();
        await expect(this.showPasswordButton).toBeVisible();
    }

    async enterEmail(email: string){
        await this.emailField.fill(email)
    }

    async enterPassword(password: string){
        await this.passwordField.fill(password)
    }

    async fillOutLoginForm(email: string, password: string){
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async checkEmailFieldErrorMessage(message: string){
        await expect(this.errorMessageEmail).toBeVisible();
        await expect(this.errorMessageEmail).toHaveText(message);
    }

    async checkPasswordFieldErrorMessage(message: string){
        await expect(this.errorMessagePassword).toBeVisible();
        await expect(this.errorMessagePassword).toHaveText(message);
    }

    async checkAlertBoxMessage(message: string){
        await expect(this.alertBox).toBeVisible();
        await expect(this.alertBox).toHaveText(message);
    }

    async clickShowPasswordButton(){
        await this.showPasswordButton.click();
        await expect(this.passwordField).toHaveAttribute('type', 'text')
    }

    async clickHidePasswordButton(){
        await this.hidePasswordButton.click();
        await expect(this.passwordField).toHaveAttribute('type', 'password')
    }

    async clickForgotPasswordButton(){
        await this.forgotPasswordButton.click();
    }

    async clickJoinHereButton(){
        await this.joinHereButton.click();
    }

    async checkUrl(page, url: string){
        await expect(page).toHaveURL(url);
    }
}

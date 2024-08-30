import { test, expect } from '@playwright/test';
import * as testdata from './testdata.ts';
import { url, ForgotPasswordPage } from '../pages/ForgotPassword.page.ts';
const basicUser = testdata.basicUser

test.beforeEach(async ({ page }) => {
  await page.goto(url)
});

test('check forgot password page elements', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  await forgotPasswordPage.checkAllElementVisilibity()
});

test('Error message should be shown for blank email field', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  await forgotPasswordPage.enterEmail("");
  await forgotPasswordPage.clickSubmitButton();
  await forgotPasswordPage.checkEmailFieldErrorMessage("The email field is required");
});

test('Error message should be shown for invalid email format', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  await forgotPasswordPage.enterEmail("test123");
  await forgotPasswordPage.clickSubmitButton();
  await forgotPasswordPage.checkEmailFieldErrorMessage("The email field must be a valid email");
});

test('Error message should be shown for invalid email', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  await forgotPasswordPage.enterEmail("gianchristianlim@gmail.com");
  await forgotPasswordPage.clickSubmitButton();
  await forgotPasswordPage.checkAlertBoxMessage("Please check your email is correct.");
});

test('Should be able to reset password with valid email', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  await forgotPasswordPage.enterEmail(basicUser.getEmail());
  await forgotPasswordPage.clickSubmitButton();
  await forgotPasswordPage.checkAlertBoxMessage("Password reset link sent successfully. Please check your inbox.");
});

test('Clicking Back to Login button should redirect to Login Page', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  await forgotPasswordPage.clickBackToLoginButton();
  await expect(page).toHaveURL("https://stage.freshclinics.com.au/login");
});
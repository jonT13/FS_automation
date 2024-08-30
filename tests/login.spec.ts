import { test, expect } from '@playwright/test';
import * as testdata from './testdata.ts';
import { url, LoginPage } from '../pages/Login.page.ts';
import { DashboardPage } from '../pages/Dashboard.page.ts';

const basicUser = testdata.basicUser
const superAdmin = testdata.superAdmin
const doctor = testdata.doctor
const nurse = testdata.nurse

test.beforeEach(async ({ page }) => {
  await page.goto(url)
});

test('check login page elements', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.checkAllElementVisilibity();
});

test('Error message should be shown for blank fields', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.clickLoginButton();

  await loginPage.checkEmailFieldErrorMessage("Please enter your email address");
  await loginPage.checkPasswordFieldErrorMessage("Please enter your password");
});

test('Error message should be shown for blank email field', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm("", basicUser.getPassword());
  await loginPage.checkEmailFieldErrorMessage("Please enter your email address");
});

test('Error message should be shown for blank password field', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm(basicUser.getEmail(), "");
  await loginPage.checkPasswordFieldErrorMessage("Please enter your password");
});

test('Error message should be shown for invalid email format', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm('test123', basicUser.getPassword());
  await loginPage.checkEmailFieldErrorMessage("The email field must be a valid email");
});

test('Error message should be shown for non-existing email', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm('gianchristianlim@gmail.com', basicUser.getPassword());
  await loginPage.clickLoginButton();
  await loginPage.checkAlertBoxMessage("Email/Password is invalid. Please try again.");
});

test('Error message should be shown for invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm('your-email@example.com', 'your-password');
  await loginPage.clickLoginButton();
  await loginPage.checkAlertBoxMessage("Email/Password is invalid. Please try again.");
});

test('Show/Hide button for password should be working', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm('your-email@example.com', 'your-password');
  await loginPage.clickShowPasswordButton();
  await loginPage.clickHidePasswordButton();
});

test('Valid basic user should be able to login', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm(basicUser.getEmail(), basicUser.getPassword());
  await loginPage.clickLoginButton();

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.checkNoticeBoard();
  await dashboardPage.checkNameInHeader(basicUser.getName());
  await dashboardPage.checkUrl("basicUser");
});

test('Valid Super Admin should be able to login', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm(superAdmin.getEmail(), superAdmin.getPassword());
  await loginPage.clickLoginButton();

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.checkNameInHeader(superAdmin.getName());
  await dashboardPage.checkUrl("superAdmin");
});

test('Valid Doctor should be able to login', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm(doctor.getEmail(), doctor.getPassword());
  await loginPage.clickLoginButton();

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.checkNameInHeader(doctor.getName());
  await dashboardPage.checkUrl("doctor");
});

test('Valid Nurse should be able to login', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm(nurse.getEmail(), nurse.getPassword());
  await loginPage.clickLoginButton();

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.checkNameInHeader(nurse.getName());
  await dashboardPage.checkUrl("nurse");
});

test('Clicking Forgot Password should redirect to Forgot Password Link', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.clickForgotPasswordButton();
  await loginPage.checkUrl(page, "https://stage.freshclinics.com.au/forgot-password");
});

test('Clicking Join Here should redirect to Join Fresh Clinics Link', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.clickJoinHereButton();

  await expect(page).toHaveTitle("Join Fresh Clinics");
});
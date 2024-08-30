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

test('Valid user should be able to logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.fillOutLoginForm(basicUser.getEmail(), basicUser.getPassword());
  await loginPage.clickLoginButton();

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.logoutUser("basicUser");
});

test('Valid superAdmin should be able to logout', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm(superAdmin.getEmail(), superAdmin.getPassword());
  await loginPage.clickLoginButton();

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.logoutUser("superAdmin");
});

test('Valid doctor should be able to logout', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm(doctor.getEmail(), doctor.getPassword());
  await loginPage.clickLoginButton();

  await page.locator('header').filter({ hasText: 'Setup payment methodclose' }).locator('i').click()

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.logoutUser("doctor");
});

test('Valid nurse should be able to logout', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm(nurse.getEmail(), nurse.getPassword());
  await loginPage.clickLoginButton();

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.logoutUser("nurse");
});

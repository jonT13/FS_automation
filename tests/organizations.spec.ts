import { test, expect } from '@playwright/test';
import * as testdata from './testdata.ts';
import { url, LoginPage } from '../pages/Login.page.ts';
import { DashboardPage } from '../pages/Dashboard.page.ts';
import { Sidebar } from '../pages/Sidebar.page.ts';
import { Organizations } from '../pages/Accounts_Organizations.ts';

const superAdmin = testdata.superAdmin

test.beforeEach(async ({ page }) => {
  await page.goto(url)
  const loginPage = new LoginPage(page)
  await loginPage.fillOutLoginForm(superAdmin.getEmail(), superAdmin.getPassword());
  await loginPage.clickLoginButton();

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.checkNameInHeader(superAdmin.getName());
  await dashboardPage.checkUrl("superAdmin");

  const sidebar = new Sidebar(page);
  await sidebar.checkSideBarElements();
  await sidebar.navigateToOrganizations();
});

test('Should be able to navigate to Organizations', async ({ page }) => {
  const organizations = new Organizations(page);
  await organizations.checkOrganizationsElements();
});
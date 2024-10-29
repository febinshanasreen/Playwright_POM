import { test, expect } from '@playwright/test';
import {LoginPage} from '../../Pages/login'

test('test', async ({ page }) => {

  const LoginObj = new LoginPage(page)
  await page.goto('https://www.saucedemo.com/v1/');
  await LoginObj.login('standard_user', 'secret_sauce')


  
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('secret_sauce');
  // await page.getByRole('button', { name: 'LOGIN' }).click();

});
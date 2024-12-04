import {test, expect} from '@playwright/test';
import {urls} from '../utils/urls';
import {locators} from '../locators/elements_locator';

test.describe('Demoblaze test cases' , () => {
    test.beforeEach(async ({page}) => {
        await page.goto(urls.landingPage);
    });

    test('home page validation', async ({page}) => {
        expect(page).toHaveTitle('STORE');
    });
    
    test('signup validation', async ({page}) => {
        await page.click(locators.signUpNavItem);
        await page.fill(locators.signUpUsername, 'user123');
        await page.fill(locators.signUpPassword, 'abcd');
        await page.click(locators.signupButton);
    });
});
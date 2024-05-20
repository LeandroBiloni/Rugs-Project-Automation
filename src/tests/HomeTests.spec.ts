import test, { expect } from "@playwright/test";
import {HomePage} from "../pages/HomePage";
import { OrdersPage } from "../pages/OrdersPage";
import { ClientsPage } from "../pages/ClientsPage";
import { ProductsPage } from "../pages/ProductsPage";
import { allure } from "allure-playwright";

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status === "failed") {

        const testName = testInfo.title;
        const time = new Date().toJSON();
        const screenshotName = testName.concat(time.toString(), ".jpeg");

        await allure.attachment(screenshotName, await page.screenshot(), {
            contentType: "image/jpeg",
        });
    }
});

test('Home "Orders" button', async ({ page }) => {
    //Arrange

    //Act
    const homePage = new HomePage(page);    
    await allure.step("Step 1 - Navigate to Home Page", async () => {
        await page.goto(homePage.getURL());
    });

    await allure.step("Step 2 - Click Orders button", async () => {
        await homePage.clickOrders();
    });
    
    //Assert
    const ordersPage = new OrdersPage(page);
    await expect(page).toHaveURL(ordersPage.getURL());
});

test('Home "Clients" button', async ({ page }) => {
    //Arrange

    //Act
    const homePage = new HomePage(page);    
    await allure.step("Step 1 - Navigate to Home Page", async () => {
        await page.goto(homePage.getURL());
    });

    await allure.step("Step 2 - Click Clients button", async () => {
        await homePage.clickClients();
    });
    
    //Assert
    const clientsPage = new ClientsPage(page);
    await expect(page).toHaveURL(clientsPage.getURL());
});

test('Home "Products" button', async ({ page }) => {
    //Arrange

    //Act
    const homePage = new HomePage(page);    
    await allure.step("Step 1 - Navigate to Home Page", async () => {
        await page.goto(homePage.getURL());
    });

    await allure.step("Step 2 - Click Products button", async () => {
        await homePage.clickProducts();        
    });

    //Assert
    const productsPage = new ProductsPage(page);
    await expect(page).toHaveURL(productsPage.getURL());
});

test('Home "UPS" button', async ({ page }) => {
    //Arrange

    //Act
    const homePage = new HomePage(page);    
    await allure.step("Step 1 - Navigate to Home Page", async () => {
        await page.goto(homePage.getURL());
    });

    await allure.step("Step 2 - Click UPS button", async () => {
        await homePage.clickUPS();        
    });
    //Assert
    await expect(page).toHaveURL(homePage.getUpsURL());
});

test('Home "FedEx" button', async ({ page }) => {
    //Arrange

    //Act
    const homePage = new HomePage(page);    
    await allure.step("Step 1 - Navigate to Home Page", async () => {
        await page.goto(homePage.getURL());
    });

    await allure.step("Step 2 - Click FedEx button", async () => {
        await homePage.clickFedEx();        
    });

    //Assert
    await expect(page).toHaveURL(homePage.getFedExURL());
});
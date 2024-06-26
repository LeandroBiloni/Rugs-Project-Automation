import test, { expect } from "@playwright/test";
import { allure } from "allure-playwright";
import { Header } from "../components/Header";
import { ClientsPage } from "../pages/ClientsPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { OrdersPage } from "../pages/OrdersPage";
import { ProductsPage } from "../pages/ProductsPage";

test.beforeEach(async ({ page}) => {
    const homePage = new HomePage(page); 
    await page.goto(homePage.getURL());
});

test.describe('Header Tests', {tag: ['@header', '@full-regression']}, () => {
    test('Home button', async ({ page }) => {
        await allure.description("Test that 'Home' button in Header works. Before this test starts it already logged in.");
        await allure.tags("Header", "Full Regression");

        //Arrange

        //Act
        const ordersPage = new OrdersPage(page);
        await allure.step("Step 1 - Go to Orders Page", async () => {        
            await page.goto(ordersPage.getURL());
        });

        const header = new Header(page);
        await allure.step("Step 2 - Click Home button", async () => {        
            await header.clickHome();
        });    

        //Assert
        const home = new HomePage(page);    

        await allure.step("Check that the expected page loaded", async () => {
            await expect(page).toHaveURL(home.getURL());
        });
        
    });

    test('Orders button', async ({ page }) => {
        await allure.description("Test that 'Orders' button in Header works. Before this test starts it already logged in.");
        await allure.tags("Header", "Full Regression");
        //Arrange

        //Act        
        const header = new Header(page);
        await allure.step("Step 1 - Click Orders button", async () => {
            await header.clickOrders();
        });
        
        //Assert
        const ordersPage = new OrdersPage(page);

        await allure.step("Check that the expected page loaded", async () => {
            await expect(page).toHaveURL(ordersPage.getURL());
        });
    });

    test('Clients button', async ({ page }) => {
        await allure.description("Test that 'Clients' button in Header works. Before this test starts it already logged in.");
        await allure.tags("Header", "Full Regression");
        //Arrange

        //Act        
        const header = new Header(page);
        await allure.step("Step 1 - Click Clients button", async () => {
            await header.clickClients();
        });
        
        //Assert
        const clientsPage = new ClientsPage(page);

        await allure.step("Check that the expected page loaded", async () => {
            await expect(page).toHaveURL(clientsPage.getURL());
        });
    });

    test('Products button', async ({ page }) => {
        await allure.description("Test that 'Products' button in Header works. Before this test starts it already logged in.");
        await allure.tags("Header", "Full Regression");
        //Arrange

        //Act        
        const header = new Header(page);
        await allure.step("Step 1 - Click Products button", async () => {
            await header.clickProducts();
        });
        
        //Assert
        const productsPage = new ProductsPage(page);

        await allure.step("Check that the expected page loaded", async () => {
            await expect(page).toHaveURL(productsPage.getURL());
        });
    });

    test('Logout button', async ({ page }) => {
        await allure.description("Test that 'Logout' button in Header works. Before this test starts it already logged in.");
        await allure.tags("Header", "Full Regression");

        //Arrange
        page.on('dialog', async (dialog) => {
            console.log("Logout popup");
            console.log(dialog.message());
            await dialog.accept();
        });

        //Act        
        const header = new Header(page);

        await allure.step("Step 1 - Click Logout button", async () => {
            await header.clickLogout();
        });
        
        //Assert
        const loginPage = new LoginPage(page);

        await allure.step("Check that the expected page loaded", async () => {
            await expect(page).toHaveURL(loginPage.getURL());
        });
    });
});
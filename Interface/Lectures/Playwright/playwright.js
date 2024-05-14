//LOAD THE PLAYWRIGHT LIBRARY
const {test, expect} = require(`@playwright/test`);
/* "test"  will give the test functionality
"expect" are like the assertions in java
*/ 

//SAMPLE TEST
test (`has title`, async({page}) => {
    await page.goto(`algunsitioweb.com`);

    await expect(page).toHaveTitle(/algun titulo/);
}) ;
/* "page" refers to the actula webpage that is opened
"goto" opens the link
"toHaveTitle" to have a title specified with the same name
You shold refer to the Playwright documentation to know different assertions*/ 

//INTERATIONS AND LOCATORS

test(`interatcions and locations`, async({page}) => {
    await page.goto(`algunsitioweb.com`);

    //Fills in text boxes
    await page.getByLabel(`User name`).fill(`John`);
    await page.getByLabel(`Password`).fill(`alguna_clave`);

    //Checks button functionality
    await page.getByRole("button",{name: "Sign in"}).click();
    await expect(page.getByText("Welcome, John!")).toBeVisible();

    //Different way to select elements within your page
    const htmlElement = await page.locator("html");
    const ulCount = await page.locator("header").locator("ul").count(); //Nested
});


//TEST HOOKS
/* Test hooks are like in JUnit where some examples are:
@beforeAll
@displayName
etc...

We have the same functinoality as the following:*/

test.beforeEach(async ({page}) => {
    await page.goto("algunapagina.com");
});

//or

test.describe("some tests", () => {

    test("one", async ({page}) => {
        //..
    });

});



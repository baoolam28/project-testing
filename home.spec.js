const {By, Builder, WebElementCondition, until} = require('selenium-webdriver');
const assert = require('assert');

(async function main() {
    let driver;

    try {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.amazon.com/');

        let title = driver.getTitle();
        console.log(`Page title: ${JSON.stringify(title)}`);
        assert.strictEqual(title, 'Amazon.com: Online Shopping for Electronics, Apparel, Books, Food, and more');

    } catch (e) {
        console.error('Failed to start the browser', e);
        process.exit(1);
    }finally {
        if (driver) {
            await driver.quit();
        }
    }

}())
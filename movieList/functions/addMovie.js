const {By} = require('selenium-webdriver');

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu');
    await driver.findElement(By.xpath('//button')).click();
    const movie = await driver.findElement(By.xpath('//li'));
    const displayed = movie.isDisplayed();

    expect(displayed).toBeTruthy();
}

const crossMovie = async(driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu');
    await driver.findElement(By.xpath('//button')).click();
    await driver.findElement(By.xpath("//span")).click();

    const checked = await driver.findElement(By.css(".checked"));

    expect(checked).toBeTruthy();

}

const deleteMovie = async(driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Detective Pikachu');
    await driver.findElement(By.xpath('//button')).click();

    await driver.findElement(By.xpath('//li/button')).click();

    const list = await driver.findElement(By.xpath('//ul')).getText();

    expect(list).toBe('');

}

const verifyMovie = async (driver) => {

    const movie = 'Back to the Future'

    await driver.findElement(By.xpath('//input')).sendKeys(movie)

    await driver.findElement(By.xpath('//button')).click()

    const movieText = await driver.findElement(By.xpath('//li/span')).getText()

    expect(movieText).toEqual(movie)

}






module.exports = {
    addMovie,
    crossMovie,
    deleteMovie,
    verifyMovie
}
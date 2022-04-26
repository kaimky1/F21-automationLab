const { Builder, Capabilities} = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {addMovie, crossMovie, deleteMovie, verifyMovie} = require('../functions/addMovie.js')

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
});

afterAll(async() => {
    await driver.quit()
})

describe('Movie Test', () => {
    test('Add a movie', async() => {
        await addMovie(driver)
        await driver.sleep(3000)
    })

    test('Cross a movie', async() => {
        await crossMovie(driver)
        await driver.sleep(5000)
    })
    test('Delete a movie', async() => {
        await deleteMovie(driver)
        await driver.sleep(3000)
    })
    test('Verify Movie', async() => {
        await verifyMovie(driver)
        await driver.sleep(3000)
    })
})

describe('App tests', () => {

  let page = global.page

  test('Render the search page', async () => {

    const title = await page.$eval('h1', (e) => e.textContent);
    expect(title).toBe("Search books")

  });
})
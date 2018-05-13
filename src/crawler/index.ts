const puppeteer = require('puppeteer');
const parser: Github.Parser = require('./parsers');
const baseURL = 'https://www.github.com/trending';

module.exports = {
	async repositories(type: string, since: string): Promise<Array<Github.Trending>> {
		const LIST_SELECTOR = '.explore-content ol li',

			browser = await puppeteer.launch(),
			page = await browser.newPage(),

			queryType = type ? `/${type}` : '',
			querySince = since ? `?since=${since}` : '',
			url = `${baseURL}${queryType}${querySince}`;

		await page.goto(url);

		const result: Array<Github.Trending> = await page.evaluate(parser.repositories, LIST_SELECTOR);

		browser.close();

		return result;
	},
	async developers(type: string, since: string): Promise<Array<Github.Developer>> {
		const LIST_SELECTOR = '.explore-content ol li',

			browser = await puppeteer.launch(),
			page = await browser.newPage(),

			queryType = type ? `/${type}` : '',
			querySince = since ? `?since=${since}` : '',
			url = `${baseURL}/developers${queryType}${querySince}`;


		await page.goto(url);

		const result: Array<Github.Developer> = await page.evaluate(parser.developers, LIST_SELECTOR);

		browser.close();

		return result
	}
};
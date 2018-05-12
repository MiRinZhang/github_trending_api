const puppeteer = require('puppeteer');
const parser = require('./parser');
const baseURL = 'https://www.github.com/trending';

module.exports = {
	async repository(type: string, since: string): Promise<Array<Github.Trending>> {
		const LIST_SELECTOR = '.explore-content ol li',

			broswer = await puppeteer.launch(),
			page = await broswer.newPage(),

			queryType = type ? `/${type}` : '',
			querySince = since ? `?since=${since}` : '',
			url = `${baseURL}${queryType}${querySince}`;

		await page.goto(url);

		const result: Array<Github.Trending> = await page.evaluate(parser, LIST_SELECTOR);

		broswer.close();

		return result;
	},
	async developer(type: string, since: string) {
		return `params: type-> ${type}; since-> ${since}`;
	}
};
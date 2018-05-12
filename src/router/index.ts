namespace Router {
	const router = require('koa-router')(),
		fetchTrending: Github.Crawler = require('../crawler');

	function index(ctx: any) {
		ctx.body = 'Github Trending API';
	}

	async function fetchRepository(ctx: any) {
		ctx.body = await fetchTrending.repository(ctx.params.type, ctx.query.since);
	}

	async function fetchDeveloper(ctx: any) {
		ctx.body = await fetchTrending.developer(ctx.params.type, ctx.query.since);
	}

	router
		.get('/', index)
		.get('/api/:type?', fetchRepository)
		.get('/api/developer/:type?', fetchDeveloper);

	module.exports = router;
}
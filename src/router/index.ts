namespace Router {
	const router = require('koa-router')(),
		fetchTending = require('../crawler');

	function index(ctx: any) {
		ctx.body = 'index page';
	}

	async function fetchTrending(ctx: any) {
		ctx.body = await fetchTending(ctx.params.type, ctx.query.since);
	}

	router
		.get('/', index)
		.get('/api/:type', fetchTrending);

	module.exports = router;
}
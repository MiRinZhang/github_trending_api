const Koa = require('koa'),
	logger = require('koa-logger'),
	router = require('./router'),
	app = new Koa(),
	PORT = 4041;

app.use(logger());
app.use(router.routes());

app.use(async (ctx: any) => {
	const { status } = ctx;
	if (status === 404) {
		ctx.body = `<p>Nothing~~~~</p>`;
	}
});

app.listen(PORT);

console.info(`Listen at [${PORT}]`);

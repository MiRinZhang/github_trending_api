### githubTrendingApi

> github trending api with puppeteer

#### Usage

* RUN

`npm start` or `yarn start`

* DEV

`npm run dev` or `yarn dev`

#### API

> *repositories*: `/api/repositories/:type?since=:since`
>
> *developers*: `/api/developers/:type?since=:since`

* e.g.

>
> `/api/repositories` equal `https://www.github.com/trending`
>
> `/api/repositories/javascript` equal `https://www.github.com/trending/javascript`
>
> `/api/repositories/javascript?since=daily` equal `https://www.github.com/trending/javascript?since=daily`
>
> `/api/developers` equal `https://www.github.com/developers`
>
> `/api/developers/javascript` equal `https://www.github.com/developers/javascript`
>
> `/api/developers/javascript?since=daily` equal `https://www.github.com/developers/javascript?since=daily`

### githubTrendingApi

> github trending api with puppeteer

#### Usage

* RUN

`npm start` or `yarn start`

* DEV

`npm run dev` or `yarn dev`

#### API

> **repositories**: `/api/repositories/:type?since=:since`

*Response*

```json
[
    {
        "title": "xingshaocheng / architect-awesome",
        "url": "https://www.github.com/xingshaocheng/architect-awesome",
        "description": "后端架构师技术图谱",
        "star": "13,319",
        "fork": "3,179",
        "language": "",
        "owners": [
            {
                "id": "4962837",
                "name": "xingshaocheng",
                "avatar": "https://avatars3.githubusercontent.com/u/4962837?s=40&v=4"
            },
            {
                "id": "8112340",
                "name": "liukgg",
                "avatar": "https://avatars0.githubusercontent.com/u/8112340?s=40&v=4"
            },
            {
                "id": "34806814",
                "name": "sorenxing",
                "avatar": "https://avatars0.githubusercontent.com/u/34806814?s=40&v=4"
            },
            {
                "id": "11901298",
                "name": "AceDarkknight",
                "avatar": "https://avatars3.githubusercontent.com/u/11901298?s=40&v=4"
            },
            {
                "id": "1884540",
                "name": "laddcn",
                "avatar": "https://avatars0.githubusercontent.com/u/1884540?s=40&v=4"
            }
        ]
    },
    {
        "title": "google / gvisor",
        "url": "https://www.github.com/google/gvisor",
        "description": "Container Runtime Sandbox",
        "star": "5,108",
        "fork": "191",
        "language": "Go",
        "owners": [
            {
                "id": "153325",
                "name": "nlacasse",
                "avatar": "https://avatars1.githubusercontent.com/u/153325?s=40&v=4"
            },
            {
                "id": "3537533",
                "name": "fvoznika",
                "avatar": "https://avatars0.githubusercontent.com/u/3537533?s=40&v=4"
            },
            {
                "id": "7056530",
                "name": "iangudger",
                "avatar": "https://avatars0.githubusercontent.com/u/7056530?s=40&v=4"
            },
            {
                "id": "1293187",
                "name": "prattmic",
                "avatar": "https://avatars1.githubusercontent.com/u/1293187?s=40&v=4"
            },
            {
                "id": "38698630",
                "name": "zhaozhongn",
                "avatar": "https://avatars0.githubusercontent.com/u/38698630?s=40&v=4"
            }
        ]
    }
]
```

>
> **developers**: `/api/developers/:type?since=:since`

*Response*

```json
[
    {
        "title": "google(Google)",
        "rank": "1",
        "avatar": "https://avatars0.githubusercontent.com/u/1342004?s=96&v=4",
        "homePage": "https://www.github.com/google",
        "repository": "https://www.github.com/google/material-design-icons",
        "repoName": "material-design-icons",
        "repoDesc": "Material Design icons by Google"
    },
    {
        "title": "cyanharlow(DianaSmith)",
        "rank": "2",
        "avatar": "https://avatars2.githubusercontent.com/u/8030961?s=96&v=4",
        "homePage": "https://www.github.com/cyanharlow",
        "repository": "https://www.github.com/cyanharlow/purecss-francine",
        "repoName": "purecss-francine",
        "repoDesc": "HTML/CSS drawing in the style of an 18th-century oil painting. Hand-coded entirely in HTML & CSS."
    },
    {
        "title": "pytorch",
        "rank": "3",
        "avatar": "https://avatars0.githubusercontent.com/u/21003710?s=96&v=4",
        "homePage": "https://www.github.com/pytorch",
        "repository": "https://www.github.com/pytorch/pytorch.github.io",
        "repoName": "pytorch.github.io",
        "repoDesc": ""
    }
]
```

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

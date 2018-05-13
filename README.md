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
        "title": "cyanharlow / purecss-francine",
        "url": "https://www.github.com/cyanharlow/purecss-francine",
        "description": "HTML/CSS drawing in the style of an 18th-century oil painting. Hand-coded entirely in HTML & CSS.",
        "star": " 4,036",
        "fork": " 169",
        "language": "CSS",
        "owners": [
            {
                "id": "8030961",
                "name": "cyanharlow"
            }
        ]
    },
    {
        "title": "tabler / tabler",
        "url": "https://www.github.com/tabler/tabler",
        "description": "Tabler is free and open-source HTML Dashboard UI Kit built on Bootstrap 4",
        "star": " 13,630",
        "fork": " 984",
        "language": "CSS",
        "owners": [
            {
                "id": "1282324",
                "name": "codecalm"
            },
            {
                "id": "36491",
                "name": "beeman"
            },
            {
                "id": "14898960",
                "name": "Git-Good"
            },
            {
                "id": "36431703",
                "name": "Shloken"
            },
            {
                "id": "4879685",
                "name": "domProjects"
            }
        ]
    },
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
    },
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

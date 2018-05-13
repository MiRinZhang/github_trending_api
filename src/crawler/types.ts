declare module Github {
	export interface Trending {
		title: string;
		url: string;
		star: string;
		fork: string;
		description: string;
		language: string;
		owners: Array<Owner>;
	}

	export interface Owner {
		id: string;
		name: string;
	}

	export interface Crawler {
		repositories(type: string, since: string): Promise<Array<Github.Trending>>

		developers(type: string, since: string): Promise<Array<Github.Trending>>;
	}

	export interface Parser {
		repositories(selector: string): Array<Github.Trending>;

		developers(selector: string): Array<Github.Trending>;
	}

	export interface Developer {
		title: string;
		rank: string;
		avatar: string;
		homePage: string;
		repository: string;
		repoName: string;
		repoDesc: string;
	}
}
declare module Github {
	export interface Trending {
		title: string;
		url: string;
		star: string;
		fork: string;
		description: string;
		language: string;
		site: string;
		owners: Array<Owner>;
	}

	export interface Owner {
		id: string;
		name: string;
	}

	export interface User {
		login: string;
		id: number;
		avatar_url: string;
		url: string;
		html_url: string;
		name: string;
		company: string;
		blog: string;
		location: string;
		email: string;
		bio: string;
		public_repos: number;
		public_gists: number;
		followers: number;
		following: number;
		created_at: string;

		[propName: string]: any;
	}
}
module.exports = (selector: string) => {
	const SITE = 'https://www.github.com',
		$items: NodeListOf<HTMLElement> = document.querySelectorAll(selector);

	return Array.from($items).map((item: HTMLElement): Github.Trending => {
		const $subItem: NodeListOf<HTMLElement> = item.querySelectorAll('div'),
			$title = $subItem[0].querySelector('h3 a'),
			$lang = $subItem[3].querySelector('[itemprop="programmingLanguage"]') || { textContent: '' },
			$bottomA = $subItem[3].querySelectorAll('a'),
			$bottomS = $subItem[3].querySelectorAll('span a[data-hovercard-user-id]');

		const owners = Array.from($bottomS).map((owner: Element): Github.Owner => (
				{
					id: owner.getAttribute('data-hovercard-user-id') || '',
					name: (owner.getAttribute('href') || '').slice(1),
				}
			)
		);

		return {
			title: $title.textContent.trim(),
			url: $title.getAttribute('href'),
			description: ($subItem[2].textContent || '').trim(),
			star: $bottomA[0].innerText,
			fork: $bottomA[1].innerText,
			language: $lang.textContent.trim(),
			owners,
			site: SITE,
		}
	});
};

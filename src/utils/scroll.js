/**
 * Scrolls smoothly to the section with the given id and syncs the URL hash
 * (via pushState, so no extra native jump-scroll is triggered) so that:
 *  - refreshing the page keeps the user on the same section
 *  - the browser Back/Forward buttons work as expected
 *  - the section can be opened directly via a URL like /#contact
 */
export function scrollToSection(id) {
	const el = document.getElementById(id);
	if (!el) return;

	el.scrollIntoView({ behavior: "smooth" });

	const hash = `#${id}`;
	if (window.location.hash !== hash) {
		window.history.pushState(null, "", hash);
	}
}

/**
 * Scrolls (without animation) to whatever section matches the current
 * location.hash. Retries briefly since some sections may still be mounting
 * (e.g. lazy-loaded, below-the-fold components).
 */
export function scrollToCurrentHash() {
	const id = window.location.hash?.slice(1);
	if (!id) return;

	let attempts = 0;
	const tryScroll = () => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "auto", block: "start" });
			return;
		}
		attempts += 1;
		if (attempts < 20) {
			setTimeout(tryScroll, 100);
		}
	};

	tryScroll();
}

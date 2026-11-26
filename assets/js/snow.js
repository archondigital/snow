/* Snow theme behaviour: a gallery lightbox on Yeti's native dialog.
   No dependencies. Without this script every gallery link still opens its
   full-size image, so the page works with JavaScript off. */

const lightbox = document.getElementById('lightbox');
const GALLERY_LINK = 'a[data-gallery]';
const OPEN_GALLERY_HASH = '#photo';

/** Unique links of one gallery, in document order (the featured image appears twice). */
function galleryLinks(name) {
	const seen = new Set();
	return [...document.querySelectorAll(GALLERY_LINK)]
		.filter((link) => link.dataset.gallery === name)
		.filter((link) => (seen.has(link.href) ? false : seen.add(link.href)));
}

function setupLightbox(dialog) {
	const image = dialog.querySelector('img');
	const caption = dialog.querySelector('figcaption');
	const counter = dialog.querySelector('[data-lightbox-count]');
	const prevButton = dialog.querySelector('#lightbox-prev');
	const nextButton = dialog.querySelector('#lightbox-next');
	let links = [];
	let index = 0;

	function show(nextIndex) {
		index = (nextIndex + links.length) % links.length;
		const link = links[index];
		image.src = link.href;
		image.alt = link.querySelector('img')?.alt ?? '';
		caption.textContent = link.dataset.caption ?? '';
		counter.textContent = `${index + 1} / ${links.length}`;
		const single = links.length < 2;
		prevButton.hidden = single;
		nextButton.hidden = single;
	}

	function open(link) {
		links = galleryLinks(link.dataset.gallery);
		show(links.findIndex((candidate) => candidate.href === link.href));
		if (!dialog.open) {
			dialog.showModal();
		}
	}

	document.addEventListener('click', (event) => {
		const link = event.target.closest(GALLERY_LINK);
		if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) {
			return;
		}
		event.preventDefault();
		open(link);
	});

	prevButton.addEventListener('click', () => show(index - 1));
	nextButton.addEventListener('click', () => show(index + 1));

	dialog.addEventListener('keydown', (event) => {
		if (event.key === 'ArrowLeft') show(index - 1);
		if (event.key === 'ArrowRight') show(index + 1);
	});

	// Free the full-size image once closed, so it stops using memory.
	dialog.addEventListener('close', () => image.removeAttribute('src'));

	// A link to a post with #photo opens its gallery straight away.
	if (window.location.hash === OPEN_GALLERY_HASH) {
		const first = document.querySelector(GALLERY_LINK);
		if (first) open(first);
	}
}

if (lightbox) {
	setupLightbox(lightbox);
}

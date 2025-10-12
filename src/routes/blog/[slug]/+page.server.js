import { PUBLIC_API_URL } from '$env/static/public'

export async function load({ params, fetch }) {
	const { slug } = params;

	const titleSlug = slug;

	const res = await fetch(PUBLIC_API_URL + '/posts?_embed');
	if (!res.ok) {
		throw new Error('Failed to fetch posts from our server');
	}
	const posts = await res.json();

	const post = posts.find((p) => {
		const postTitleSlug = p.title.rendered.toLowerCase().replaceAll(' ', '-').trim();
		return postTitleSlug === titleSlug;
	});

	if (!post) {
		throw new Error('Blog post not found');
	}

	let featuredMediaUrl = null;
	if (
		post._embedded &&
		post._embedded['wp:featuredmedia'] &&
		post._embedded['wp:featuredmedia'][0]
	) {
		const media = post._embedded['wp:featuredmedia'][0];
		featuredMediaUrl =
			media.source_url ||
			media.media_details?.sizes?.large?.source_url ||
			media.media_details?.sizes?.full?.source_url;
	}

	return {
		post: {
			...post,
			featured_media: featuredMediaUrl
		}
	};
}

export async function load({ fetch }) {
	const res = await fetch('https://kang-buah-articles.page.gd/wp-json/wp/v2/posts?_embed');
	if (!res.ok) {
		throw new Error('Failed to fetch all posts from our server');
	}
	const posts = await res.json();

	// Process posts to include featured media URLs
	const processedPosts = posts.map((post) => {
		let featuredMediaUrl = null;

		// Check if post has embedded media
		if (
			post._embedded &&
			post._embedded['wp:featuredmedia'] &&
			post._embedded['wp:featuredmedia'][0]
		) {
			const media = post._embedded['wp:featuredmedia'][0];
			featuredMediaUrl =
				media.source_url ||
				media.media_details?.sizes?.medium?.source_url ||
				media.media_details?.sizes?.full?.source_url;
		}

		return {
			...post,
			featured_media: featuredMediaUrl
		};
	});

	return { posts: processedPosts };
}

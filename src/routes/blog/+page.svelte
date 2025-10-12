<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	function createSlug(title) {
		return title.toLowerCase().trim().replaceAll(' ', '-');
	}

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function stripHtml(html) {
		if (!html) return '';
		return html.replace(/<[^>]*>?/gm, '');
	}

	function getExcerpt(content, maxLength = 150) {
		const text = stripHtml(content);
		return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
	}

	function goToPost(post) {
		const slug = createSlug(post.title.rendered);
		const path = `${slug}`;
		goto(`/blog/${path}`);
	}
</script>

<svelte:head>
	<title>Blog | Kang Buah</title>
	<meta
		name="description"
		content="Blog Kang Buah - Tips dan informasi seputar buah-buahan segar, kesehatan, dan gaya hidup sehat."
	/>
</svelte:head>

<!-- Hero Banner Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
	<div class="absolute inset-0 bg-black/20"></div>
	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
		<div class="text-center">
			<h1 class="mb-6 font-brand text-4xl font-light text-white sm:text-5xl lg:text-6xl">
				<span class="text-white">Blog</span>
			</h1>
			<p class="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl">
				Tips dan informasi seputar buah-buahan segar, kesehatan, dan gaya hidup sehat
			</p>
		</div>
	</div>

	<!-- Background Banner Image -->
	<div class="absolute inset-0 -z-10">
		<picture>
			<source srcset="/assets/images/decor/blog/Parcel-Buah-Banner.webp" type="image/webp" />
			<img
				src="/assets/images/decor/blog/Parcel-Buah-Banner.webp"
				alt="Parcel Buah Banner"
				class="h-full w-full object-cover brightness-[35%]"
				loading="eager"
			/>
		</picture>
	</div>
</section>

<!-- Blog Posts Section -->
<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-8">
		{#if data.posts && data.posts.length > 0}
			<div class="mb-12 text-center">
				<h2 class="mb-4 font-brand text-3xl font-light sm:text-4xl">
					<span class="text-primary">Artikel</span> Terbaru
				</h2>
				<p class="text-lg text-slate-600">
					Temukan tips dan informasi terbaru seputar buah-buahan segar
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each data.posts as post}
					<article
						class="group cursor-pointer rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
					>
						<button onclick={() => goToPost(post)} class="w-full text-left">
							{#if post.featured_media}
								<div class="aspect-video overflow-hidden rounded-t-lg">
									<img
										src={post.featured_media}
										alt={post.title.rendered}
										class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										loading="lazy"
									/>
								</div>
							{:else}
								<div
									class="flex aspect-video items-center justify-center overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-secondary/20"
								>
									<div class="text-center">
										<div class="mb-2 text-4xl">
											<img
												src="/assets/images/logos/KangBuah_Logo-rounded.png"
												alt="Logo Kang Buah"
												class="mx-auto h-16 w-16"
												loading="lazy"
											/>
										</div>
									</div>
								</div>
							{/if}

							<div class="p-6">
								<div class="mb-2 text-sm text-slate-500">
									{formatDate(post.date)}
								</div>
								<h3
									class="mb-3 font-brand text-xl font-medium text-slate-800 transition-colors duration-200 group-hover:text-primary"
								>
									{@html post.title.rendered}
								</h3>
								<p class="mb-4 line-clamp-3 text-slate-600">
									{getExcerpt(post.excerpt.rendered)}
								</p>
								<div
									class="flex items-center font-medium text-primary transition-colors duration-200 group-hover:text-primary/80"
								>
									<span>Baca Selengkapnya</span>
									<svg
										class="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										></path>
									</svg>
								</div>
							</div>
						</button>
					</article>
				{/each}
			</div>
		{:else}
			<div class="text-center">
				<h2 class="mb-6 font-brand text-3xl font-light sm:text-4xl">
					<span class="text-primary">Segera</span> Hadir
				</h2>
				<p class="mb-8 text-lg text-slate-600">
					Pantau terus untuk tips terbaru tentang buah dan hidup sehat.
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<button
						onclick={() => goto('/')}
						class="w-full rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 sm:w-fit"
					>
						Kembali ke Beranda
					</button>
					<button
						onclick={() => goto('/kontak')}
						class="w-full rounded-md border border-primary px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white sm:w-fit"
					>
						Hubungi Kami
					</button>
				</div>
			</div>
		{/if}
	</div>
</section>

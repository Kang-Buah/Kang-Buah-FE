<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { Calendar, Clock, UserRoundPen } from '@lucide/svelte';

	export let data;

	function stripHtml(html) {
		if (!html) return '';
		return html.replace(/<[^>]+>/g, '');
	}

	function formatDate(dateString) {
		if (!dateString) return '';
		const date = new Date(dateString);
		return date.toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function getReadingTime(content) {
		if (!content) return 0;
		const text = stripHtml(content);
		const wordsPerMinute = 200;
		const wordCount = text.split(/\s+/).length;
		return Math.ceil(wordCount / wordsPerMinute);
	}

	function goBackToBlog() {
		goto('/blog');
	}

	function formatAuthorName(fullName) {
		if (!fullName) return '';
		const parts = fullName.trim().split(' ');
		if (parts.length === 1) return parts[0]; // nama tunggal
		const lastName = parts[parts.length - 1];
		const initials = parts
			.slice(0, -1)
			.map((n) => n[0].toUpperCase() + '. ')
			.join(' ');
		return `${initials} ${lastName}`;
	}
</script>

<svelte:head>
	<title>{stripHtml(data?.post?.title?.rendered) || 'Artikel'} | Blog Kang Buah</title>
	<meta
		name="description"
		content={stripHtml(data?.post?.excerpt?.rendered) || 'Artikel menarik dari Kang Buah'}
	/>
	<meta property="og:title" content={stripHtml(data?.post?.title?.rendered) || 'Artikel'} />
	<meta
		property="og:description"
		content={stripHtml(data?.post?.excerpt?.rendered) || 'Artikel menarik dari Kang Buah'}
	/>
	{#if data?.post?.featured_media}
		<meta property="og:image" content={data.post.featured_media} />
	{/if}
	<meta property="og:type" content="article" />
</svelte:head>

<!-- Hero Banner Section -->
<section class="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
	<div class="absolute inset-0 bg-black/20"></div>
	<div class="relative mx-auto max-w-4xl px-4 py-16 sm:px-8 sm:py-24">
		<div class="text-center">
			<button
				onclick={goBackToBlog}
				class="mb-6 inline-flex items-center text-white/90 transition-colors duration-200 hover:text-white"
			>
				<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Kembali ke Blog
			</button>

			<h1 class="mb-6 font-brand text-3xl font-light text-white sm:text-4xl lg:text-5xl">
				<span class="text-white"
					>{@html data?.post?.title?.rendered || 'Artikel Tidak Ditemukan'}</span
				>
			</h1>

			{#if data?.post}
				<div class="flex flex-wrap justify-center gap-4 text-white/90">
					<div class="flex items-center">
						<Calendar class="mr-2 h-4 w-4" />
						{formatDate(data.post.date)}
					</div>
					<div class="flex items-center">
						<Clock class="mr-2 h-4 w-4" />
						{getReadingTime(data.post.content.rendered)} menit baca
					</div>
					<div class="flex items-center">
						<UserRoundPen class="mr-2 h-4 w-4" />
						{#each data.post.authors as author, i (author.user_id)}
							<span>{formatAuthorName(author.display_name)}</span>
							{#if i < data.post.authors.length - 2}
								<span>, </span>
							{:else if i === data.post.authors.length - 2}
								<pre> &amp; </pre>
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>

	<!-- Background Banner Image -->
	{#if data?.post?.featured_media}
		<div class="absolute inset-0 -z-10">
			<img
				src={data.post.featured_media}
				alt={stripHtml(data.post.title.rendered)}
				class="h-full w-full object-cover brightness-[35%]"
				loading="eager"
			/>
		</div>
	{:else}
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
	{/if}
</section>

<!-- Article Content Section -->
<article class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-4xl px-4 sm:px-8">
		<div class="prose prose-lg max-w-none">
			{#if data?.post?.featured_media}
				<div class="mb-8">
					<img
						src={data.post.featured_media}
						alt={stripHtml(data.post.title.rendered)}
						class="w-full rounded-lg shadow-lg"
						loading="lazy"
					/>
				</div>
			{/if}

			<div class="leading-relaxed text-slate-700">
				{@html data?.post?.content?.rendered || '<p>Artikel tidak ditemukan.</p>'}
			</div>
		</div>

		<div class="mt-12 text-center">
			<button
				onclick={goBackToBlog}
				class="inline-flex items-center rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-primary/90"
			>
				<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Kembali ke Blog
			</button>
		</div>
	</div>
</article>

<!-- Related Articles Section -->
<section class="bg-slate-50 py-16 sm:py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-8">
		<h2 class="mb-4 font-brand text-3xl font-light sm:text-4xl">
			<span class="text-primary">Artikel</span> Lainnya
		</h2>
		<p class="mb-8 text-lg text-slate-600">Temukan artikel menarik lainnya dari Kang Buah</p>
		<button
			onclick={goBackToBlog}
			class="inline-flex items-center rounded-md border border-primary px-6 py-3 font-medium text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
		>
			Lihat Semua Artikel
			<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
			</svg>
		</button>
	</div>
</section>

<style>
	:global(.prose) {
		color: inherit;
	}

	:global(.prose h1),
	:global(.prose h2),
	:global(.prose h3),
	:global(.prose h4),
	:global(.prose h5),
	:global(.prose h6) {
		color: #1e293b;
		font-weight: 600;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.prose p) {
		margin-bottom: 1.5rem;
		line-height: 1.7;
	}

	:global(.prose ul),
	:global(.prose ol) {
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
	}

	:global(.prose blockquote) {
		border-left: 4px solid #3b82f6;
		padding-left: 1rem;
		margin: 2rem 0;
		font-style: italic;
		color: #64748b;
	}

	:global(.prose img) {
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
	}

	:global(.prose a) {
		color: #3b82f6;
		text-decoration: underline;
	}

	:global(.prose a:hover) {
		color: #1d4ed8;
	}
</style>

<script>
	import { goto } from '$app/navigation';
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

<!-- Coming Soon Section -->
<section class="bg-white py-16 sm:py-20">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-8">
		<h2 class="mb-6 font-brand text-3xl font-light sm:text-4xl">
			<span class="text-primary">Segera</span> Hadir
		</h2>
		<p class="mb-8 text-lg text-slate-600">
			Pantau terus untuk tips terbaru tentang buah dan hidup sehat.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<button
				onclick={() => goto('/', { invalidateAll: true })}
				class="w-full rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 sm:w-fit"
			>
				Kembali ke Beranda
			</button>
			<button
				onclick={() => goto('/kontak', { invalidateAll: true })}
				class="w-full rounded-md border border-primary px-6 py-3 font-medium text-primary hover:bg-primary hover:text-white sm:w-fit"
			>
				Hubungi Kami
			</button>
		</div>
	</div>
</section>

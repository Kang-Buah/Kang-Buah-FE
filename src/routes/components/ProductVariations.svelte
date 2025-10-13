<script>
	const items = [
		{
			name: 'Buah Kiloan',
			desc: 'Pilihan buah segar dalam satuan kilo, cocok untuk kebutuhan harian.',
			img: '/assets/images/product-variations/Buah-Kiloan.jpg'
		},
		{
			name: 'Buah Potong',
			desc: 'Siap santap, higienis, dan praktis untuk dinikmati kapan saja.',
			img: '/assets/images/product-variations/Buah-Potong.jpg'
		},
		{
			name: 'Parcel Buah',
			desc: 'Pilihan hadiah sehat dan elegan untuk momen spesial.',
			img: '/assets/images/product-variations/Parcel-Buah.jpg'
		}
	];

	function toWebp(path) {
		return path.replace(/\.[^.]+$/, '.webp');
	}
</script>

<section class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-8">
		<h2 class="mb-8 text-center font-brand text-3xl font-light sm:text-4xl">
			<span class="text-primary">Variasi</span> Produk
		</h2>

		<!-- Simple responsive grid with hover description -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each items as item}
				<article
					class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
				>
					<picture>
						<source srcset={toWebp(item.img)} type="image/webp" />
						<img
							src={item.img}
							alt={item.name}
							class="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
							loading="lazy"
						/>
					</picture>
					<!-- Always-visible title band -->
					<div
						class="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-4 text-white group-hover:opacity-0 transition-opacity duration-300"
					>
						<h3 class="text-lg font-semibold">{item.name}</h3>
					</div>
					<!-- Hover overlay with description -->
					<div
						class="absolute inset-0 z-20 grid place-items-center bg-black/70 px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					>
						<div>
							<h3 class="mb-2 text-xl font-semibold text-white">{item.name}</h3>
							<p class="text-white/90">{item.desc}</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

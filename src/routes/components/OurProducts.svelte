<script>
	const products = [
		{
			name: 'Apel',
			image: '/assets/images/products/fruits/Apel.jpg',
			price: 28000,
			discountPercent: 10
		},
		{ name: 'Pisang', image: '/assets/images/products/fruits/Pisang.jpg', price: 18000 },
		{
			name: 'Jeruk',
			image: '/assets/images/products/fruits/Jeruk.jpg',
			price: 22000,
			discountPercent: 15
		},
		{ name: 'Mangga', image: '/assets/images/products/fruits/Mangga.jpg', price: 30000 },
		{ name: 'Buah Naga', image: '/assets/images/products/fruits/Buah-Naga.jpg', price: 35000 },
		{
			name: 'Anggur',
			image: '/assets/images/products/fruits/Anggur.jpg',
			price: 45000,
			discountPercent: 5
		},
		{
			name: 'Anggur Hijau',
			image: '/assets/images/products/fruits/Anggur-Hijau.jpg',
			price: 46000
		},
		{ name: 'Pir', image: '/assets/images/products/fruits/Pir.jpg', price: 27000 }
	];

	function formatIDR(amount) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			maximumFractionDigits: 0
		}).format(amount);
	}

	function discountedPrice(price, discountPercent) {
		if (!discountPercent) return price;
		return Math.round(price * (discountPercent ? 1 - discountPercent / 100 : 1));
	}

	function toWebp(path) {
		return path.replace(/\.[^.]+$/, '.webp');
	}
</script>

<section class="bg-white py-12 sm:py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-8">
		<header class="mb-8 text-center">
			<h2 class="mb-[0.75em] font-brand text-3xl font-light sm:text-4xl">
				<span class="text-primary">Produk</span> Segar Kami
			</h2>
			<p class="mx-auto max-w-lg text-center text-slate-600">
				Pilihan buah berkualitas untuk setiap kebutuhan harian, sajian cepat, hingga hadiah untuk
				orang tersayang ❤️
			</p>
		</header>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 sm:gap-6 lg:grid-cols-4">
			{#each products as p}
				<article
					class="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
				>
					<div class="relative">
						<picture>
							<source srcset={toWebp(p.image)} type="image/webp" />
							<img
								src={p.image}
								alt={p.name}
								class="h-40 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-48"
								loading="lazy"
							/>
						</picture>
						{#if p.discountPercent}
							<div
								class="absolute top-2 left-2 rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-white"
							>
								-{p.discountPercent}%
							</div>
						{/if}
					</div>
					<div class="p-3 sm:p-4">
						<h3 class="mb-1 text-sm font-semibold sm:text-base">{p.name}</h3>
						<div class="flex items-baseline gap-2">
							{#if p.discountPercent}
								<span class="text-base font-bold text-secondary sm:text-lg"
									>{formatIDR(discountedPrice(p.price, p.discountPercent))}</span
								>
								<span class="text-xs text-slate-500 line-through sm:text-sm"
									>{formatIDR(p.price)}</span
								>
							{:else}
								<span class="text-base font-bold text-slate-900 sm:text-lg"
									>{formatIDR(p.price)}</span
								>
							{/if}
						</div>
						<div class="mt-3">
							<a
								href="/#keranjang"
								class="inline-block rounded-md border border-primary px-3 py-1.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
								>Tambah ke Keranjang</a
							>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

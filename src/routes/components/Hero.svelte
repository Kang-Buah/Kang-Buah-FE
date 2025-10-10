<script>
	const decorSrc = '/assets/images/decor/A-Basket-of-Fruit.png';
	const decorSrcWebp = '/assets/images/decor/A-Basket-of-Fruit.webp';
</script>

<section class="relative isolate overflow-hidden bg-white">
	<div
		class="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 pb-12 sm:flex-row sm:gap-12 sm:px-8"
	>
		<div class="w-full sm:w-1/2">
			<h1 class="mb-4 font-brand text-4xl leading-tight font-light sm:text-5xl lg:text-6xl">
				<span class="text-primary">Buah Segar</span> Setiap Hari
			</h1>
			<p class="mb-6 max-w-prose text-slate-700 sm:text-lg">
				Dapatkan pilihan buah-buahan terbaik dengan kualitas premium dan harga yang bersahabat.
				Pesan mudah, kirim cepat.
			</p>
			<div class="flex flex-wrap gap-3">
				<a
					href="#toko"
					class="rounded-md bg-primary px-5 py-3 font-medium text-white hover:bg-primary/90"
					>Belanja Sekarang</a
				>
				<a
					href="#tentang-kami"
					class="rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-800 hover:border-primary hover:text-primary"
					>Eksplor Produk</a
				>
			</div>
		</div>
		<div class="relative w-full sm:w-1/2">
			<picture>
				<source srcset={decorSrcWebp} type="image/webp" />
				<img
					src={decorSrc}
					alt="Keranjang buah segar"
					class="mx-auto w-full max-w-md drop-shadow-md"
					loading="eager"
				/>
			</picture>
			<div
				class="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-secondary/20 blur-xl sm:block"
			></div>
			<div
				class="pointer-events-none absolute -top-6 -right-6 hidden h-24 w-24 rounded-full bg-primary/20 blur-xl sm:block"
			></div>
		</div>
	</div>
</section>

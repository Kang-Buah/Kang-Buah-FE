<script>
	import { goto } from '$app/navigation';

	const decorSrc = '/assets/images/decor/A-Basket-of-Fruit.png';
	const decorSrcWebp = '/assets/images/decor/A-Basket-of-Fruit.webp';
</script>

<section class="relative isolate overflow-hidden bg-white">
	<div
		class="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 pb-12 sm:flex-row sm:gap-12 sm:px-8"
	>
		<div class="w-full sm:w-1/2" data-aos="fade-right" data-aos-duration="1200">
			<h1
				class="mb-4 font-brand text-4xl leading-tight font-light sm:text-5xl lg:text-6xl"
				data-aos="fade-down"
				data-aos-duration="1000"
				data-aos-delay="200"
			>
				<span class="text-primary">Buah Segar</span> Setiap Hari
			</h1>
			<p
				class="mb-6 max-w-prose text-slate-700 sm:text-lg"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="400"
			>
				Dapatkan pilihan buah-buahan terbaik dengan kualitas premium dan harga yang bersahabat.
				Pesan mudah, kirim cepat.
			</p>
			<div
				class="flex flex-wrap gap-3"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="600"
			>
				<a
					href="#shop"
					class="rounded-md bg-primary px-5 py-3 font-medium text-white hover:bg-primary/90"
					>Belanja Sekarang</a
				>
				<a
					href="#produk"
					class="rounded-md border border-slate-300 px-5 py-3 font-medium text-slate-800 hover:border-primary hover:text-primary"
					>Eksplor Produk</a
				>
			</div>
		</div>
		<div class="relative w-full sm:w-1/2" data-aos="fade-left" data-aos-duration="1200">
			<picture>
				<source srcset={decorSrcWebp} type="image/webp" />
				<img
					src={decorSrc}
					alt="Keranjang buah segar"
					class="mx-auto w-full max-w-md drop-shadow-md"
					loading="eager"
					data-aos="fade-down"
					data-aos-duration="1000"
					data-aos-delay="300"
				/>
			</picture>
			<div
				class="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-secondary/20 blur-xl sm:block"
				data-aos="fade-in"
				data-aos-duration="800"
				data-aos-delay="800"
			></div>
			<div
				class="pointer-events-none absolute -top-6 -right-6 hidden h-24 w-24 rounded-full bg-primary/20 blur-xl sm:block"
				data-aos="fade-in"
				data-aos-duration="800"
				data-aos-delay="1000"
			></div>
		</div>
	</div>
</section>
